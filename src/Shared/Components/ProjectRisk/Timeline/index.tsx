import ProjectActivity from "./ProjectActivity";
import ProjectDuration from "./ProjectDuration";

const Timeline = () => {
  const css = {
    container: "mb-36",
  };
  return (
    <div className={css.container}>
      <ProjectDuration />
      <ProjectActivity />
    </div>
  );
};

export default Timeline;
