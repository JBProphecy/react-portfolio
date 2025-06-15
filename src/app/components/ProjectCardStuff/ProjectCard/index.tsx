////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useContext } from "react";

import { AppContext, AppContextType } from "@/context/AppContext";

import { ProjectData, ProjectKey } from "@/data/PROJECT_MAP";

import { toProjectData } from "@/utils/maps/fromProjectKey";

import { ContentCard } from "@/components/ContentCardStuff/ContentCard";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectCardProps = {
  projectKey: ProjectKey;
}

/**
 * @param props - Component Props
 * @see {@link ProjectCardProps}
 * @returns JSX
 */
export function ProjectCard({ projectKey }: ProjectCardProps): JSX.Element {

  // App Context
  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  // Get Data
  const projectData: ProjectData = toProjectData(projectKey);

  // Handle Click
  const handleClick = () => {
    appContext.setCurrentProjectKey(projectKey);
    appContext.toggleProjectModal();
  }

  // Return Content
  return <ContentCard
    handleClick={handleClick}
    imgAlt={projectData.imageAlt}
    imgSrc={projectData.imageSrc}
    title={projectData.title}
    description={projectData.summary}
  />
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
