import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectList } from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/pages-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: "Projetos",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
  query ProjectsQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  );
}
