import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  

  return (
    <>     

        
    

<div className="min-h-screen bg-black bg-opacity-80">
  <Header />
  <Outlet />
  <Footer />
</div>

    
    </>
  );
}

export default Layout