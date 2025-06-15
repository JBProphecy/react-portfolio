////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useContext } from "react";

import { ProjectModal } from "@/app/components/ProjectModalStuff/ProjectModal";

import { AppContext, AppContextType } from "@/context/AppContext";

import { type CustomProperties } from "@/types/css/CustomProperties";
import { type TransitionDuration } from "@/types/css/TransitionDuration";
import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";

import { joinClasses } from "@/utils/joinClasses";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ProjectModalOverlayComponentProps = {
  transitionDuration: TransitionDuration;
  transitionFunction: TransitionTimingFunction;
}

/**
 * @param props - Component Props
 * @see {@link ProjectModalOverlayComponentProps}
 * @returns JSX
 */
export function ProjectModalOverlayComponent({
  transitionDuration,
  transitionFunction,
}: ProjectModalOverlayComponentProps): JSX.Element {

  const appContext: AppContextType | undefined = useContext(AppContext);
  if (typeof appContext === "undefined") { throw new Error("Missing App Context Provider"); }

  const style: CustomProperties = {
    "--transitionDuration": transitionDuration,
    "--transitionFunction": transitionFunction
  }

  return (
    <div className={joinClasses(styles.component, appContext.isProjectModalOpen ? styles.visible : styles.hidden)} style={style}>
      <div className={joinClasses(styles.layer, styles.background)}></div>
      <div className={joinClasses(styles.layer, styles.content)}>
        <div className={styles.wrapper}>
          <ProjectModal />
        </div>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
