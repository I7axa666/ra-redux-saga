import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { 
    path: "/api/services/:id", 
    element: <ServiceDetails /> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
