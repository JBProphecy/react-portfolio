////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { joinClasses } from "@/utils/joinClasses";
import styles from "./index.module.scss";
import { HTMLAttributes } from "react";
import { CustomProperties } from "@/types/css/CustomProperties";
import { ThreeColorSet } from "@/types/ThreeColorSet";
import { toStringREM } from "@/utils/strings/toStringREM";
import { ClickableHook, useClickable } from "@/hooks/useClickable";
import { KeyableHook, useKeyable } from "@/hooks/useKeyable";
import { HoverHook, useHover } from "@/hooks/useHover";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type FancyButtonProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  fontSize: number;
  normalColors?: ThreeColorSet;
  activeColors?: ThreeColorSet;
  linkedKeys?: string[]
  pressedAction?: () => void
  heldAction?: () => void
  isInteractive: boolean
}

/**
 * @param props - Component Props
 * @see {@link FancyButtonProps}
 * @returns JSX
 */
export function FancyButton({
  text, fontSize,
  normalColors, activeColors,
  linkedKeys = [], pressedAction, heldAction, isInteractive,
  ...attributes
}: FancyButtonProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {}
  style["--fontSize"] = toStringREM(fontSize);
  if (normalColors) {
    if (normalColors.color1) style["--normalColor1"] = normalColors.color1;
    if (normalColors.color2) style["--normalColor2"] = normalColors.color2;
    if (normalColors.color3) style["--normalColor3"] = normalColors.color3;
  }
  if (activeColors) {
    if (activeColors.color1) style["--activeColor1"] = activeColors.color1;
    if (activeColors.color2) style["--activeColor2"] = activeColors.color2;
    if (activeColors.color3) style["--activeColor3"] = activeColors.color3;
  }

  // Other Props
  const {
    onMouseEnter, onMouseLeave,
    onMouseDown, onMouseUp,
    onKeyDown, onKeyUp,
    onClick, ...rest
  } = attributes

  // Constants
  const shared = {
    transitionDuration: 50, holdDuration: 150,
    pressedAction: isInteractive ? pressedAction : undefined,
    heldAction: isInteractive ? heldAction : undefined
  }

  // Hooks
  const clickable: ClickableHook = useClickable({...shared })
  const keyable: KeyableHook = useKeyable({ linkedKeys, ...shared })
  const hover: HoverHook = useHover()

  // Return Content
  return (
    <div className={joinClasses(
      styles.component,
      isInteractive && hover.isHovered ? styles.hovered : "",
      isInteractive && (keyable.isActive || clickable.isActive) ? styles.pressed : ""
    )} style={style} {...rest}

      onClick={(event) => { event.preventDefault(); onClick?.(event); }}
      onMouseEnter={(event) => { hover.handleMouseEnter(); clickable.handleMouseEnter(); onMouseEnter?.(event); }}
      onMouseLeave={(event) => { hover.handleMouseLeave(); clickable.handleMouseLeave(); onMouseLeave?.(event); }}

      onMouseDown={(event) => { clickable.handleMouseDown(event); onMouseDown?.(event); }}
      onMouseUp={(event) => { clickable.handleMouseUp(event); onMouseUp?.(event); }}

      onKeyDown={(event) => { keyable.handleKeyDown(event); onKeyDown?.(event); }}
      onKeyUp={(event) => { keyable.handleKeyUp(event); onKeyUp?.(event); }}
    >
      <div className={joinClasses(styles.layer, styles.border)} />
      <div className={joinClasses(styles.layer, styles.background)} />
      <div className={joinClasses(styles.layer, styles.content)}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
