import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Navbar, Footer, MobileMenu } from "./index"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      <Navbar />
      {isSidebarOpen && <MobileMenu />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
