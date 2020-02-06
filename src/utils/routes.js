import Home from '../pages/home'
import Page from '../pages/page'

const routes = [
  {
    path: process.env.PUBLIC_URL + '/',
    exact: true,
    component: Home
  },
  {
    path: process.env.PUBLIC_URL + '/projects',
    component: Page
  },
];

export default routes