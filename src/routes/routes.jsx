import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Profile from "../pages/Profile/Profile";
import Rules from "../pages/Rules/Rules";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import ActiveBets from "../pages/ActiveBets/ActiveBets";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import Passbook from "../pages/Passbook/Passbook";
import SinglePassbook from "../pages/Passbook/SinglePassbook";

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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/deposit",
        element: <Deposit />,
      },
      {
        path: "profile/withdraw",
        element: <Withdraw />,
      },

      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "active-bets",
        element: <ActiveBets />,
      },
      {
        path: "account-statement",
        element: <AccountStatement />,
      },
      {
        path: "passbook",
        element: <Passbook/>,
      },
      {
        path: "passbook/:marketId",
        element: <SinglePassbook/>,
      },
    ],
  },
]);
