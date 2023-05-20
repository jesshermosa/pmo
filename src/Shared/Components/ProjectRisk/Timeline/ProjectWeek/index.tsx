import Arrow from "@/Shared/Components/Shapes/Arrow";
import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import Phase from "../Phase";

const ProjectWeek = () => {
  const css = {
    container: "flex h-full justify-center",
    content: "w-full",
    labelContainer: "flex justify-center",
    text: "text-[10px] font-medium leading-3",
  };

  return (
    <Rectangle size="full-lg" bg="blue" marginTop={true} zIndex="top">
      <div className={css.container}>
        <Phase size="md">
          <div className={css.content}>
            <div className={css.labelContainer}>
              <span className={css.text}>X WEEKS</span>
            </div>
            <Arrow />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.content}>
            <div className={css.labelContainer}>
              <span className={css.text}>X WEEKS</span>
            </div>
            <Arrow />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="xlg">
          <div className={css.content}>
            <div className={css.labelContainer}>
              <span className={css.text}>X WEEKS</span>
            </div>
            <Arrow />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.content}>
            <div className={css.labelContainer}>
              <span className={css.text}>X WEEKS</span>
            </div>
            <Arrow />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="lg" />
      </div>
    </Rectangle>
  );
};

export default ProjectWeek;
