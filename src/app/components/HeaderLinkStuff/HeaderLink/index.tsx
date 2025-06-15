////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { joinClasses } from "@/utils/joinClasses";
import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HeaderLinkProps = {
  linkText: string;
  isActive: boolean;
  handleClick: () => void;
}

/**
 * @param props - Component Props
 * @see {@link HeaderLinkProps}
 * @returns JSX
 */
export function HeaderLink({
  linkText,
  isActive,
  handleClick
}: HeaderLinkProps): JSX.Element {

  // Return Content
  return (
    <a
      className={joinClasses(styles.link, isActive ? styles.active : styles.normal )}
      children={linkText}
      onClick={handleClick}
    />
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
