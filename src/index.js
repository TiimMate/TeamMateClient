import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import store from './redux/store';

import './styles/global.css';
import './styles/reset.css';
import App from './App';
//import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { QueryClientProvider, QueryClient } from 'react-query';

//const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </Provider>,
  // </React.StrictMode>,
);
