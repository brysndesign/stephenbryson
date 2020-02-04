import Home from '../pages/home'
import Page from '../pages/page'

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/projects",
    component: Page
  },
];

export default routes