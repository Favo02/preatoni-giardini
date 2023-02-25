import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import Servizi from "./Pages/Servizi"
import Contatti from "./Pages/Contatti"

const router = createHashRouter([
  {
    path: "/",
    element: <ContentWrapper />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "servizi", element: <Servizi /> },
      { path: "contatti", element: <Contatti /> },
    ],
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
