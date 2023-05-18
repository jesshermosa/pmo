import { ColumnMap, ExcelData } from "@/common/types";

const excelDataFields: ExcelData = {
  Mats: "",
  Jesper: "",
  Per: "",
  Eki: "",
  Sofie: "",
  Helena: "",
  Karolin: "",
  Summa: "",
  "CAT.": "",
  AREA: "",
  TITLE: "",
  DESCRIPTION: "",
  "EFFECT / IMPACT": "",
  "IMPACTx PROBABILITY=SCORE | LEVEL": "",
  "MITIGATION (avoid risk)": "",
  "CONTINGENCY PLAN (if risk occur)": "",
  "UPDATED AT (date)": "",
  "CHANGE (postive/negative/no change)": "",
  "PLANNED ACTION": "",
  OWNER: "",
  "PROJECT PHASE": "",
  Sales: "",
  Discovery: "",
  Detailing: "",
  Implementation: "",
  "SIT/UAT": "",
  "GO LIVE": "",
};

export const columnMap: ColumnMap = {
  category: "CAT.",
  area: "AREA",
  title: "TITLE",
  description: "DESCRIPTION",
  effectOrImpact: "EFFECT / IMPACT",
  mitigation: "MITIGATION (avoid risk)",
  contingency: "CONTINGENCY PLAN (if risk occur)",
  impactProbability: "IMPACTx PROBABILITY=SCORE | LEVEL",
  plannedAction: "PLANNED ACTION",
};

export const getCellColumn = (field: string) => {
  let fieldIndex = null;
  Object.keys(excelDataFields).every((key, index) => {
    if (key === columnMap[field]) {
      fieldIndex = index;
      return false;
    }
    return true;
  });

  if (fieldIndex === null) return fieldIndex;

  return String.fromCharCode(97 + fieldIndex).toUpperCase();
};
