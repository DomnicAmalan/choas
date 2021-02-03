import ListSports from '../../pages/ListSportsPage'

const prefix = '/analysis'

const routes = [
  {
    path: `${prefix}`,
    component: ListSports,
    exact: true,
  }
]

export default routes;
