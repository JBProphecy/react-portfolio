////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { InputProvider } from "./context/InputProvider"
import { AppLayers } from "./app/components/AppLayers";
import { SectionKey } from "./app/data/enums/SectionKey";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTES FOR FUTURE IMPROVEMENT

// set up tab index for all the cards and links
// use HTML dialog element for the overlay to trap tabs (maybe, I'll have to figure it out first)
// possibly add a hotkey to the sidebar icon (Q), similar to how I have Escape set to close the overlay

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const primaryRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayers />,
    children: [
      {
        path: SectionKey.AboutMe,
        element: <></>
      },
      {
        path: SectionKey.Projects,
        element: <></>
      },
      {
        path: `${SectionKey.Projects}/:projectKey`,
        element: <></>
      },
      {
        path: SectionKey.Settings,
        element: <></>
      }
    ]
  }
]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {

  return (
    <InputProvider>
      <RouterProvider router={primaryRouter} />
    </InputProvider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
