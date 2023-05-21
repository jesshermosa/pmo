import Circle from "@/Shared/Components/Shapes/Circle";
import Rectangle from "@/Shared/Components/Shapes/Rectangle";
import { useRiskContext } from "../../Risk/RiskContextProvider";
import Phase from "../Phase";
import MajorDetail from "./MajorDetail";
import MinorDetail from "./MinorDetail";

const ProjectDuration = () => {
  const css = {
    container: "flex h-[100%] justify-center",
    detailContainer: "relative",
    majorHeader: "text-sm font-semibold leading-5",
    majorDetail: "text-[13px] font-normal leading-5",
    minorHeader: "text-xs font-bold leading-3",
    minorDetail: "text-xs font-normal leading-3",
  };

  const { setSelectedCategoryIndex } = useRiskContext();

  return (
    <Rectangle size="full-lg" bg="blue" marginTop={true} zIndex="mid">
      <div className={css.container}>
        <Phase size="md">
          <div className={css.detailContainer}>
            <MajorDetail onClick={() => setSelectedCategoryIndex(0)}>
              <span className={css.majorHeader}>DISCOVERY</span>
              <span className={css.majorDetail}>What and why?</span>
              <span className={css.majorDetail}>Strategy</span>
              <span className={css.majorDetail}>People & organization</span>
              <span className={css.majorDetail}>Existing systems</span>
              <span className={css.majorDetail}>Business case</span>
              <span className={css.majorDetail}>Customer journeys</span>
            </MajorDetail>
            <Circle size="md" onClick={() => setSelectedCategoryIndex(0)} />
          </div>
        </Phase>

        <Phase size="sm">
          <div className={css.detailContainer}>
            <MinorDetail>
              <span className={css.minorHeader}>DP1</span>
              <span className={css.minorDetail}>Start detailing</span>
            </MinorDetail>
            <Circle size="md" />
          </div>
        </Phase>

        <Phase size="md" bg="light-blue">
          <div className={css.detailContainer}>
            <MajorDetail onClick={() => setSelectedCategoryIndex(1)}>
              <span className={css.majorHeader}>DETAILING</span>
              <span className={css.majorDetail}>What and how?</span>
              <span className={css.majorDetail}>Change processes</span>
              <span className={css.majorDetail}>UX & design</span>
              <span className={css.majorDetail}>Integrations</span>
              <span className={css.majorDetail}>Functions & integrations</span>
              <span className={css.majorDetail}>New systems?</span>
            </MajorDetail>
            <Circle size="md" onClick={() => setSelectedCategoryIndex(1)} />
          </div>
        </Phase>

        <Phase size="sm">
          <div className={css.detailContainer}>
            <MinorDetail>
              <span className={css.minorHeader}>DP2</span>
              <span className={css.minorDetail}>Start implementation</span>
            </MinorDetail>
            <Circle size="md" />
          </div>
        </Phase>

        <Phase size="xlg" bg="blue">
          <div className={css.detailContainer}>
            <MajorDetail onClick={() => setSelectedCategoryIndex(2)}>
              <span className={css.majorHeader}>IMPLEMENTATION</span>
              <span className={css.majorDetail}>Development</span>
              <span className={css.majorDetail}>QA</span>
              <span className={css.majorDetail}>Acceptance</span>
              <span className={css.majorDetail}>Training</span>
              <span className={css.majorDetail}>Coaching</span>
            </MajorDetail>
            <Circle size="md" onClick={() => setSelectedCategoryIndex(2)} />
          </div>
        </Phase>

        <Phase size="sm">
          <div className={css.detailContainer}>
            <MinorDetail>
              <span className={css.minorHeader}>DP3</span>
              <span className={css.minorDetail}>
                Start acceptance / release
              </span>
            </MinorDetail>
            <Circle size="md" />
          </div>
        </Phase>

        <Phase size="md" bg="dark-blue">
          <div className={css.detailContainer}>
            <MajorDetail onClick={() => setSelectedCategoryIndex(3)}>
              <span className={css.majorHeader}>ACCEPTANCE & RELEASE</span>
            </MajorDetail>
            <Circle size="md" onClick={() => setSelectedCategoryIndex(3)} />
          </div>
        </Phase>

        <Phase size="sm">
          <div className={css.detailContainer}>
            <MinorDetail>
              <span className={css.minorHeader}>DP4</span>
              <span className={css.minorDetail}>Go live</span>
            </MinorDetail>
            <Circle size="md" />
          </div>
        </Phase>

        <Phase size="lg" bg="dark-blue" pointed={true}>
          <div className={css.detailContainer}>
            <MajorDetail onClick={() => setSelectedCategoryIndex(4)}>
              <span className={css.majorHeader}>OPERATIONS</span>
              <span className={css.majorDetail}>Maintenance</span>
              <span className={css.majorDetail}>New features</span>
              <span className={css.majorDetail}>Optimization</span>
              <span className={css.majorDetail}>Growth</span>
              <span className={css.majorDetail}>Coaching</span>
            </MajorDetail>
            <Circle size="md" onClick={() => setSelectedCategoryIndex(4)} />
          </div>
        </Phase>
      </div>
    </Rectangle>
  );
};

export default ProjectDuration;
