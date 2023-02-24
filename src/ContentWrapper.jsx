import React from "react"
import { Outlet } from "react-router-dom"

const ContentWrapper = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  )
}

export default ContentWrapper
