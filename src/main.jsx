import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Careers from './pages/Careers.jsx'
import './index.css'
import './sections.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "project/:id", element: <ProjectDetails /> },
      { path: "careers", element: <Careers /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
