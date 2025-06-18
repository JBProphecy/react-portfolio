////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styles from "./index.module.scss";

import { AboutMeContent } from "./AboutMeContent";
import { ProjectsContent } from "./ProjectsContent";

import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { SectionKey } from "@/app/data/enums/SectionKey";
import { SECTION_MAP } from "@/app/data/maps/SECTION_MAP";
import { AppStateHook } from "@/app/hooks/useAppState";

import { HeaderLinks } from "@/components/HeaderLinkStuff/HeaderLinks";

import { BooleanQueryParamHook, useBooleanQueryParam } from "@/hooks/useBooleanQueryParam";

import { CustomProperties } from "@/types/css/CustomProperties";

import { joinClasses } from "@/utils/joinClasses";
import { toStringMS } from "@/utils/strings/toStringMS";
import { AboutMeSideContentLinks } from "@/app/components/SideContentLinks/AboutMeSideContentLinks";
import { ProjectsSideContentLinks } from "@/app/components/SideContentLinks/ProjectsSideContentLinks";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export enum AboutMeSectionKey {
  Home = "home",
  MyStory = "my-story",
  BusinessLinks = "business-links",
  SkillCards = "skill-cards"
}

export type AboutMeSectionRefMap = Record<AboutMeSectionKey, React.RefObject<HTMLElement>>;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AppPrimaryContentLayoutProps = {
  appStateHook: AppStateHook
}

/**
 * @param props
 * @see {@link AppPrimaryContentLayoutProps}
 * @returns JSX
 */
export function AppPrimaryContentLayout({
  appStateHook
}: AppPrimaryContentLayoutProps): JSX.Element {

  // Navigate
  const navigate = useNavigate();

  // Sidebar Hook
  const sidebarHook: BooleanQueryParamHook = useBooleanQueryParam("sidebar", "open");

  // Component Constants
  const transitionDurationValueMS: number = 300;

  // Component Style
  const style: CustomProperties = {
    "--app-primary-content-layout-transition-duration": toStringMS(transitionDurationValueMS)
  }

  // Header Link Order
  const HEADER_LINK_SECTION_KEY_ARRAY: SectionKey[] = [
    SectionKey.AboutMe,
    SectionKey.Projects,
    // SectionKey.Settings
  ]

  const sidebarContentScrollRef = useRef<HTMLDivElement>(null);
  const mainContentScrollRef = useRef<HTMLDivElement>(null);

  // Header Link Click
  const handleClickHeaderLink = (sectionKey: SectionKey) => {
    if (sidebarContentScrollRef.current) { sidebarContentScrollRef.current.scrollTo({ top: 0, behavior: "smooth" }); }
    if (mainContentScrollRef.current) { mainContentScrollRef.current.scrollTo({ top: 0, behavior: "smooth" }); }
    navigate({
      pathname: `/${sectionKey}`,
      search: location.search
    });
  }

  // About Me Section Refs
  const heroRef = useRef<HTMLElement>(null);
  const myStoryRef = useRef<HTMLElement>(null);
  const businessLinksRef = useRef<HTMLElement>(null);
  const skillCardsRef = useRef<HTMLElement>(null);

  // About Me Section Ref Map
  const ABOUT_ME_SECTION_REF_MAP = useMemo<AboutMeSectionRefMap>(() => ({
    [AboutMeSectionKey.Home]: heroRef,
    [AboutMeSectionKey.MyStory]: myStoryRef,
    [AboutMeSectionKey.BusinessLinks]: businessLinksRef,
    [AboutMeSectionKey.SkillCards]: skillCardsRef
  }), [heroRef, myStoryRef, businessLinksRef, skillCardsRef]);

  // Return Content
  return (
    <div className={styles.appPrimaryContentLayout} style={style}>
      <header className={styles.header}>
        <div className={styles.left}>
          <img
            className={joinClasses(styles.icon, sidebarHook.value ? styles.active : styles.normal)}
            onClick={sidebarHook.toggle}
            src="/logo.png"
            alt="left corner icon button"
          />
        </div>
        <div className={styles.middle}>
          <HeaderLinks
            headerLinkKeyAndPropsArray={HEADER_LINK_SECTION_KEY_ARRAY.map((sectionKey) => ({
              headerLinkKey: sectionKey,
              headerLinkProps: {
                linkText: SECTION_MAP[sectionKey].headerLabel,
                isActive: sectionKey === appStateHook.sectionKey,
                handleClick: () => handleClickHeaderLink(sectionKey)
              }
            }))}
          />
        </div>
        <div className={styles.right}></div>
      </header>
      <main className={styles.main}>
        <aside className={joinClasses(styles.sideContainer, sidebarHook.value ? styles.open : styles.closed)}>
          <div ref={sidebarContentScrollRef} className={styles.sidebar}>
            {(() => {
              switch (appStateHook.sectionKey) {
                case SectionKey.AboutMe:
                  return <AboutMeSideContentLinks
                    sidebarHook={sidebarHook}
                    sidebarTransitionDurationValueMS={transitionDurationValueMS}
                    aboutMeSectionRefMap={ABOUT_ME_SECTION_REF_MAP}
                  />;
                case SectionKey.Projects:
                  return <ProjectsSideContentLinks />;
                case SectionKey.Settings:
                  return <></>;
                default: return <></>;
              }
            })()}
          </div>
        </aside>
        <div className={styles.mainContainer}>
          <div className={joinClasses(styles.layer, styles.overlay, sidebarHook.value ? styles.front : styles.back)} />
          <div ref={mainContentScrollRef} className={joinClasses(styles.layer, styles.content)}>
            {(() => {
              switch (appStateHook.sectionKey) {
                case SectionKey.AboutMe:
                  return <AboutMeContent aboutMeSectionRefMap={ABOUT_ME_SECTION_REF_MAP} />
                case SectionKey.Projects:
                  return <ProjectsContent />
              }
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
