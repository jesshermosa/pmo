import ProjectActivity from "./ProjectActivity";
import ProjectDuration from "./ProjectDuration";
import ProjectWeek from "./ProjectWeek";

const Timeline = () => {
  const css = {
    container: "mb-36 pt-80",
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
