import { ProjectPhase, Risk } from "@/common/types";
import { TRiskListShowmore } from "./RiskList";

export interface IRiskContext {
  selectedRiskData: Risk;
  setSelectedRiskData: React.Dispatch<React.SetStateAction<Risk>>;
  selectedRiskShowMore: TRiskListShowmore;
  setSelectedRiskShowMore: React.Dispatch<
    React.SetStateAction<TRiskListShowmore>
  >;
  showmoreIsOpen: boolean;
  setShowmoreIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  projectPhaseRisk: ProjectPhase | null;
  setProjectPhaseRisk: React.Dispatch<React.SetStateAction<ProjectPhase>>;
}

export const initialState = {
  selectedRiskData: {
    title: "",
    effectOrImpact: "",
    area: "",
    category: "",
    contingency: "",
    impactProbability: "",
    plannedAction: "",
    mitigation: "",
    description: "",
    cellRow: 0,
  },
  setSelectedRiskData: () => {},
  selectedRiskShowMore: {
    data: {
      title: "",
      effectOrImpact: "",
      area: "",
      category: "",
      contingency: "",
      impactProbability: "",
      plannedAction: "",
      mitigation: "",
      description: "",
      cellRow: 0,
    },
    column: 0,
    row: 0,
  },
  setSelectedRiskShowMore: () => {},
  showmoreIsOpen: false,
  setShowmoreIsOpen: () => false,
  selectedCategoryIndex: -1,
  setSelectedCategoryIndex: () => {},
  projectPhaseRisk: null,
  setProjectPhaseRisk: () => {},
};
