import { ExcelData, ProjectPhase, Risk } from "@/common/types";

const projectPhaseCategories = [
  "Sales",
  "Discovery",
  "Detailing",
  "Implementation",
  "SIT/UAT",
  "GO LIVE",
];

const mapData = async (excelData: ExcelData[]): Promise<ProjectPhase> => {
  let projectPhase: ProjectPhase = {
    categories: [],
  };

  excelData.forEach((data) => {
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
    };

    projectPhaseCategories.forEach((phase) => {
      if (!!data[phase]) return;

      const categoryIndex = projectPhase.categories.findIndex(
        (cat) => cat.name === phase
      );

      if (categoryIndex === -1) {
        let { categories } = projectPhase;
        projectPhase.categories = [
          ...categories,
          { name: phase, risks: [risk] },
        ];
      } else {
        let { risks } = projectPhase.categories[categoryIndex];
        projectPhase.categories[categoryIndex].risks = [...risks, risk];
      }
    });
  });

  return projectPhase;
};

export default mapData;
