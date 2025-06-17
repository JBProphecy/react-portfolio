////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { IconLabelTags } from "@/components/IconLabelTagStuff/IconLabelTags";
import { IconLabelKey } from "@/app/data/enums/IconLabelKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @returns JSX
 */
export const SkillCards = () => {

  const ICON_LABEL_ORDER: IconLabelKey[] = [
    IconLabelKey.HTML,
    IconLabelKey.CSS, IconLabelKey.SCSS,
    IconLabelKey.JavaScript, IconLabelKey.TypeScript,
    IconLabelKey.Vite, IconLabelKey.ReactJS, IconLabelKey.NodeJS, IconLabelKey.ExpressJS,
    IconLabelKey.Python,
    IconLabelKey.Java, IconLabelKey.Maven, IconLabelKey.Spring,
    IconLabelKey.SQL, IconLabelKey.PostgresSQL, IconLabelKey.MySQL, IconLabelKey.SQLite,
    IconLabelKey.Prisma,
    IconLabelKey.Git, IconLabelKey.GitHub
  ]

  return (
    <div className={styles.component}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Skill Cards</span>
      </div>
      <IconLabelTags iconLabelKeyArray={ICON_LABEL_ORDER} />
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
