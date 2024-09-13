import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const location = useLocation()

  return (
   <>

  {location.pathname !== '/login' ? <Header/> : ""}
   {children}
{  location.pathname !== '/login' ? <Footer/> : ""}
   </>
  )
}

export default Layout