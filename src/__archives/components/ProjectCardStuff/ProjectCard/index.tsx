////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ProjectKey } from "@/data/keys/ProjectKey";
import { ProjectData } from "@/data/types/ProjectData";

import { toProjectData } from "@/data/utils/fromProjectMap";

import { ContentCard } from "@/__archives/components/ContentCardStuff/ContentCard";
import { NavigateFunction, useNavigate } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectCardProps = {
  projectKey: ProjectKey;
}

/**
 * @param props
 * @see {@link ProjectCardProps}
 * @returns JSX
 */
export function ProjectCard({ projectKey }: ProjectCardProps): JSX.Element {

  // Navigate
  const navigate: NavigateFunction = useNavigate();

  // Get Data
  const projectData: ProjectData = toProjectData(projectKey);

  // Handle Click
  const handleClick = () => { navigate(`/projects/${projectKey}`); }

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
