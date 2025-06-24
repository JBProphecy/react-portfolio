////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useCallback, useMemo } from "react";

import { SideContentLinkData, SideContentLinks } from "@/common/components/SideContentLinks";
import { BooleanQueryParamHook } from "@/common/hooks/useBooleanQueryParam";

import { AboutMeSectionKey } from "@/data/keys/AboutMeSectionKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AboutMeSideContentLinksProps = {
  sidebarHook: BooleanQueryParamHook;
  sidebarTransitionDurationValueMS: number;
  aboutMeSectionRefMap: Record<AboutMeSectionKey, React.RefObject<HTMLElement>>;
}

/**
 * @param props
 * @see {@link AboutMeSideContentLinksProps}
 * @returns JSX
 */
export function AboutMeSideContentLinks({
  sidebarHook,
  sidebarTransitionDurationValueMS,
  aboutMeSectionRefMap
}: AboutMeSideContentLinksProps): JSX.Element {

  // Handle Click
  const handleClick = useCallback((ref: React.RefObject<HTMLElement>) => {
    sidebarHook.toggle();
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, sidebarTransitionDurationValueMS);
  }, [sidebarHook, sidebarTransitionDurationValueMS]);

  // Side Content Link Data Array
  const ABOUT_ME_SIDE_CONTENT_LINK_DATA_ARRAY: SideContentLinkData[] = useMemo<SideContentLinkData[]>(() => [
    {
      label: "Home",
      handleClick: () => { handleClick(aboutMeSectionRefMap[AboutMeSectionKey.Home]); }
    },
    {
      label: "About Me",
      handleClick: () => { handleClick(aboutMeSectionRefMap[AboutMeSectionKey.MyStory]); }
    },
    {
      label: "Business Links",
      handleClick: () => { handleClick(aboutMeSectionRefMap[AboutMeSectionKey.BusinessLinks]); }
    },
    {
      label: "Skill Cards",
      handleClick: () => { handleClick(aboutMeSectionRefMap[AboutMeSectionKey.SkillCards]); }
    },
  ], [handleClick, aboutMeSectionRefMap]);

  // Return Component
  return <SideContentLinks sideContentLinkDataArray={ABOUT_ME_SIDE_CONTENT_LINK_DATA_ARRAY} />
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
