import AppRoute from './modules/AppRT';
import AnalysisRoute from './modules/AnalysisRT'
import {GuestLayout} from '../Components/layouts/index'

const listRoutes = [
  {
    layout: GuestLayout,
    routes: [
      ...AppRoute,
      ...AnalysisRoute
    ]
  }
]

export default listRoutes;