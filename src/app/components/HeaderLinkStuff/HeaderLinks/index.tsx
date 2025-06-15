////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { SectionKey } from "@/data/SECTION_MAP";
import { HeaderLink, HeaderLinkProps } from "../HeaderLink";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HeaderLinkKeyAndProps = {
  headerLinkKey: SectionKey
  headerLinkProps: HeaderLinkProps
}

export type HeaderLinksProps = {
  headerLinkKeyAndPropsArray: HeaderLinkKeyAndProps[];
}

/**
 * @param props - Component Props
 * @see {@link HeaderLinksProps}
 * @returns JSX
 */
export function HeaderLinks({
  headerLinkKeyAndPropsArray
}: HeaderLinksProps): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <nav className={styles.links}>
        {headerLinkKeyAndPropsArray.map(({ headerLinkKey, headerLinkProps }) => (
          <HeaderLink key={headerLinkKey}
            linkText={headerLinkProps.linkText}
            isActive={headerLinkProps.isActive}
            handleClick={headerLinkProps.handleClick}
          />
        ))}
      </nav>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
