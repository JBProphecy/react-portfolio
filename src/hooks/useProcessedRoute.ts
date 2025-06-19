////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useCallback, useEffect } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom"

import { RouteKey } from "@/data/keys/RouteKey";
import { isProjectKeyCheckUnknown } from "@/data/keys/ProjectKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useProcessedRoute() {

  const location = useLocation();
  const navigate = useNavigate();

  const findMatchingRoute = useCallback(() => {
    for (const route of Object.values(RouteKey)) {
      const match = matchPath(route, location.pathname);
      if (match) { return { route, params: match.params } }
    }
    return null;
  }, [location.pathname]);

  const processMatchingRoute = useCallback((match: ReturnType<typeof findMatchingRoute>) => {
    if (match === null) { return }
    switch (match.route) {
      case RouteKey.AboutMe:
        break;
      case RouteKey.Project:
        if (!isProjectKeyCheckUnknown(match.params.projectKey)) {
          navigate({ pathname: RouteKey.Projects, search: location.search }, { replace: true })
        }
        break;
      case RouteKey.Projects:
        break;
      case RouteKey.Settings:
        break;
    }
  }, [navigate, location.search]);

  useEffect(() => { processMatchingRoute(findMatchingRoute()); }, [findMatchingRoute, processMatchingRoute]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
