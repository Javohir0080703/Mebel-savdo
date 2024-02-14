import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'

const MainLayout = () => {

  
  return (
    <>
    <TopHeader/>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout