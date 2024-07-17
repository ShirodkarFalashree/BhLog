import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import SignUp from './pages/SignUp.jsx'
import AddPost from "./pages/AddPost";
import Post from './pages/Post.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
    },
      {
        path: "/profile",
        element: <Profile />,
    },
     
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <SignUp />
            </AuthLayout>
        ),
    },
      {
        path:"/all-posts",
        element:(
          <AuthLayout>
            {" "}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
      path:"/edit-post/:slug",
      element:(
        <AuthLayout>
          {" "}
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path: "/post/:slug",
      element: <Post />,
  },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>,
)
