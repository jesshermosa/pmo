import Circle from "@/Shared/Components/Shapes/Circle";
import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import Phase from "../Phase";

interface Props {}

const ProjectDuration = ({}: Props) => {
  const css = {
    container: "flex h-[100%] justify-center",
  };

  return (
    <Rectangle size="full-lg" bg="blue" marginTop={true}>
      <div className={css.container}>
        <Phase size="md">
          <Circle size="md" />
        </Phase>
        <Phase size="sm">
          <Circle size="md" />
        </Phase>
        <Phase size="md" bg="light-blue">
          <Circle size="md" />
        </Phase>
        <Phase size="sm">
          <Circle size="md" />
        </Phase>
        <Phase size="xlg" bg="blue">
          <Circle size="md" />
        </Phase>
        <Phase size="sm">
          <Circle size="md" />
        </Phase>
        <Phase size="md" bg="dark-blue">
          <Circle size="md" />
        </Phase>
        <Phase size="sm">
          <Circle size="md" />
        </Phase>
        <Phase size="lg" bg="dark-blue" pointed={true}>
          <Circle size="md" />
        </Phase>
      </div>
    </Rectangle>
  );
};

export default ProjectDuration;
