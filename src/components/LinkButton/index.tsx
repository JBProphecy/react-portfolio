////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { AnchorHTMLAttributes } from "react";
import { CustomProperties } from "@/types/css/CustomProperties";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  linkText: string;
  fontSize: string;
  fontColor: string;
}

/**
 * @param props
 * @see {@link LinkButtonProps}
 * @returns JSX
 */
export function LinkButton({ linkText, fontSize, fontColor, ...attributes }: LinkButtonProps): JSX.Element {

  // Component Style
  const style: CustomProperties = {
    "--text-font-size": fontSize,
    "--text-font-color": fontColor
  }

  // Component Content
  return (
    <a className={styles.anchor} style={style} {...attributes}>
      <span className={styles.text}>{linkText}</span>
    </a>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
