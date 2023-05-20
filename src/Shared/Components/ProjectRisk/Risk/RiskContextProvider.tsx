"use client";
import { Risk } from "@/common/types";
import React, { FC, createContext, useContext, useRef, useState } from "react";
import { TRiskListShowmore } from "./RiskList";

interface IRiskContext {
  selectedRiskData: Risk;
  setSelectedRiskData: React.Dispatch<React.SetStateAction<Risk>>;
  selectedRiskShowMore: TRiskListShowmore;
  setSelectedRiskShowMore: React.Dispatch<
    React.SetStateAction<TRiskListShowmore>
  >;
  showmoreIsOpen: boolean;
  setShowmoreIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RiskContext = createContext<IRiskContext>({
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
});

export const useRiskContext = () => useContext(RiskContext);

const RiskContextProvider: FC<any> = ({ children }: any) => {
  const [showmoreIsOpen, setShowmoreIsOpen] = useState<boolean>(false);
  const [selectedRiskData, setSelectedRiskData] = useState<Risk>({
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
  });
  const [selectedRiskShowMore, setSelectedRiskShowMore] =
    useState<TRiskListShowmore>({
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
      column: null,
      row: null,
    });

  return (
    <RiskContext.Provider
      value={{
        selectedRiskData,
        setSelectedRiskData,
        selectedRiskShowMore,
        setSelectedRiskShowMore,
        showmoreIsOpen,
        setShowmoreIsOpen,
      }}
    >
      {children}
    </RiskContext.Provider>
  );
};

export default RiskContextProvider;
