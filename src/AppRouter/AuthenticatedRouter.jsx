import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage.jsx";
import UserPage from "../pages/UserPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Login from "../components/Login.jsx";
import MovieCardPage from "../pages/MovieCardPage.jsx";
import SeatBooking from "../pages/SeatBooking.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/*<Route index element={<WelcomePage />} />*/}
      <Route index element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/movie-card/:id" element={<MovieCardPage />} />
      <Route path="/seatbooking" element={<SeatBooking />} />
    </Route>
  )
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
