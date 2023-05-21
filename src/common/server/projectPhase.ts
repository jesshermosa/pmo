import { ExcelData, ProjectPhase, Risk } from "@/common/types";

export const getProjectPhase = async (): Promise<ProjectPhase> => {
  let projectPhase: ProjectPhase = {
    categories: [
      { name: "Discovery", risks: [] },
      { name: "Detailing", risks: [] },
      { name: "Implementation", risks: [] },
      { name: "SIT/UAT", risks: [] },
      { name: "GO LIVE", risks: [] },
    ],
  };

  const response = await fetch(`${process.env.URL}/api/getExcelData`);
  const excelData = await response.json();

  excelData.forEach((data: ExcelData, index: number) => {
    const risk: Risk = {
      category: data["CAT."],
      area: data.AREA,
      title: data.TITLE,
      description: data.DESCRIPTION,
      effectOrImpact: data["EFFECT / IMPACT"],
      mitigation: data["MITIGATION (avoid risk)"],
      contingency: data["CONTINGENCY PLAN (if risk occur)"],
      impactProbability: data["IMPACTx PROBABILITY=SCORE | LEVEL"],
      plannedAction: data["PLANNED ACTION"],
      cellRow: index + 2,
    };

    projectPhase.categories.forEach((phase, index) => {
      const { name } = phase;
      if (!data[name]) return;

      let { risks } = projectPhase.categories[index];
      projectPhase.categories[index].risks = [...risks, risk];
    });
  });

  return projectPhase;
};
