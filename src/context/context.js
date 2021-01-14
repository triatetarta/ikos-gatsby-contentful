import React, { useState, createContext } from "react"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, showSidebar, hideSidebar }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
