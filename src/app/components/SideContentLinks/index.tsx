////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import React, { useEffect, useState } from "react";

import { joinClasses } from "@/utils/joinClasses";

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

  // Visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => { requestAnimationFrame(() => { setIsVisible(true); }) }, []);

  // Return Content
  return (
    <ul className={joinClasses(styles.links, isVisible ? styles.visible : styles.hidden)}>
      {sideContentLinkDataArray.map(({ label, handleClick }, index) => (
        <li key={index} className={styles.link} onClick={handleClick}>
          <span className={styles.label}>{label}</span>
        </li>
      ))}
    </ul>
  );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
