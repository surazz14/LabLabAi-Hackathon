import Dashboard from "../modulus/dashboard/index";
import Profile from "../modulus/profile/index";
import Homepage from "../modulus/homepage/index";

export default [
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
