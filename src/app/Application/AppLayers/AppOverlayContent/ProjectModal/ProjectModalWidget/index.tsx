////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";
import { ProjectModalWidgetContent } from "./ProjectModalWidgetContent";

import { ProjectKey } from "@/app/data/enums/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ProjectModalWidgetProps = {
  projectKey: ProjectKey | null
}

/**
 * @param props
 * @see {@link ProjectModalWidgetProps}
 * @returns JSX
 */
export function ProjectModalWidget({
  projectKey
}: ProjectModalWidgetProps): JSX.Element {

  return (
    <div className={styles.projectModalWidget}>
      <ProjectModalWidgetContent projectKey={projectKey} />
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
