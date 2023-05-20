import { ProjectPhase } from "@/common/types";
import RiskContextProvider from "./Risk/RiskContextProvider";
import RiskList from "./Risk/RiskList";
import Timeline from "./Timeline";

interface Props {
  projectPhase: ProjectPhase;
}

const css = {
  main: "container mx-auto px-4 sm:px-6 lg:px-8 bg-white p-[100px]",
  container: "mx-auto max-w-7xl",
};

const ProjectPhase = ({ projectPhase }: Props) => {
  return (
    <RiskContextProvider>
      <main className={css.main}>
        <div className={css.container}>
          <Timeline />
          <RiskList {...projectPhase?.categories[0]} />
        </div>
      </main>
    </RiskContextProvider>
  );
};

export default ProjectPhase;
