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
          linkText="Email Me"
          fontColor="var(--secondary-font-color)"
          fontSize="var(--secondary-font-size)"
        />
        <LinkButton href="career-resume.pdf" download="Piatt_Jack_Resume.pdf"
          linkText="Download Resume"
          fontColor="var(--secondary-font-color)"
          fontSize="var(--secondary-font-size)"
        />
        <LinkButton href="career-resume.pdf" target="_blank"
          linkText="Open Resume"
          fontColor="var(--secondary-font-color)"
          fontSize="var(--secondary-font-size)"
        />
        <LinkButton href="https://github.com/JBProphecy" target="_blank"
          linkText="Visit GitHub"
          fontColor="var(--secondary-font-color)"
          fontSize="var(--secondary-font-size)"
        />
        <LinkButton href="https://www.linkedin.com/in/jackpiatt" target="_blank"
          linkText="Visit LinkedIn"
          fontColor="var(--secondary-font-color)"
          fontSize="var(--secondary-font-size)"
        />
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
