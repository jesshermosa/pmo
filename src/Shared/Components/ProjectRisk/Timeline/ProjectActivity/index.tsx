import Circle from "@/Shared/Components/Shapes/Circle";
import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import Phase from "../Phase";

const Detail = ({
  label,
  size,
  grid,
}: {
  label: string;
  size: "sm" | "md";
  grid?: "single" | "multiple";
}) => {
  const css = {
    container: "flex justify-center text-center break-words items-center",
    label: "text-[10px] font-medium leading-3",
  };

  if (grid === "single") css.container += " w-[100%]";
  else {
    if (size === "md") css.container += " w-16";
    else css.container += " w-12";
  }

  return (
    <div className={css.container}>
      <span className={css.label}>{label.toUpperCase()}</span>
    </div>
  );
};

const ProjectActivity = () => {
  const css = {
    container: "flex h-[100%] justify-center",
    circleContainer: "flex w-[100%] justify-evenly mt-[-45px] absolute",
    rectangleContainer: "flex w-[100%] justify-between mt-[-45px] absolute",
    rectangleDetailContainer: "flex w-[100%] justify-between",
    circleDetailContainer: "flex w-[100%] justify-center",
  };

  return (
    <Rectangle size="full-md" bg="blue" marginTop={true}>
      <div className={css.container}>
        <Phase size="md">
          <div className={css.circleContainer}>
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
          </div>
          <div className={css.circleDetailContainer}>
            <Detail size="sm" label="Workshop" grid="single" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.circleContainer}>
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
            <Circle size="xsm" bg="yellow" />
          </div>
          <div className={css.circleDetailContainer}>
            <Detail size="sm" label="Workshops" grid="single" />
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
          <div className={css.rectangleDetailContainer}>
            <Detail label="sprint" size="md" />
            <Detail label="sprint" size="md" />
            <Detail label="sprint" size="md" />
            <Detail label="SIT / Stabilization" size="md" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="md">
          <div className={css.rectangleContainer}>
            <Rectangle size="sm" bg="yellow" />
            <Rectangle size="sm" bg="yellow" />
          </div>

          <div className={css.rectangleDetailContainer}>
            <Detail size="sm" label="UAT / Acceptance" />
            <Detail size="sm" label="Release" />
          </div>
        </Phase>
        <Phase size="sm" />
        <Phase size="lg" />
      </div>
    </Rectangle>
  );
};

export default ProjectActivity;
