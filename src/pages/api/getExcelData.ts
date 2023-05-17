import { readFile, utils } from "xlsx";
import { join } from "path";
import { ExcelData } from "@/common/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  if (_req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  const filePath = join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "public",
    "assets",
    "Risk_list_rev01.xlsx"
  );
  const workbook = await readFile(filePath, {});
  const sheet = workbook.Sheets[workbook.SheetNames[1]];

  const data = utils.sheet_to_json<ExcelData>(sheet, {
    defval: "",
  });

  res.status(200).json(data);
};

export default handler;
