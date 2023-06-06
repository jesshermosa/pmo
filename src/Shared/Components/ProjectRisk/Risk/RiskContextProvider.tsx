"use client";
import { ProjectPhase, Risk } from "@/common/types";
import React, { FC, createContext, useContext, useState } from "react";
import { initialState, IRiskContext } from "./risk-context-types";
import { TRiskListShowmore } from "./RiskList";

const RiskContext = createContext<IRiskContext>(initialState);

export const useRiskContext = () => useContext(RiskContext);

interface ContextProps {
  projectPhase: ProjectPhase;
  isAuthenticatedUser: boolean;
  children: React.ReactNode;
}

const RiskContextProvider: FC<ContextProps> = ({
  children,
  projectPhase,
  isAuthenticatedUser,
}) => {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(isAuthenticatedUser);
  const [projectPhaseRisk, setProjectPhaseRisk] =
    useState<ProjectPhase>(projectPhase);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(
    projectPhase?.categories ? 0 : -1
  );
  const [showmoreIsOpen, setShowmoreIsOpen] = useState<boolean>(false);
  const [selectedRiskData, setSelectedRiskData] = useState<Risk>(
    initialState.selectedRiskData
  );
  const [selectedRiskShowMore, setSelectedRiskShowMore] =
    useState<TRiskListShowmore>(initialState.selectedRiskShowMore);

  return (
    <RiskContext.Provider
      value={{
        selectedRiskData,
        setSelectedRiskData,
        selectedRiskShowMore,
        setSelectedRiskShowMore,
        showmoreIsOpen,
        setShowmoreIsOpen,
        selectedCategoryIndex,
        setSelectedCategoryIndex,
        projectPhaseRisk,
        setProjectPhaseRisk,
        isAuthenticated,
      }}
    >
      {children}
    </RiskContext.Provider>
  );
};

export default RiskContextProvider;
