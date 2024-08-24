import Dashboard from "../modulus/dashboard/index";
import Profile from "../modulus/profile/index";
import Homepage from "../modulus/homepage/index";
import TicketPage from "../modulus/ticket/index";

export default [
  {
    component: TicketPage,
    path: "/ticket",
    exact: true,
    is_private: false
  },
  {
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    is_private: false
  },
  {
    component: Profile,
    path: "/profile",
    exact: true,
    is_private: false
  },
  {
    component: Homepage,
    path: "/",
    exact: true,
    is_private: false
  },
];
