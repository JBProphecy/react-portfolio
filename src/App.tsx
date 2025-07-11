////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { InputProvider } from "./common/context/InputProvider";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTES FOR FUTURE IMPROVEMENT

// prevent tab index for everything that is below an overlay
// possibly add a hotkey to the sidebar icon (Q), similar to how I have Escape set to close the overlay

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {

  return (
    <InputProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </InputProvider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
