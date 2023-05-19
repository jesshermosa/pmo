import { readFile, utils } from "xlsx";
import { ExcelData } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  if (_req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  const workbook = await readFile(excelFilePath, {});
  const sheet = workbook.Sheets[workbook.SheetNames[1]];

  const data = utils.sheet_to_json<ExcelData>(sheet, {
    defval: "",
  });

  res.status(200).json(data);
};

export default handler;
