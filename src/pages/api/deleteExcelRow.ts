import { readFile, writeFile, utils } from "xlsx";
import { NextApiRequest, NextApiResponse } from "next";
import { excelFilePath } from "@/utils/getExcelFilePath";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  function ec(r: any, c: any) {
    return utils.encode_cell({ r: r, c: c });
  }
  function delete_row(ws: any, row_index: number) {
    var variable = utils.decode_range(ws["!ref"]);
    for (var R = row_index; R < variable.e.r; ++R) {
      for (var C = variable.s.c; C <= variable.e.c; ++C) {
        ws[ec(R, C)] = ws[ec(R + 1, C)];
      }
    }
    variable.e.r--;
    ws["!ref"] = utils.encode_range(variable.s, variable.e);
  }

  const { cellRow } = req.body;
  const workbook = await readFile(excelFilePath);
  const newWorkbook = workbook;
  const sheet = newWorkbook.Sheets[newWorkbook.SheetNames[1]];

  try {
    delete_row(sheet, cellRow - 1);
    writeFile(newWorkbook, excelFilePath);
  } catch (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ success: true });
};

export default handler;
