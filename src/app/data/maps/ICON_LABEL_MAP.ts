////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IconLabelKey } from "@/app/data//enums/IconLabelKey";
import { IconLabelData } from "@/app/data//types/IconLabelData";

import { LOGO_SVG_MAP } from "@/app/data/maps/LOGO_SVG_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ICON_LABEL_MAP: Record<IconLabelKey, IconLabelData> = {
  [IconLabelKey.CSS]: { iconSrc: LOGO_SVG_MAP.css, text: "CSS", iconAlt: "CSS icon" },
  [IconLabelKey.ExpressJS]: { iconSrc: LOGO_SVG_MAP.expressjs, text: "Express.js", iconAlt: "Express.js icon" },
  [IconLabelKey.Git]: { iconSrc: LOGO_SVG_MAP.git, text: "Git", iconAlt: "Git icon" },
  [IconLabelKey.GitHub]: { iconSrc: LOGO_SVG_MAP.github, text: "GitHub", iconAlt: "GitHub icon" },
  [IconLabelKey.HTML]: { iconSrc: LOGO_SVG_MAP.html, text: "HTML", iconAlt: "HTML icon" },
  [IconLabelKey.Java]: { iconSrc: LOGO_SVG_MAP.java, text: "Java", iconAlt: "Java icon" },
  [IconLabelKey.JavaScript]: { iconSrc: LOGO_SVG_MAP.javascript, text: "JavaScript", iconAlt: "JavaScript icon" },
  [IconLabelKey.Maven]: { iconSrc: LOGO_SVG_MAP.maven, text: "Maven", iconAlt: "Maven Icon" },
  [IconLabelKey.MySQL]: { iconSrc: LOGO_SVG_MAP.mysql, text: "MySQL", iconAlt: "MySQL icon" },
  [IconLabelKey.NodeJS]: { iconSrc: LOGO_SVG_MAP.nodejs, text: "Node.js", iconAlt: "Node.js icon" },
  [IconLabelKey.PostgresSQL]: { iconSrc: LOGO_SVG_MAP.postgressql, text: "PostgresSQL", iconAlt: "PostgresSQL icon" },
  [IconLabelKey.Prisma]: { iconSrc: LOGO_SVG_MAP.prisma, text: "Prisma", iconAlt: "Prisma icon" },
  [IconLabelKey.Python]: { iconSrc: LOGO_SVG_MAP.python, text: "Python", iconAlt: "Python icon" },
  [IconLabelKey.ReactJS]: { iconSrc: LOGO_SVG_MAP.reactjs, text: "React", iconAlt: "React icon" },
  [IconLabelKey.SCSS]: { iconSrc: LOGO_SVG_MAP.scss, text: "SCSS", iconAlt: "SCSS icon" },
  [IconLabelKey.Spring]: { iconSrc: LOGO_SVG_MAP.spring, text: "Spring", iconAlt: "Spring icon" },
  [IconLabelKey.SQL]: { iconSrc: LOGO_SVG_MAP.sql, text: "SQL", iconAlt: "SQL icon" },
  [IconLabelKey.SQLite]: { iconSrc: LOGO_SVG_MAP.sqlite, text: "SQLite", iconAlt: "SQLite icon" },
  [IconLabelKey.TypeScript]: { iconSrc: LOGO_SVG_MAP.typescript, text: "TypeScript", iconAlt: "TypeScript icon" },
  [IconLabelKey.Vite]: { iconSrc: LOGO_SVG_MAP.vite, text: "Vite", iconAlt: "Vite icon" },
  [IconLabelKey.VSCode]: { iconSrc: LOGO_SVG_MAP.vscode, text: "VS Code", iconAlt: "VS Code icon" },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
