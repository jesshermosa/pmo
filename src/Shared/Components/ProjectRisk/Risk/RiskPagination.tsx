import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

type TRiskPagination = {
	currentPage: number;
	totalPages: number;
	handlePageChange: (value: number) => void;
};

const RiskPagination = (props: TRiskPagination) => {
	const { currentPage, totalPages, handlePageChange } = props;

	return (
		<nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
			<div className="-mt-px flex w-0 flex-1">
				<button
					className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium ${
						currentPage === 1
							? 'text-gray-400 cursor-not-allowed'
							: 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
					}`}
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<ArrowLongLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
					Previous
				</button>
			</div>
			<div className="hidden md:-mt-px md:flex">
				{/* Render the page numbers */}
				{Array.from({ length: totalPages }).map((_, index) => (
					<a
						key={index}
						className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${
							currentPage === index + 1
								? 'border-indigo-500 text-indigo-600'
								: 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
						}`}
						onClick={() => handlePageChange(index + 1)}
					>
						{index + 1}
					</a>
				))}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				<button
					className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium ${
						currentPage === totalPages
							? 'text-gray-400 cursor-not-allowed'
							: 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
					}`}
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
					<ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
				</button>
			</div>
		</nav>
	);
};

export default RiskPagination;
