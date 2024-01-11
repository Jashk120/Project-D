import React from 'react'
import { NavLink } from 'react-router-dom'

function LR() {
  return (
    <>
        <div className='flex flex-row'>
        
            <ul className=' flex flex-row'>
            <li>
        <NavLink
        to="/api/login">
            Login
        </NavLink>
        </li>

        <li>
        <div class="h-6 w-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></div>
        </li>
      

     <li>
     <NavLink 
        to="/api/register"
      >
        Register
      </NavLink>
     </li>
      </ul>
      </div>
    </>
  )
}
export default LR
