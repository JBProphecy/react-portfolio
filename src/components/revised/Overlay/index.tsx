////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";

import { type CustomProperties } from "@/types/css/CustomProperties";
import { type TransitionDuration } from "@/types/css/TransitionDuration";
import { type TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type OverlayProps = {
  children: React.ReactNode;
  isActive: boolean;
  transitionDuration: TransitionDuration;
  transitionFunction: TransitionTimingFunction;
}

/**
 * @param props - Component Props
 * @see {@link OverlayProps}
 * @returns JSX
 */
export function Overlay({ children, isActive, transitionDuration, transitionFunction }: OverlayProps): JSX.Element {

  const style: CustomProperties = {
    "--transitionDuration": transitionDuration,
    "--transitionFunction": transitionFunction
  }

  return (
    <div className={joinClasses(styles.overlay, isActive ? styles.front : styles.back)} style={style}>
      {children}
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
