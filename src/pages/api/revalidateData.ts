import { withSessionRoute } from "@/common/server/sessionConfig";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";
import { read, writeFile } from "xlsx";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  if (!req.session.accessToken) {
    return res.redirect("/api/auth/signin");
  }
  const graphUrl = `https://graph.microsoft.com/v1.0/me/drives/${process.env.DRIVE_ID}/items/${process.env.DRIVE_ITEM_ID}`;

  const options = {
    headers: {
      Authorization: `Bearer ${req.session.accessToken}`,
    },
  };

  const response = await fetch(graphUrl, options);

  if (!response.ok) return res.status(500).send(response.text());

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

    let newWorkBook = workbook;
    await writeFile(newWorkBook, excelFilePath);

    await res.revalidate("/");
    return res.status(200).send("Success!");
  } catch (error: any) {
    console.error("revalidation error: ", error);
    return res.status(500).send(error.message);
  }
};

export default withSessionRoute(handler);
