import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useRiskContext } from '../ProjectRisk/Risk/RiskContextProvider';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

type CustomSelectProps = {
	data: any;
	label?: string;
	onChange?: (value: string) => void;
	setSelected: React.Dispatch<
		React.SetStateAction<{ name: string; value: string }>
	>;
	selected: { name: string; value: string };
};

const css = {
	btn: 'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6',
	options:
		'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
	option: 'relative cursor-default select-none py-2 pl-8 pr-4',
	activeOption: 'bg-indigo-600 text-white',
	notActiveOption: 'text-gray-900',
	selectedLabel: 'font-semibold',
	notSelectedLabel: 'font-normal',
	selectedLabelDefault: 'block truncate',
	selectedActive: 'text-white',
	selectedNotActive: 'text-indigo-600',
	selectedActiveDefault: 'absolute inset-y-0 left-0 flex items-center pl-1.5',
	label: 'block text-sm font-medium leading-6 text-gray-900',
	subContainer: 'relative mt-2',
	labelWrapper: 'block truncate',
	iconWrapper:
		'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
	chevronUpDownIcon: 'h-5 w-5 text-gray-400',
	checkIcon: 'h-5 w-5',
};

const CustomSelect = (props: CustomSelectProps) => {
	const { data, label, setSelected, selected } = props;
	const { setShowmoreIsOpen } = useRiskContext();

	return (
		<div className="w-full">
			<Listbox
				disabled={!data}
				value={selected}
				onChange={(value) => {
					setSelected(value);
					setShowmoreIsOpen(false);
				}}
			>
				{({ open }) => (
					<>
						{label && (
							<Listbox.Label className={css.label}>{label}</Listbox.Label>
						)}
						<div className={css.subContainer}>
							<Listbox.Button className={css.btn}>
								<span className={css.labelWrapper}>{selected.name}</span>
								<span className={css.iconWrapper}>
									<ChevronUpDownIcon
										className={css.chevronUpDownIcon}
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>

							<Transition
								show={open}
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className={css.options}>
									{data?.map((value: any, index: number) => (
										<Listbox.Option
											key={index}
											className={({ active }) =>
												classNames(
													active ? css.activeOption : css.notActiveOption,
													css.option
												)
											}
											value={value}
										>
											{({ selected, active }) => (
												<>
													<span
														className={classNames(
															selected
																? css.selectedLabel
																: css.notSelectedLabel,
															css.selectedLabelDefault
														)}
													>
														{value.name}
													</span>

													{selected ? (
														<span
															className={classNames(
																active
																	? css.selectedActive
																	: css.selectedNotActive,
																css.selectedActiveDefault
															)}
														>
															<CheckIcon
																className={css.checkIcon}
																aria-hidden="true"
															/>
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</>
				)}
			</Listbox>
		</div>
	);
};

export default CustomSelect;
