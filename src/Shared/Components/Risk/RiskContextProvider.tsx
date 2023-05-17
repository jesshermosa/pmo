'use client';
import React, { FC, createContext, useContext, useRef, useState } from 'react';
import { TRiskData } from './RiskCard';
import { TRiskListShowmore } from './RiskList';

interface IRiskContext {
	selectedRiskData: TRiskData;
	setSelectedRiskData: React.Dispatch<React.SetStateAction<TRiskData>>;
	selectedRiskShowMore: TRiskListShowmore;
	setSelectedRiskShowMore: React.Dispatch<
		React.SetStateAction<TRiskListShowmore>
	>;
	showmoreIsOpen: boolean;
	setShowmoreIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RiskContext = createContext<IRiskContext>({
	selectedRiskData: {
		title: '',
		effectOrImpact: '',
		area: '',
		category: '',
		contingency: '',
		impactProbability: '',
		plannedAction: '',
		mitigation: '',
		description: '',
	},
	setSelectedRiskData: () => {},
	selectedRiskShowMore: {
		data: {
			title: '',
			effectOrImpact: '',
			area: '',
			category: '',
			contingency: '',
			impactProbability: '',
			plannedAction: '',
			mitigation: '',
			description: '',
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
	const [selectedRiskData, setSelectedRiskData] = useState<TRiskData>({
		title: '',
		effectOrImpact: '',
		area: '',
		category: '',
		contingency: '',
		impactProbability: '',
		plannedAction: '',
		mitigation: '',
		description: '',
	});
	const [selectedRiskShowMore, setSelectedRiskShowMore] =
		useState<TRiskListShowmore>({
			data: {
				title: '',
				effectOrImpact: '',
				area: '',
				category: '',
				contingency: '',
				impactProbability: '',
				plannedAction: '',
				mitigation: '',
				description: '',
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
