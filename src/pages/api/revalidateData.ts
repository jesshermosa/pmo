import { withSessionRoute } from "@/common/server/sessionConfig";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";
import { read, writeFile } from "xlsx";

async function fetchGraph(endpoint: string, accessToken: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(endpoint, options);

    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  if (!req.session.accessToken) {
    return res.redirect("/api/auth/signin");
  }

  const response = await fetchGraph(
    `https://graph.microsoft.com/v1.0/me/drives/${process.env.DRIVE_ID}/items/${process.env.DRIVE_ITEM_ID}`,
    req.session.accessToken
  );

  const workbookResponse = await fetch(
    response["@microsoft.graph.downloadUrl"]
  );

  const resBlob = await workbookResponse.blob();
  const resBufferArray = await resBlob.arrayBuffer();
  const resBuffer = Buffer.from(resBufferArray);
  const workbook = await read(resBuffer);

  if (!workbookResponse.ok)
    throw new Error(`unexpected response ${workbookResponse.statusText}`);

  let newWorkBook = workbook;
  await writeFile(newWorkBook, excelFilePath);

  await res.revalidate("/");
  return res.status(200).send("Success!");
};

export default withSessionRoute(handler);
