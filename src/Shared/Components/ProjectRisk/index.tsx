/* eslint-disable @next/next/no-img-element */
import { ProjectPhase } from "@/common/types";
import RiskContextProvider from "./Risk/RiskContextProvider";
import RiskList from "./Risk/RiskList";
import Timeline from "./Timeline";
import "./css/risk-style.css";

interface Props {
  projectPhase: ProjectPhase;
}

const css = {
  main: "container mx-auto px-4 sm:px-6 lg:px-8 bg-white p-[100px]",
  container: "mx-auto max-w-7xl",
  headerContainer: "titleWrapper",
  title: "gradient-text",
  subTitle: "title-description",
};

const headerStyle = {
  width: "100%",
};

const ProjectPhase = ({ projectPhase }: Props) => {
  return (
    <RiskContextProvider projectPhase={projectPhase}>
      <main>
        <div style={headerStyle}>
          <div className={css.headerContainer}>
            <span className={css.title}>
              <h3>Avensia riskassessment tool</h3>
            </span>
            <span className={css.subTitle}>
              <h3>
                Please press the various process points to obtain information
                about risks, description and solution
              </h3>
            </span>
          </div>
          <img
            src="/images/pmo-header.png"
            alt="Picture of the author"
            style={{ width: "inherit" }}
          />
        </div>
        <div className={css.container}>
          <Timeline />
          <RiskList />
        </div>
      </main>
    </RiskContextProvider>
  );
};

export default ProjectPhase;
