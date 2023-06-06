import { ProjectPhase } from "@/common/types";
import { getProjectPhase } from "@/common/server/projectPhase";
import { GetServerSideProps } from "next";
import "@fontsource/poppins/400.css";
import ProjectRisk from "@/Shared/Components/ProjectRisk";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "@/common/server/sessionConfig";

interface PageProps {
  projectPhase: ProjectPhase;
  isAuthenticated: boolean;
}

export const getServerSideProps: GetServerSideProps<{
  projectPhase: ProjectPhase;
}> = withIronSessionSsr(async ({ req }) => {
  return {
    props: {
      projectPhase: await getProjectPhase({ cookie: req.headers.cookie }),
      isAuthenticated: req.session?.isAuthenticated
        ? req.session.isAuthenticated
        : false,
    },
  };
}, sessionOptions);

export default function Page({ projectPhase, isAuthenticated }: PageProps) {
  return (
    <ProjectRisk
      projectPhase={projectPhase}
      isAuthenticated={isAuthenticated}
    />
  );
}
