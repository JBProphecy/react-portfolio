////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { LinkButton } from "@/components/LinkButton";
import styles from "./index.module.scss";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link BusinessLinksProps}
 * @returns JSX
 */
export function BusinessLinks(): JSX.Element {

  // Return Content
  return (
    <div className={styles.component}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Business Links</span>
      </div>
      <div className={styles.contentContainer}>
        <LinkButton href="mailto:jackbpiatt@gmail.com"
          linkText="Email Me" fontSize={1.5}
        />
        <LinkButton href="career-resume.pdf" download="Piatt_Jack_Resume.pdf"
          linkText="Download Resume" fontSize={1.5}
        />
        <LinkButton href="career-resume.pdf" target="_blank"
          linkText="Open Resume" fontSize={1.5}
        />
        <LinkButton href="https://github.com/JBProphecy" target="_blank"
          linkText="Visit GitHub" fontSize={1.5}
        />
        <LinkButton href="https://www.linkedin.com/in/jackpiatt" target="_blank"
          linkText="Visit LinkedIn" fontSize={1.5}
        />
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
