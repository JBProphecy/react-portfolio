////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { LogoKey } from "../keys/LogoKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import css from "@/assets/logos/css.svg";
import expressjs from "@/assets/logos/expressjs.svg";
import git from "@/assets/logos/git.svg";
import github from "@/assets/logos/github.svg";
import html from "@/assets/logos/html.svg";
import java from "@/assets/logos/java.svg";
import javascript from "@/assets/logos/javascript.svg";
import maven from "@/assets/logos/maven.svg";
import mysql from "@/assets/logos/mysql.svg";
import nodejs from "@/assets/logos/nodejs.svg";
import postgressql from "@/assets/logos/postgressql.svg";
import prisma from "@/assets/logos/prisma.svg";
import python from "@/assets/logos/python.svg";
import reactjs from "@/assets/logos/reactjs.svg";
import scss from "@/assets/logos/scss.svg";
import spring from "@/assets/logos/spring.svg";
import sql from "@/assets/logos/sql.svg";
import sqlite from "@/assets/logos/sqlite.svg";
import typescript from "@/assets/logos/typescript.svg";
import vercel from "@/assets/logos/vercel.svg";
import vite from "@/assets/logos/vite.svg";
import vscode from "@/assets/logos/vscode.svg";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const LOGO_SVG_MAP: Record<LogoKey, string> = {
  [LogoKey.CSS]: css,
  [LogoKey.ExpressJS]: expressjs,
  [LogoKey.Git]: git,
  [LogoKey.GitHub]: github,
  [LogoKey.HTML]: html,
  [LogoKey.Java]: java,
  [LogoKey.JavaScript]: javascript,
  [LogoKey.Maven]: maven,
  [LogoKey.MySQL]: mysql,
  [LogoKey.NodeJS]: nodejs,
  [LogoKey.PostgresSQL]: postgressql,
  [LogoKey.Prisma]: prisma,
  [LogoKey.Python]: python,
  [LogoKey.ReactJS]: reactjs,
  [LogoKey.SCSS]: scss,
  [LogoKey.Spring]: spring,
  [LogoKey.SQL]: sql,
  [LogoKey.SQLite]: sqlite,
  [LogoKey.TypeScript]: typescript,
  [LogoKey.Vercel]: vercel,
  [LogoKey.Vite]: vite,
  [LogoKey.VSCode]: vscode,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
