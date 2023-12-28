import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      // refetchOnWindowFocus:false
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);

