import ProjectActivity from "./ProjectActivity";
import ProjectDuration from "./ProjectDuration";
import ProjectWeek from "./ProjectWeek";

const Timeline = () => {
  const css = {
    container: "pb-60 pt-80",
  };
  return (
    <div className={css.container}>
      <ProjectWeek />
      <ProjectDuration />
      <ProjectActivity />
    </div>
  );
};

export default Timeline;
