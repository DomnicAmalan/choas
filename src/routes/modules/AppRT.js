import WelcomePage from '../../pages/WelcomePages'

const prefix = '/welcome'

const routes = [
  {
    path: `${prefix}`,
    component: WelcomePage,
    exact: true,
  }
]

export default routes;
