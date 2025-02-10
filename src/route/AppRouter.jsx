import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ActiveRefresh from "../pages/ActiveRefresh";
import AloeveraProject from "../pages/AloeveraProject";
import ContactUs from "../pages/ContactUs";
import EmpoweringFarmerProject from "../pages/EmpoweringFarmerProject";
import EqLifeProject from "../pages/EqLifeProject";
import GentleGlow from "../pages/GentleGlow";
import Products from "../pages/Products";
import Projects from "../pages/Projects";
import MainContainer from "../components/layouts/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainContainer />
      </>
    ),
    children: [
      { path: "/", element: <AboutUs /> },
      { path: "/products", element: <Products /> },
      { path: "/gentle-glow", element: <GentleGlow /> },
      { path: "/active-refresh", element: <ActiveRefresh /> },
      { path: "/projects", element: <Projects /> },
      { path: "/empowering-farmer", element: <EmpoweringFarmerProject /> },
      { path: "/aloe-vera", element: <AloeveraProject /> },
      { path: "/eq-life", element: <EqLifeProject /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
