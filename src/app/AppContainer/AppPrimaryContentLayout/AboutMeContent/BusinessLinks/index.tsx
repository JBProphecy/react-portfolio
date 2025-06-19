////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { AnchorButton } from "@/common/components/AnchorButton";
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
        <AnchorButton href="mailto:jackbpiatt@gmail.com">Email Me</AnchorButton>
        <AnchorButton href="career-resume.pdf" download="Piatt_Jack_Resume.pdf">Download resume</AnchorButton>
        <AnchorButton href="career-resume.pdf" target="_blank">Open resume</AnchorButton>
        <AnchorButton href="https://github.com/JBProphecy" target="_blank">Visit GitHub</AnchorButton>
        <AnchorButton href="https://www.linkedin.com/in/jackpiatt" target="_blank">Visit LinkedIn</AnchorButton>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
