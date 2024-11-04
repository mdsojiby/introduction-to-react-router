import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './Contact/Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Users from './Users/Users.jsx'
import UserDetals from './UserDetals/UserDetals.jsx'
import Posts from './User/Posts/Posts.jsx'
import PostDetals from './User/Posts/Post/PostDeatls/PostDetals.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },

      {
        path:'/contact',
        element:<Contact></Contact>
      },

      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },

      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetals></UserDetals>
      },

      {
        path:'/posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>

      },

      {path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/ ${params.postId}`),
        element:<PostDetals></PostDetals>

      }
    ]
  },
  
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
