////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { joinClasses } from "@/common/utils/joinClasses";
import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HeaderLinkData = {
  linkText: string;
  isActive: boolean;
  handleClick: () => void;
}

export type HeaderLinksProps = {
  headerLinkDataArray: HeaderLinkData[];
}

/**
 * @param props - Component Props
 * @see {@link HeaderLinksProps}
 * @returns JSX
 */
export function HeaderLinks({
  headerLinkDataArray
}: HeaderLinksProps): JSX.Element {

  // Return Content
  return (
    <ul className={styles.links}>
      {headerLinkDataArray.map(({ linkText, isActive, handleClick }, index) => (
        <li key={index}
          className={joinClasses(styles.link, isActive ? styles.active : styles.normal )}
          onClick={handleClick}
        >
          <span className={styles.label}>{linkText}</span>
        </li>
      ))}
    </ul>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
