import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { Navbar, Footer, MobileMenu } from "./index"
import { AnimatePresence } from "framer-motion"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, location }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      {isSidebarOpen && <MobileMenu key="mobile" />}
      <AnimatePresence exitBeforeEnter>
        <Navbar key="navbar" />

        {children}
        <Footer key="footer" />
      </AnimatePresence>
    </>
  )
}

export default Layout
