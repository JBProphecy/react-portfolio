////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { useRef, useState } from "react";
import { Dimensions } from "@/types/Dimensions";
import { useDimensions } from "@/hooks/useDimensions";
// import { processComponentDimensions } from "@/utils/processComponentDimensions";
import { joinClasses } from "@/utils/joinClasses";
import { CustomProperties } from "@/types/css/CustomProperties";
import { AboutMeContent } from "@/app/AboutMeContent";
import { AboutMeLinks } from "@/app/AboutMeLinks";
import { toStringMS } from "@/utils/strings/toStringMS";
import { toStringPX } from "@/utils/strings/toStringPX";
import { ProjectsContent } from "@/app/ProjectsContent";
import { TransitionTimingFunction } from "@/types/css/TransitionTimingFunction";
import { OverlayHook, useOverlay } from "@/hooks/useOverlay";
import { ProjectsLinks } from "../ProjectsLinks";
import { ProjectKeys } from "@/data/PROJECT_MAP";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type LeftSidebarLayoutProps = {
  toggleProjectModalOverlay: () => void;
  setProjectKey: React.Dispatch<React.SetStateAction<ProjectKeys | null>>;
}

/**
 * @param props - Component Props
 * @see {@link LeftSidebarLayoutProps}
 * @returns JSX
 */
export function LeftSidebarLayout({
  toggleProjectModalOverlay,
  setProjectKey
}: LeftSidebarLayoutProps): JSX.Element {

  // Component Dimensions
  const componentRef = useRef<HTMLDivElement>(null);
  const componentDimensions: Dimensions = useDimensions(componentRef);

  // Component Constants
  const transitionDurationValueMS: number = 250;
  const transitionFunction: TransitionTimingFunction = "ease-out";
  const headerHeightValuePX = 56;

  // Custom Properties
  const style: CustomProperties = {
    // ...processComponentDimensions(componentDimensions), I'm using 100dvw and 100dvh now.
    "--transitionDuration": toStringMS(transitionDurationValueMS),
    "--transitionFunction": transitionFunction,
    "--headerHeight": toStringPX(headerHeightValuePX)
  }

  // Main Overlay Hook
  const mainOverlayHook: OverlayHook = useOverlay();

  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Sidebar Functions
  const toggleOpenClosed = () => {
    setIsSidebarOpen(isSidebarOpen ? false : true);
    mainOverlayHook.toggle();
  }

  const handleClickSidebarLink = (ref: React.RefObject<HTMLElement>) => {
    toggleOpenClosed();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, transitionDurationValueMS)
  }

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // Header Stuff
  enum Headers { AboutMe, Projects }

  // Header State
  const defaultHeader = useRef<Headers>(Headers.AboutMe);
  const [activeHeaderKey, setActiveHeaderKey] = useState<Headers>(defaultHeader.current);

  // Header Functions
  const handleClickHeaderLink = (activeHeaderKey: Headers) => {
    setActiveHeaderKey(activeHeaderKey);
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; }
  }

  // Header Associations
  type LayoutData = {
    headerLabel: string
    linksComponent: JSX.Element
    contentComponent: JSX.Element
  }

  const layoutData: Record<Headers, LayoutData> = {
    [Headers.AboutMe]: {
      headerLabel: "About Me",
      linksComponent: <AboutMeLinks
        handleClick={handleClickSidebarLink}
        heroRef={heroRef}
        myStoryRef={myStoryRef}
        businessLinksRef={businessLinksRef}
        skillCardsRef={skillCardsRef}
      />,
      contentComponent: <AboutMeContent
        headerHeight={headerHeightValuePX}
        heroHeight={componentDimensions.height - 2 * headerHeightValuePX}
        heroRef={heroRef}
        myStoryRef={myStoryRef}
        businessLinksRef={businessLinksRef}
        skillCardsRef={skillCardsRef}
      />
    },
    [Headers.Projects]: {
      headerLabel: "Projects",
      linksComponent: <ProjectsLinks
        toggleProjectModalOverlay={toggleProjectModalOverlay}
        setProjectKey={setProjectKey}
      />,
      contentComponent: <ProjectsContent
        headerHeight={headerHeightValuePX}
        toggleProjectModalOverlay={toggleProjectModalOverlay}
        setProjectKey={setProjectKey}
      />
    }
  }

  // Scroll Container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Return Content
  return (
    <div
      ref={componentRef}
      className={styles.component}
      style={style}
    >
      <div className={joinClasses(styles.layer, styles.background)} />
      <div className={joinClasses(styles.layer, styles.content)}>
        <header className={styles.header}>
          <div className={styles.leftContainer}>
            <img className={joinClasses(styles.image, isSidebarOpen ? styles.open : styles.closed)}
              src="logo.png"
              alt="corner icon"
              onClick={toggleOpenClosed}
            />
          </div>
          <div className={styles.middleContainer}>
            <nav className={styles.links}>
              {Object.entries(layoutData).map(([key, { headerLabel }]) => (
                <a
                  key={key}
                  className={joinClasses(styles.link, Number(key) === activeHeaderKey ? styles.active : "")}
                  onClick={() => handleClickHeaderLink(Number(key))}
                >
                  {headerLabel}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.rightContainer}></div>
        </header>
        <main className={styles.main}>
          <div className={joinClasses(styles.layer, styles.overlay, mainOverlayHook.isActive ? styles.front : styles.back)}>
            <div className={joinClasses(styles.layer, styles.background)} />
            <div className={joinClasses(styles.layer, styles.content)}>
              <aside className={joinClasses(styles.sidebar, isSidebarOpen ? styles.open : styles.closed)}>
                <div className={styles.inner}>
                  {layoutData[activeHeaderKey].linksComponent}
                </div>
              </aside>
            </div>
          </div>
          <div ref={scrollRef} className={joinClasses(styles.layer, styles.content, isSidebarOpen ? styles.open : styles.closed)}>
            {layoutData[activeHeaderKey].contentComponent}
          </div>
        </main>
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
