import React, { useState, createContext } from "react"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        showSidebar,
        hideSidebar,
        hover,
        setHover,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
