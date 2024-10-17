import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login.jsx";
import WelcomePage from "../pages/WelcomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import SeatBookingPage from "../pages/SeatBookingPage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<WelcomePage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/seatbooking" element={<SeatBookingPage />} />
    </Route>
  )
);

function UnauthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default UnauthenticatedRouter;
