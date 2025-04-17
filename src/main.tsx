import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/css/style.css'

import { RouterProvider } from 'react-router-dom';
import router from './router';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);