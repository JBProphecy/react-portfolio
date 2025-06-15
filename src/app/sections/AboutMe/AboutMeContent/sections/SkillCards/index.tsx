////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelTags } from "@/app/components/IconLabelTagStuff/IconLabelTags";
import { IconLabelKeys } from "@/data/ICON_LABEL_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @returns JSX
 */
export const SkillCards = () => {

  const ICON_LABEL_ORDER: IconLabelKeys[] = [
    IconLabelKeys.HTML,
    IconLabelKeys.CSS, IconLabelKeys.SCSS,
    IconLabelKeys.JavaScript, IconLabelKeys.TypeScript,
    IconLabelKeys.Vite, IconLabelKeys.ReactJS, IconLabelKeys.NodeJS, IconLabelKeys.ExpressJS,
    IconLabelKeys.Python,
    IconLabelKeys.Java, IconLabelKeys.Maven, IconLabelKeys.Spring,
    IconLabelKeys.SQL, IconLabelKeys.PostgresSQL, IconLabelKeys.MySQL, IconLabelKeys.SQLite,
    IconLabelKeys.Prisma,
    IconLabelKeys.Git, IconLabelKeys.GitHub
  ]

  return (
    <div className={styles.component}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Skill Cards</span>
      </div>
      <IconLabelTags iconLabelKeys={ICON_LABEL_ORDER} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
