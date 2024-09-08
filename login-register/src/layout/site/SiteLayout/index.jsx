import React from 'react'
import HeaderSite from '../Header'
import { Outlet } from 'react-router-dom'
import FooterSite from '../Footer'

const SiteLayout = () => {
  return (
    <div>
      <HeaderSite/>
      <Outlet/>
      <FooterSite/>
    
    </div>
  )
}

export default SiteLayout
