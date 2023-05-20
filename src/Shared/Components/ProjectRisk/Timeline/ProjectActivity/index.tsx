import Circle from "@/Shared/Components/Shapes/Circle";
import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import Phase from "../Phase";

const Detail = ({ label, size }: { label: string; size: "sm" | "md" }) => {
  const css = {
    container: "flex justify-center text-center",
  };

  if (size === "md") css.container = css.container + " w-16";
  else css.container = css.container + " w-12";

  return (
    <div className="flex justify-center text-center w-16">
      <span>{label}</span>
    </div>
  );
};

const ProjectActivity = () => {
  const css = {
    container: "flex h-[100%] justify-center",
    circleContainer: "flex w-[100%] justify-evenly mt-[-45px] absolute",
    rectangleContainer: "flex w-[100%] justify-between mt-[-45px] absolute",
  };

  return (
    <Rectangle size="full-md" bg="blue" marginTop={true}>
      <div className={css.container}>
        <Phase size="md">
          <div className={css.circleContainer}>
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.circleContainer}>
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="xlg">
          <div className={css.rectangleContainer}>
            <Rectangle bg="yellow" size="md" />
            <Rectangle bg="yellow" size="md" />
            <Rectangle bg="yellow" size="md" />
            <Rectangle bg="yellow" size="md" />
          </div>
          <div className="flex w-[100%] justify-between">
            <Detail label="md" size="md" />
            <Detail label="md" size="md" />
            <Detail label="md" size="md" />
            <Detail label="md" size="md" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.rectangleContainer}>
            <Rectangle size="sm" bg="yellow" />
            <Rectangle size="sm" bg="yellow" />
          </div>

          <div className="flex w-[100%] justify-between">
            <Detail size="sm" label="UAT/Acceptance" />
            <Detail size="sm" label="Relase" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="lg" />
      </div>
    </Rectangle>
  );
};

export default ProjectActivity;
