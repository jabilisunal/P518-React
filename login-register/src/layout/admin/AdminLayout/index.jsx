import React from 'react'
import HeaderAdmin from '../Header'
import { Outlet } from 'react-router-dom'
import FooterAdmin from '../Footer'

const AdminLayout = () => {
  return (
    <div>
      <HeaderAdmin/>
      <Outlet/>
      <FooterAdmin/>
    </div>
  )
}

export default AdminLayout
