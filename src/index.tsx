import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import router, { RouterProvider } from "./router";
import CursorProvider from "./providers/CursorProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CursorProvider>
    <RouterProvider router={router} />
  </CursorProvider>
);
