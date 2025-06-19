////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Navigate, RouteObject } from "react-router-dom";

import { RouteKey } from "../data/keys/RouteKey";
import { AppContainer } from "@/app/AppContainer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={RouteKey.AboutMe} replace />
  },
  {
    path: RouteKey.AboutMe,
    element: <AppContainer />
  },
  {
    path: RouteKey.Projects,
    element: <AppContainer />
  },
  {
    path: RouteKey.Project,
    element: <AppContainer />
  },
  {
    path: RouteKey.Settings,
    element: <AppContainer />
  },
  {
    path: "*",
    element: <Navigate to={RouteKey.AboutMe} replace />
  }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
