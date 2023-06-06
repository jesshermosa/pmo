'use client';

import { Risk } from '@/common/types';
import { useEffect, useRef, useState } from 'react';
import { useRiskContext } from './RiskContextProvider';
import RiskItem from './RiskItem';
import CustomSelect from '../../Select/CustomSelect';
import Image from 'next/image';
import RiskPagination from './RiskPagination';

export type TRiskListShowmore = {
	data: Risk;
	column: number | null;
	row: number | null;
};

const people = [
	{ id: 1, name: 'Wade Cooper' },
	{ id: 2, name: 'Arlene Mccoy' },
	{ id: 3, name: 'Devon Webb' },
	{ id: 4, name: 'Tom Cook' },
	{ id: 5, name: 'Tanya Fox' },
	{ id: 6, name: 'Hellen Schmidt' },
	{ id: 7, name: 'Caroline Schultz' },
	{ id: 8, name: 'Mason Heaney' },
	{ id: 9, name: 'Claudie Smitham' },
	{ id: 10, name: 'Emil Schaefer' },
];

const detailPanelStyle = {
	height: '100%',
	width: '100%',
	backgroundColor: '#EBF3E7',
	display: 'flex',
	padding: '30px',
	borderRadius: '8px',
	columnGap: '100px',
};

const detailStyle: any = {
	height: '100%',
	width: '100%',
	// backgroundColor: 'green',
	display: 'flex',
	flexDirection: 'column',
};

const detailBodyStyle: any = {
	height: '100%',
	width: '100%',
	// backgroundColor: 'blue',
	display: 'flex',
	flexDirection: 'column',
	rowGap: '20px',
};

const detailSubBodyStyle: any = {
	height: '100%',
	width: '100%',
	// backgroundColor: 'white',
	display: 'flex',
	flexDirection: 'column',
};

const contentStyle = {
	color: '#18345C',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: 400,
	fontSize: 14,
};

const contentTitleStyle = {
	color: '#18345C',
	fontWeight: 600,
	fontSize: 15,
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	paddingBottom: 8,
};

const titleStyle = {
	color: '#18345C',
	marginBottom: 20,
	fontWeight: 600,
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontSize: 16,
};

// const InitialRiskList = (data: Risk[], batchSize: number) => {
// 	let batches = [];

// 	for (let i = 0; i < data.length; i += batchSize) {
// 		const batch = data.slice(i, i + batchSize);
// 		batches.push(batch);
// 	}
// 	return batches;
// };

export const RiskCardDetails = () => {
	const riskRef = useRef<HTMLDivElement>(null);

	const { selectedRiskShowMore, showmoreIsOpen, setShowmoreIsOpen } =
		useRiskContext();
	const id = `RiskCardDetail-${String(selectedRiskShowMore?.row)}`;
	const GridWrapperStyle: any = {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	};

	const GridStyle: React.CSSProperties = {
		gridTemplateColumns: 'repeat(5, minmax(0, 229px))',
		justifyContent: 'center',
		textAlign: '-webkit-center' as any,
	};

	const ActivePointerMain = () => {
		const triangle = {
			width: 0,
			height: 0,
			borderStyle: 'solid',
			borderWidth: '0px 20px 20px 20px',
			borderColor: 'transparent transparent #EBF3E7 transparent',
		};

		return (
			<>
				<div style={GridWrapperStyle}>
					<ul
						role="list"
						className="grid  gap-x-6 gap-y-8 xl:gap-x-8"
						style={GridStyle}
					>
						<li style={{ width: '229px' }}>
							<div
								style={{
									...triangle,
									display:
										selectedRiskShowMore.column === 0 && showmoreIsOpen
											? 'block'
											: 'none',
								}}
							></div>
						</li>

						<li style={{ width: '229px' }}>
							<div
								style={{
									...triangle,
									display:
										selectedRiskShowMore.column === 1 && showmoreIsOpen
											? 'block'
											: 'none',
								}}
							></div>
						</li>

						<li style={{ width: '229px' }}>
							<div
								style={{
									...triangle,
									display:
										selectedRiskShowMore.column === 2 && showmoreIsOpen
											? 'block'
											: 'none',
								}}
							></div>
						</li>

						<li style={{ width: '229px' }}>
							<div
								style={{
									...triangle,
									display:
										selectedRiskShowMore.column === 3 && showmoreIsOpen
											? 'block'
											: 'none',
								}}
							></div>
						</li>

						<li style={{ width: '229px' }}>
							<div
								style={{
									...triangle,
									display:
										selectedRiskShowMore.column === 4 && showmoreIsOpen
											? 'block'
											: 'none',
								}}
							></div>
						</li>
					</ul>
				</div>
			</>
		);
	};

	useEffect(() => {
		if (riskRef.current) {
			riskRef.current.classList.remove('animate-fadeIn');
			if (showmoreIsOpen) {
				riskRef.current.classList.add('animate-fadeIn');
			} else {
				riskRef.current.classList.remove('animate-fadeIn');
			}
		}
	}, [showmoreIsOpen, selectedRiskShowMore]);

	return (
		<>
			<ActivePointerMain />

			<div ref={riskRef} id={id} style={detailPanelStyle}>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexFlow: 'row nowrap',
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
						flexDirection: 'column',
					}}
				>
					<div style={{ display: 'flex' }}>
						<div
							style={{ cursor: 'pointer' }}
							onClick={() => setShowmoreIsOpen(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={3.5}
								stroke="black"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexWrap: 'nowrap',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							width: '100%',
						}}
					>
						<div style={titleStyle}>{selectedRiskShowMore?.data?.title}</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							columnGap: 40,
							width: 'inherit',
						}}
					>
						<div style={detailStyle}>
							<div style={detailBodyStyle}>
								<div style={detailSubBodyStyle}>
									<div style={contentTitleStyle}>Description</div>
									<div style={contentStyle}>
										{selectedRiskShowMore?.data?.description}
									</div>
								</div>
								<div style={detailSubBodyStyle}>
									<div style={contentTitleStyle}>Effect / Impact</div>
									<div style={contentStyle}>
										{selectedRiskShowMore?.data?.effectOrImpact}
									</div>
								</div>
							</div>
						</div>
						{selectedRiskShowMore?.data?.mitigation && (
							<div style={detailStyle}>
								<div style={detailBodyStyle}>
									<div style={detailSubBodyStyle}>
										<div style={contentTitleStyle}>Mitigation</div>
										<div style={contentStyle}>
											{selectedRiskShowMore?.data?.mitigation}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

const RiskListCard = (data: any[]) => {
	const GridWrapperStyle: any = {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	};

	const GridStyle = {
		gridTemplateColumns: 'repeat(5, minmax(0, 229px))',
		justifyContent: 'center',
	};

	const { showmoreIsOpen, selectedRiskShowMore } = useRiskContext();

	const rows = [];

	if (data?.length !== 0) {
		for (let i = 0; i < data?.length; i += 5) {
			const rowItems = data?.slice(i, i + 5);

			const rowComponent = (
				<div style={GridWrapperStyle} key={i}>
					<div className="grid-wrapper" style={GridWrapperStyle}>
						<ul
							role="list"
							className="grid gap-x-6 gap-y-8 xl:gap-x-8"
							style={GridStyle}
						>
							{rowItems.map((item: any, itemIndex: number) => (
								<RiskItem
									key={itemIndex}
									row={rows.length}
									column={itemIndex}
									data={item}
								/>
							))}
						</ul>
					</div>
					{showmoreIsOpen && selectedRiskShowMore.row === rows.length && (
						<RiskCardDetails />
					)}
				</div>
			);

			rows.push(rowComponent);
		}
	}

	return rows;
};

const RiskList = () => {
	const { projectPhaseRisk, selectedCategoryIndex } = useRiskContext();
	const [open, setOpen] = useState(false);
	const [selectedCat, setSelectedCat] = useState({ name: 'All', value: 'All' });
	const [selectedArea, setSelectedArea] = useState({
		name: 'All',
		value: 'All',
	});

	const css = {
		container: 'wrapper-risk-list',
	};

	const selectedRiskList =
		projectPhaseRisk?.categories[selectedCategoryIndex]?.risks.length !== 0
			? projectPhaseRisk?.categories[selectedCategoryIndex]?.risks
			: ([] as Risk[]);

	const selectedCategories = selectedRiskList?.reduce(
		(accumulator: Risk[], value: Risk) => {
			if (
				!accumulator.some(
					(item: Risk) =>
						item.category.toLowerCase() === value.category.toLowerCase()
				)
			) {
				accumulator.push(value);
			}

			return accumulator;
		},
		[]
	);

	const selectedAreas = selectedRiskList?.reduce(
		(accumulator: Risk[], value: Risk) => {
			if (
				!accumulator.some(
					(item: Risk) => item.area.toLowerCase() === value.area.toLowerCase()
				)
			) {
				accumulator.push(value);
			}

			return accumulator;
		},
		[]
	);

	const categories = selectedCategories
		?.filter((val) => val.category !== '')
		.map((item) => ({
			name: item.category,
			value: item.category,
		}));
	if (categories) {
		categories.unshift({ name: 'All', value: 'All' });
	}

	const InitializeCategories = () => {
		const categories = selectedCategories
			?.filter((val) => val.category !== '')
			.map((item) => ({
				name: item.category,
				value: item.category,
			}));
		if (categories) {
			categories.unshift({ name: 'All', value: 'All' });
		}
		return categories;
	};

	const InitializeAreas = () => {
		const areas = selectedAreas
			?.filter((val) => val.area !== '')
			.map((item) => ({
				name: item.area,
				value: item.area,
			}));

		if (areas) {
			areas.unshift({ name: 'All', value: 'All' });
		}
		return areas;
	};

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10; // Set the number of items per page

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};
	let _filteredRiskList = selectedRiskList ? selectedRiskList : [];

	if (selectedCat.name !== 'All') {
		_filteredRiskList = _filteredRiskList.filter(
			(val) => val.category.toLowerCase() === selectedCat.value.toLowerCase()
		);
	}

	if (selectedArea.name !== 'All') {
		_filteredRiskList = _filteredRiskList.filter(
			(val) => val.area.toLowerCase() === selectedArea.value.toLowerCase()
		);
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const [searchQuery, setSearchQuery] = useState('');

	const filteredRisks = _filteredRiskList.filter(
		(risk) =>
			risk.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			risk.area.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const displayedRisks =
		searchQuery === ''
			? filteredRisks.slice(startIndex, endIndex)
			: filteredRisks.slice(startIndex, endIndex);

	const totalItems = filteredRisks.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	return (
		<div className="flex flex-col">
			{selectedRiskList?.length !== 0 && (
				<div className="flex flex-row p-[20px] gap-x-5">
					<div className="w-1/2">
						<CustomSelect
							setSelected={setSelectedCat}
							selected={selectedCat}
							data={InitializeCategories()}
							label={'Category'}
						/>
					</div>
					<div className="w-1/2">
						<CustomSelect
							setSelected={setSelectedArea}
							selected={selectedArea}
							data={InitializeAreas()}
							label={'Area'}
						/>
					</div>
					<div className="flex w-full justify-end items-end">
						<div className="relative w-1/2">
							<label
								htmlFor="Search"
								className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
							>
								Search
							</label>
							<input
								type="text"
								name="SearchRisk"
								id="SearchRisk"
								className="px-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder=""
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
					</div>
				</div>
			)}
			{displayedRisks?.length !== 0 ? (
				<div>
					<div className={css.container}>
						{RiskListCard(displayedRisks as Risk[])}
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center p-[20px]">
					<Image
						width={400}
						height={300}
						src="/images/no-data.svg"
						alt="Picture of the author"
					/>
					<h1 className="text-2xl antialiased text-zinc-500 font-bold">
						No Data Found
					</h1>
				</div>
			)}
			<div className="mb-[50px]">
				<RiskPagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default RiskList;
