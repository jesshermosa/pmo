import RiskContextProvider from '@/Shared/Components/Risk/RiskContextProvider';
import RiskList from '@/Shared/Components/Risk/RiskList';
import { ProjectPhase, StaticPathParams } from '@/common/types';
import getExcelData from '@/utils/getExcelData';
import mapData from '@/utils/mapData';
import { GetStaticProps } from 'next';
import '@fontsource/poppins/400.css';

interface PageProps {
	projectPhase: ProjectPhase | null;
}

export const getStaticProps: GetStaticProps<
	PageProps,
	StaticPathParams
> = async () => {
	return { props: { projectPhase: await mapData(await getExcelData()) } };
};

export default function Page({ projectPhase }: PageProps) {
	console.log('projectPhase', projectPhase);

	const data = projectPhase?.categories.length
		? projectPhase?.categories[0]?.risks
		: [];
	return (
		<main
			className="container mx-auto px-4 sm:px-6 lg:px-8"
			style={{ backgroundColor: 'white', padding: '100px' }}
		>
			<RiskContextProvider>
				<div className="mx-auto max-w-7xl">
					<RiskList data={data} />
				</div>
			</RiskContextProvider>
		</main>
	);
}
