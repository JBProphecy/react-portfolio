////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext } from "react";

import { AppContext, AppContextType } from "@/context/AppContext";

import { ProjectData, ProjectKey } from "@/data/PROJECT_MAP";

import { toProjectData } from "@/utils/maps/fromProjectKey";

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

  // Return Content
  return (
    <div className={styles.component}>
      <div className={styles.card} onClick={() => {
        appContext.setCurrentProjectKey(projectKey);
        appContext.toggleProjectModal();
      }}>
        <div className={styles.content}>
          <img className={styles.image} src={projectData.imageSrc} alt={projectData.imageAlt} loading="lazy" />
          <div className={styles.details}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>{projectData.title}</span>
            </div>
            <p className={styles.summary}>{projectData.summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
