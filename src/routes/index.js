import AppRoute from './modules/AppRT';
import AnalysisRoute from './modules/AnalysisRT'

const listRoutes = [
  {
    routes: [
      ...AppRoute,
      ...AnalysisRoute
    ]
  }
]

export default listRoutes;