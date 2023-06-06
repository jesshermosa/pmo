import { Risk } from '@/common/types';
import RiskCard from './RiskCard';
import { useRiskContext } from './RiskContextProvider';

type TRiskItem = {
	data: Risk;
	column: number;
	row: number;
};

const RiskItem = (props: TRiskItem) => {
	const { data, column, row } = props;
	const { selectedRiskShowMore, showmoreIsOpen } = useRiskContext();

	const activeItemCN =
		selectedRiskShowMore.column === column &&
		selectedRiskShowMore.row === row &&
		showmoreIsOpen
			? 'overflow-hidden border border-gray-200'
			: 'overflow-hidden rounded-xl border border-gray-200';

	const activeItemStyle =
		selectedRiskShowMore.column === column &&
		selectedRiskShowMore.row === row &&
		showmoreIsOpen
			? {
					borderRadius: 5,
					width: '229px',
			  }
			: {
					width: '229px',
			  };

	return (
		<li className={activeItemCN} style={activeItemStyle}>
			<RiskCard column={column} row={row} data={data} />
		</li>
	);
};

export default RiskItem;
