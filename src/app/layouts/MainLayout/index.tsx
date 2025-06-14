////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { joinClasses } from "@/utils/joinClasses";
import { useState } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props - Component Props
 * @see {@link MainLayoutProps}
 * @returns JSX
 */
export function MainLayout(): JSX.Element {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  function toggleSidebar() { setIsSidebarOpen(isSidebarOpen ? false : true); }

  // Return Content
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <div className={styles.left}>
          <img
            className={joinClasses(styles.icon, isSidebarOpen ? styles.active : styles.normal)}
            onClick={toggleSidebar}
            src="/logo.png"
            alt="left corner icon button"
          />
        </div>
        <div className={styles.middle}>
          <nav className={styles.headers}>
            <a className={styles.header}>Test Link</a>
            <a className={styles.header}>Test Link</a>
            <a className={styles.header}>Test Link</a>
          </nav>
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, isSidebarOpen ? styles.open : styles.closed)}>
          <div className={styles.sidebar}></div>
        </aside>
        <div className={styles.mainContainer}>
          <div className={joinClasses(styles.layer, styles.overlay, isSidebarOpen ? styles.front : styles.back)} />
          <div className={joinClasses(styles.layer, styles.content)}></div>
        </div>
      </main>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
