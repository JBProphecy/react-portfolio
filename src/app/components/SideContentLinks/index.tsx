////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type SideContentLinkData = {
  label: string;
  handleClick: () => void;
}

/**
 * @see {@link SideContentLinkData}
 */
type SideContentLinksProps = {
  sideContentLinkDataArray: SideContentLinkData[]
}

/**
 * @param props
 * @see {@link SideContentLinksProps}
 * @returns JSX
 */
export const SideContentLinks = React.memo(function SideContentLinks({
  sideContentLinkDataArray
}: SideContentLinksProps): JSX.Element {

  // Return Content
  return (
    <ul className={styles.links}>
      {sideContentLinkDataArray.map(({ label, handleClick }, index) => (
        <li key={index} className={styles.link} onClick={handleClick}>
          <span className={styles.label}>{label}</span>
        </li>
      ))}
    </ul>
  );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
