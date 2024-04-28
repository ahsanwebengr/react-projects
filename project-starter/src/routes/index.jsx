import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import PATHS from './path';
import { Preloader } from '../components';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: PATHS.home, element: <Home /> },
      { path: PATHS.about, element: <About /> },
      { path: PATHS.contact, element: <Contact /> },
      { path: PATHS.notFound, element: <NotFound /> },
    ],
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
