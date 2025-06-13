////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { LOGO_SVG_MAP } from "./LOGO_SVG_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum IconLabelKeys {
  CSS = "CSS",
  Git = "Git",
  ExpressJS = "ExpressJS",
  GitHub = "GitHub",
  HTML = "HTML",
  Java = "Java",
  JavaScript = "JavaScript",
  Maven = "Maven",
  MySQL = "MySQL",
  NodeJS = "NodeJS",
  PostgresSQL = "PostgresSQL",
  Prisma = "Prisma",
  Python = "Python",
  ReactJS = "ReactJS",
  SCSS = "SCSS",
  Spring = "Spring",
  SQL = "SQL",
  SQLite = "SQLite",
  TypeScript = "TypeScript",
  Vite = "Vite",
  VSCode = "VSCode"
}

export type IconLabelData = {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ICON_LABEL_MAP: Record<IconLabelKeys, IconLabelData> = {
  [IconLabelKeys.CSS]: { iconSrc: LOGO_SVG_MAP.css, text: "CSS", iconAlt: "CSS icon" },
  [IconLabelKeys.ExpressJS]: { iconSrc: LOGO_SVG_MAP.expressjs, text: "Express.js", iconAlt: "Express.js icon" },
  [IconLabelKeys.Git]: { iconSrc: LOGO_SVG_MAP.git, text: "Git", iconAlt: "Git icon" },
  [IconLabelKeys.GitHub]: { iconSrc: LOGO_SVG_MAP.github, text: "GitHub", iconAlt: "GitHub icon" },
  [IconLabelKeys.HTML]: { iconSrc: LOGO_SVG_MAP.html, text: "HTML", iconAlt: "HTML icon" },
  [IconLabelKeys.Java]: { iconSrc: LOGO_SVG_MAP.java, text: "Java", iconAlt: "Java icon" },
  [IconLabelKeys.JavaScript]: { iconSrc: LOGO_SVG_MAP.javascript, text: "JavaScript", iconAlt: "JavaScript icon" },
  [IconLabelKeys.Maven]: { iconSrc: LOGO_SVG_MAP.maven, text: "Maven", iconAlt: "Maven Icon" },
  [IconLabelKeys.MySQL]: { iconSrc: LOGO_SVG_MAP.mysql, text: "MySQL", iconAlt: "MySQL icon" },
  [IconLabelKeys.NodeJS]: { iconSrc: LOGO_SVG_MAP.nodejs, text: "Node.js", iconAlt: "Node.js icon" },
  [IconLabelKeys.PostgresSQL]: { iconSrc: LOGO_SVG_MAP.postgressql, text: "PostgresSQL", iconAlt: "PostgresSQL icon" },
  [IconLabelKeys.Prisma]: { iconSrc: LOGO_SVG_MAP.prisma, text: "Prisma", iconAlt: "Prisma icon" },
  [IconLabelKeys.Python]: { iconSrc: LOGO_SVG_MAP.python, text: "Python", iconAlt: "Python icon" },
  [IconLabelKeys.ReactJS]: { iconSrc: LOGO_SVG_MAP.reactjs, text: "React", iconAlt: "React icon" },
  [IconLabelKeys.SCSS]: { iconSrc: LOGO_SVG_MAP.scss, text: "SCSS", iconAlt: "SCSS icon" },
  [IconLabelKeys.Spring]: { iconSrc: LOGO_SVG_MAP.spring, text: "Spring", iconAlt: "Spring icon" },
  [IconLabelKeys.SQL]: { iconSrc: LOGO_SVG_MAP.sql, text: "SQL", iconAlt: "SQL icon" },
  [IconLabelKeys.SQLite]: { iconSrc: LOGO_SVG_MAP.sqlite, text: "SQLite", iconAlt: "SQLite icon" },
  [IconLabelKeys.TypeScript]: { iconSrc: LOGO_SVG_MAP.typescript, text: "TypeScript", iconAlt: "TypeScript icon" },
  [IconLabelKeys.Vite]: { iconSrc: LOGO_SVG_MAP.vite, text: "Vite", iconAlt: "Vite icon" },
  [IconLabelKeys.VSCode]: { iconSrc: LOGO_SVG_MAP.vscode, text: "VS Code", iconAlt: "VS Code icon" },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
