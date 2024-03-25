import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Component/Root/Root'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListedBook from './Component/ListedBook/ListedBook';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Books from './Component/Books/Books';

// import Banner from './Component/Banner/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path:"/",
      //   element: <Banner></Banner>,
      // },
      {
        path:"/",
        element: <Books></Books>,
      },
      {
        path:"/Listed Books",
        element: <ListedBook></ListedBook>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
