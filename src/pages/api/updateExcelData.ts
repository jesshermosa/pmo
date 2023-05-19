import { readFile, writeFile } from "xlsx";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";
import { getCellColumn } from "@/utils/getCellColumn";

const handler = async (_req: NextApiRequest, res: NextApiResponse<any>) => {
  if (_req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const { risk } = _req.body;

  const workbook = await readFile(excelFilePath);
  const sheetName = workbook.SheetNames[1];
  let newWorkBook = workbook;

  Object.keys(risk).forEach((r) => {
    if (r === "cellRow") return;

    const cellColumn = getCellColumn(r);
    const cell = `${cellColumn}${risk.cellRow}`;
    if (newWorkBook.Sheets[sheetName][cell]) {
      newWorkBook.Sheets[sheetName][cell].v = risk[r];
    }
  });

  writeFile(newWorkBook, excelFilePath);

  res.status(200).json({ success: true });
};

export default handler;
