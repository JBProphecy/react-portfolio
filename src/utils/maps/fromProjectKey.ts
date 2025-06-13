////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { PROJECT_MAP, ProjectData, ProjectKeys } from "@/data/PROJECT_MAP";

import { ProjectCardData } from "@/components/revised/ProjectCard";
import { ProjectModalContentProps } from "@/components/revised/ProjectModalContent";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toProjectData = (projectKey: ProjectKeys) => {
  return PROJECT_MAP[projectKey];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toProjectCardData = (projectKey: ProjectKeys): ProjectCardData => {
  const projectData: ProjectData = toProjectData(projectKey);
  return {
    title: projectData.title,
    summary: projectData.summary,
    imageSrc: projectData.imageSrc,
    imageAlt: projectData.imageAlt
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toProjectModalContentProps = (projectKey: ProjectKeys): ProjectModalContentProps => {
  const projectData: ProjectData = toProjectData(projectKey);
  return {
    title: projectData.title,
    videoSrc: projectData.videoSrc,
    description: projectData.description,
    repositoryLinkText: projectData.repositoryLinkText,
    repositoryLinkHref: projectData.repositoryLinkHref,
    iconLabelKeys: projectData.iconLabelKeys
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
