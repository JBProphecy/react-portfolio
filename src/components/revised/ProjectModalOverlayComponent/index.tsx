////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";
import { ProjectKeys } from "@/data/PROJECT_MAP";
import { ProjectModal } from "@/components/revised/ProjectModal";
import { type CustomProperties } from "@/types/css/CustomProperties";
import { type TransitionDuration } from "@/types/css/TransitionDuration";
import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectModalOverlayComponentProps = {
  isOverlayActive: boolean;
  transitionDuration: TransitionDuration;
  transitionFunction: TransitionTimingFunction;
  toggleProjectModalOverlay: () => void;
  projectKey: ProjectKeys | null;
}

/**
 * @param props - Component Props
 * @see {@link ProjectModalOverlayComponentProps}
 * @returns JSX
 */
export function ProjectModalOverlayComponent({
  isOverlayActive,
  transitionDuration,
  transitionFunction,
  toggleProjectModalOverlay,
  projectKey
}: ProjectModalOverlayComponentProps): JSX.Element {

  const style: CustomProperties = {
    "--transitionDuration": transitionDuration,
    "--transitionFunction": transitionFunction
  }

  return (
    <div className={joinClasses(styles.component, isOverlayActive ? styles.visible : styles.hidden)} style={style}>
      <div className={joinClasses(styles.layer, styles.background)}></div>
      <div className={joinClasses(styles.layer, styles.content)}>
        <div className={styles.wrapper}>
          <ProjectModal
            toggleProjectModalOverlay={toggleProjectModalOverlay}
            projectKey={projectKey} />
        </div>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
