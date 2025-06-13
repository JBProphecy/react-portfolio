////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { CustomProperties } from "@/types/css/CustomProperties";
import styles from "./index.module.scss";
import { AnchorHTMLAttributes } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  linkText: string
  fontSize: number;
}

/**
 * @param props - Component Props
 * @see {@link LinkButtonProps}
 * @returns JSX
 */
export function LinkButton({ linkText, fontSize, ...attributes }: LinkButtonProps): JSX.Element {

  // Custom Properties
  const style: CustomProperties = {
    "--fontSize": `${fontSize}rem`
  }

  // Return Content
  return (
    <a className={styles.anchor} style={style} {...attributes}>
      <span className={styles.text}>{linkText}</span>
    </a>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
