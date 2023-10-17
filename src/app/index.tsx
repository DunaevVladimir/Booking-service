import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from '@/app/providers';
import '@/app/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);