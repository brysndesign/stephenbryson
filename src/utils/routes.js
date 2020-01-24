import Home from '../pages/home'
import HultEdu from '../pages/work/hult-edu'

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/hult-edu",
    exact: true,
    component: HultEdu
  },
];

export default routes