import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
// toast 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Books from './Component/Books/Books';
import Root from './Component/Root/Root';
import ListedBook from './Component/ListedBook/ListedBook';
import BookBio from './Component/BookBio/BookBio';
import ReadBooks from './Component/Read Books/ReadBooks';
import ReadChart from './Component/readChart/ReadChart';
import User from './Component/User/User';
import ViewData from './Component/ViewData/ViewData';
import ViewReadData from './Component/ViewReadData/ViewReadData';


const  router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Books></Books>,
      },
      {
        path: "/User",
        element: <User></User>,
      },
      {
        path: "/ViewData/:id",
        element: <ViewData></ViewData>,
        loader: ()=>fetch("/Books.json"),
      },
      {
        path: "/ViewReadData/:id",
        element: <ViewReadData></ViewReadData>,
        loader: ()=>fetch("/Books.json"),
      },
      {
        path:"/BookBio/:id",
        element: <BookBio></BookBio>,
        loader: ()=>fetch("/Books.json"),
      },
      {
        path:"/Listed Books",
        element: <ListedBook></ListedBook>,
        children:[
          {
            // path: "Read Books",
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          
        ],
      },
      {
        path:"/Pages to Read",
        element: <ReadChart></ReadChart>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
