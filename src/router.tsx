import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PublicRoute from "./components/common/PublicRoute";
import PrivateRoute from "./components/common/PrivateRoute";
//Pages
import RootElement from "./pages/RootElement";
import ErrorPage from "./pages/Error";
import Home from "./pages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootElement />} errorElement={<ErrorPage />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={
              <PrivateRoute>
                <Portfolio />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default router;
export { RouterProvider };
