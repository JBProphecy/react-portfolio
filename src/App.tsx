////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { InputProvider } from "./context/InputProvider"
import { AppLayers } from "./app/components/AppLayers";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTES FOR FUTURE IMPROVEMENT

// set up tab index for all the cards and links
// use HTML dialog element for the overlay to trap tabs (maybe, I'll have to figure it out first)
// possibly add a hotkey to the sidebar icon (Q), similar to how I have Escape set to close the overlay

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/about-me" replace />
  },
  {
    path: "/about-me",
    element: <AppLayers />
  },
  {
    path: "/projects",
    element: <AppLayers />
  },
  {
    path: "/projects/:projectKey",
    element: <AppLayers />
  },
  {
    path: "/settings",
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
