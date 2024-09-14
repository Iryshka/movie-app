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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/*<Route index element={<WelcomePage />} />*/}
      <Route index element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
