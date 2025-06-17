////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { AppLayers } from "./app/Application/AppLayers";
import { InputProvider } from "./context/InputProvider";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTES FOR FUTURE IMPROVEMENT

// prevent tab index for everything that is below an overlay
// possibly add a hotkey to the sidebar icon (Q), similar to how I have Escape set to close the overlay

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/about-me" replace />
  },
  {
    path: "about-me",
    element: <AppLayers />
  },
  {
    path: "projects",
    element: <AppLayers />
  },
  {
    path: "projects/:projectKey",
    element: <AppLayers />
  },
  {
    path: "settings",
    element: <AppLayers />
  },
  {
    path: "*",
    element: <Navigate to="/about-me" replace />
  }
]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {

  return (
    <InputProvider>
      <RouterProvider router={router} />
    </InputProvider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
