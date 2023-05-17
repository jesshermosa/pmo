import { readFile, utils } from "xlsx";
import { join } from "path";
import { ExcelData } from "@/common/types";

const getExcelData = async (): Promise<ExcelData[]> => {
  const filePath = join(
    __dirname,
    "..",
    "..",
    "..",
    "public",
    "assets",
    "Risk_list_rev01.xlsx"
  );
  const workbook = await readFile(filePath, {});
  const sheet = workbook.Sheets[workbook.SheetNames[1]];

  return utils.sheet_to_json<ExcelData>(sheet, {
    defval: "",
  });
};

export default getExcelData;
