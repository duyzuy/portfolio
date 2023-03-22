import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/common/PrivateRoute";

//Pages route
import RootElement from "./pages/RootElement";
import ErrorPage from "./pages/Error";
import Home from "./pages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootElement />} errorElement={<ErrorPage />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default router;
export { RouterProvider };
