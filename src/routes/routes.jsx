import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Profile from "../pages/Profile/Profile";
import Rules from "../pages/Rules/Rules";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "game-details/:eventTypeId/:eventId",
        element: <GameDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    
      {
        path: "/rules",
        element: <Rules />,
      },
    ],
  },
]);
