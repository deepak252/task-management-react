import { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { Spinner } from '@/components/Loader'
const MainLayout = lazy(() => import('@/components/layouts/MainLayout'))
const PageNotFound = lazy(() => import('@/pages/PageNotFound'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]

const SuspenseWrapper = (route: RouteObject): RouteObject => {
  if (route.element) {
    route.element = (
      <Suspense fallback={<Spinner center />}>{route.element}</Suspense>
    )
  }

  if (route.children) {
    route.children = route.children.map(SuspenseWrapper)
  }

  return route
}

function AppRoutes() {
  const wrappedRoutes = routes.map(SuspenseWrapper)
  return useRoutes(wrappedRoutes)
}

export default AppRoutes
