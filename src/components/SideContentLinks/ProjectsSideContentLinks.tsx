////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { SideContentLinkData, SideContentLinks } from "@/common/components/SideContentLinks";

import { ProjectKey } from "@/data/keys/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param props
 * @see {@link ProjectsSideContentLinksProps}
 * @returns JSX
 */
export function ProjectsSideContentLinks(): JSX.Element {

  // Navigate
  const navigate = useNavigate();

  // Handle Click
  const handleClick = useCallback((projectKey: ProjectKey) => {
    navigate({
      pathname: `/projects/${projectKey}`,
      search: location.search
    })
  }, [navigate, location.search]);

  // Side Content Link Data Array
  const PROJECTS_SIDE_CONTENT_LINK_ARRAY: SideContentLinkData[] = useMemo<SideContentLinkData[]>(() => [
    {
      label: "This Portfolio",
      handleClick: () => { handleClick(ProjectKey.MyPortfolio); }
    },
    {
      label: "Movie Website",
      handleClick: () => { handleClick(ProjectKey.MovieWebsite); }
    },
    {
      label: "Music Visualizer",
      handleClick: () => { handleClick(ProjectKey.MusicVisualizer); }
    },
    {
      label: "Form Validation",
      handleClick: () => { handleClick(ProjectKey.FormValidation); }
    },
    {
      label: "Spring Boot Demo",
      handleClick: () => { handleClick(ProjectKey.SpringBootDemo); }
    }
  ], [handleClick]);

  // Return Component
  return <SideContentLinks sideContentLinkDataArray={PROJECTS_SIDE_CONTENT_LINK_ARRAY} />
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
