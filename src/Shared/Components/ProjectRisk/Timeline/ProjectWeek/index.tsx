import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import Phase from "../Phase";

const ProjectWeek = () => {
  const css = {
    container: "flex h-[100%] justify-center",
    text: "text-[10px] font-medium leading-3",
  };

  return (
    <Rectangle size="full-lg" bg="blue" marginTop={true}>
      <div className={css.container}>
        <Phase size="md">
          <span className={css.text}>X WEEKS</span>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <span className={css.text}>X WEEKS</span>
        </Phase>
        <Phase size="sm" />
        <Phase size="xlg">
          <span className={css.text}>X WEEKS</span>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <span className={css.text}>X WEEKS</span>
        </Phase>
        <Phase size="sm" />
        <Phase size="lg" />
      </div>
    </Rectangle>
  );
};

export default ProjectWeek;
