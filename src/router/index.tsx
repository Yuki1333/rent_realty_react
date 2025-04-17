import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App.tsx';

const Home = lazy(() => import('@pages/Home'));
const OfferDetail = lazy(()=>import('@pages/OfferDetail'));
const NotFound = lazy(()=>import('@pages/NotFound'));


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'offer/:alias', element: <OfferDetail /> },
        { path: '*', element: <NotFound /> }
      ],
    },
  ]);

  export default router;
