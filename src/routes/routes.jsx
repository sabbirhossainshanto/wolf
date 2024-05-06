import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Profile from "../pages/Profile/Profile";
import Rules from "../pages/Rules/Rules";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import ActiveBets from "../pages/ActiveBets/ActiveBets";
import Passbook from "../pages/Passbook/Passbook";
import SinglePassbook from "../pages/Passbook/SinglePassbook";
import WithdrawStatement from "../pages/WithdrawStatement/WithdrawStatement";
import DepositStatement from "../pages/DepositStatement/DepositStatement";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import Casino from "../pages/Casino/Casino";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "casino/:name/:id",
        element: <Casino />,
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
        path: "deposit-statement",
        element: <DepositStatement />,
      },
      {
        path: "withdraw-statement",
        element: <WithdrawStatement />,
      },
      {
        path: "passbook",
        element: <Passbook />,
      },
      {
        path: "passbook/:marketId",
        element: <SinglePassbook />,
      },
      {
        path: "my-bank-details",
        element: <MyBankDetails />,
      },
 
  
    ],
  },
 
]);
