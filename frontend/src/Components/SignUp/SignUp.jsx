import React from 'react'
import { Outlet } from 'react-router-dom'
import LR from './L&R'



function SignUp() {
  return (
    <>
        <LR/>
      <Outlet />
    </>
  )
}


export default SignUp
