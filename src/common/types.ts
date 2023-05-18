export interface Risk {
  category: string;
  area: string;
  title: string;
  description: string;
  effectOrImpact: string;
  impactProbability: string;
  mitigation: string;
  contingency: string;
  plannedAction: string;
  cellRow: number;
}

export interface Category {
  name: string;
  risks: Risk[];
}

export interface StaticPathParams {
  [key: string]: any;
}

export interface ProjectPhase {
  categories: Category[];
}

export interface ExcelData {
  Mats: string;
  Jesper: string;
  Per: string;
  Eki: string;
  Sofie: string;
  Helena: string;
  Karolin: string;
  Summa: string;
  "CAT.": string;
  AREA: string;
  TITLE: string;
  DESCRIPTION: string;
  "EFFECT / IMPACT": string;
  "IMPACTx PROBABILITY=SCORE | LEVEL": string;
  "MITIGATION (avoid risk)": string;
  "CONTINGENCY PLAN (if risk occur)": string;
  "UPDATED AT (date)": string;
  "CHANGE (postive/negative/no change)": string;
  "PLANNED ACTION": string;
  OWNER: string;
  "PROJECT PHASE": string;
  Sales: string;
  Discovery: string;
  Detailing: string;
  Implementation: string;
  "SIT/UAT": string;
  "GO LIVE": string;
  [key: string]: string;
}

export interface ColumnMap {
  [key: string]: string;
}
