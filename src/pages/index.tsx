import { ProjectPhase } from "@/common/types";
import { getProjectPhase } from "@/common/server/projectPhase";
import { GetServerSideProps } from "next";
import "@fontsource/poppins/400.css";
import ProjectRisk from "@/Shared/Components/ProjectRisk";

interface PageProps {
  projectPhase: ProjectPhase;
}

export const getServerSideProps: GetServerSideProps<{
  projectPhase: ProjectPhase;
}> = async () => {
  return {
    props: { projectPhase: await getProjectPhase() },
  };
};

export default function Page({ projectPhase }: PageProps) {
  return <ProjectRisk projectPhase={projectPhase} />;
}
