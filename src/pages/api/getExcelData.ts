import { read, readFile, utils } from "xlsx";
import { ExcelData } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  if (req.session.accessToken) {
    const graphUrl = `https://graph.microsoft.com/v1.0/me/drives/${process.env.DRIVE_ID}/items/${process.env.DRIVE_ITEM_ID}`;

    const options = {
      headers: {
        Authorization: `Bearer ${req.session.accessToken}`,
      },
    };

    const response = await fetch(graphUrl, options);

    if (!response.ok) {
      console.error(response);
      return res.status(500).send("graph fetch error");
    }

    const graphResponse = await response.json();
    const workbookResponse = await fetch(
      graphResponse["@microsoft.graph.downloadUrl"]
    );

    if (!workbookResponse.ok) return res.status(500).send("workbook error!");

    try {
      const resBlob = await workbookResponse.blob();
      const resBufferArray = await resBlob.arrayBuffer();
      const resBuffer = Buffer.from(resBufferArray);
      const workbook = await read(resBuffer);
      const sheet = workbook.Sheets[workbook.SheetNames[1]];

      const data = utils.sheet_to_json<ExcelData>(sheet, {
        defval: "",
      });

      return res.status(200).json(data);
    } catch (error: any) {
      console.error("revalidation error: ", error);
      return res.status(500).send(error.message);
    }
  }

  try {
    const workbook = await readFile(excelFilePath, {});
    const sheet = workbook.Sheets[workbook.SheetNames[1]];

    const data = utils.sheet_to_json<ExcelData>(sheet, {
      defval: "",
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(200).json(error);
  }
};

export default handler;
