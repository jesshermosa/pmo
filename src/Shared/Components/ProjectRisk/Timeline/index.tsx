import ProjectActivity from './ProjectActivity';
import ProjectDuration from './ProjectDuration';
import ProjectWeek from './ProjectWeek';

const Timeline = () => {
	const css = {
		container: 'pb-60',
	};
	return (
		<div className={css.container} style={{ paddingTop: '10rem' }}>
			<ProjectWeek />
			<ProjectDuration />
			<ProjectActivity />
		</div>
	);
};

export default Timeline;
