import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { About, Home } from "../pages";

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ] 
  }
])
