import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './Component/Home.jsx'
import Users from './Component/Users.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
      <RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </StrictMode>,
)
