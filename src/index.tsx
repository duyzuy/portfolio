import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import router, { RouterProvider } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
