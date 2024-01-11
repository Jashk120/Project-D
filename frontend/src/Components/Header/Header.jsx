import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from "../../assets/Logo.svg"
import isActive from 'react-dom'



function Header() {
    const [isSquareFilled, setIsSquareFilled] = useState(false);

     const handleHomeClick = () => {
    setIsSquareFilled(!isSquareFilled);
  };


  return (
    <>
    <header className='  sticky z-50 top-0'>
        
    <nav className=' flex h-24 justify-center'>

    <div className="flex  flex-wrap justify-between items-center mx-auto ">
    <Link to="/" className=" ml-4 mt-4 flex items-center">
            <span className="sr-only">D&A</span>
            <img src={Logo} alt="D&A Logo" className="w-160 h-16 flex-shrink-0" />
    
        </Link>
    </div>
        <div className="flex w-screen  justify-center" id="mobile-menu-2">
            <div className="flex mr-44  text-center">
                <ul className='flex flex-col  lg:flex-row mt-4 '>
                    
                    <li style={{ position: 'relative' }}>
                    <NavLink
                    to="/"
                    onClick={handleHomeClick}
                    className={({isActive}) =>
                    ` block py-2 pr-4 pl-3  font-anonymous text-3xl text-normal  font-normal leading-normal duration-200 ${isActive ? "text-yellow-c" : "text-gray-h"} `
                    }
                    aria-current="page"
                >
                    HOME
                    
                        <NavLink
                        to="/"
                         className={({isActive}) =>`absolute top-2/3 left-1/2 ${isActive? "border-2 border-yellow-500 bg-black rotate-45": "bg-transparent"} transform -translate-x-1/2 w-2 h-2  `} />
                    
                </NavLink>
                    
                    </li>
                    <li style={{ position: 'relative' }}>
                    <NavLink
                    to="/entries"
                    onClick={handleHomeClick}
                    className={({isActive}) =>
                    ` block py-2 pr-4 pl-3 font-anonymous text-3xl text-normal font-normal leading-normal duration-200 ${isActive ? "text-yellow-c" : "text-gray-h"} `
                    }
                    aria-current="page"
                >
                    ENTRIES
                    
                        <NavLink
                        to="/entries"
                         className={({isActive}) =>`absolute top-2/3 left-1/2 ${isActive? "border-2 border-yellow-500 bg-black rotate-45": "bg-transparent"} transform -translate-x-1/2 w-2 h-2 mt-1 `} />
                    
                </NavLink>
                    
                    </li>
                    <li style={{ position: 'relative' }}>
                    <NavLink
                    to="/api/register"
                    onClick={handleHomeClick}
                    className={({isActive}) =>
                    ` block py-2 pr-4 pl-3 font-anonymous text-3xl text-normal font-normal leading-normal duration-200 ${isActive ? "text-yellow-c" : "text-gray-h"} `
                    }
                    aria-current="page"
                >
                    REGISTER
                    
                        <NavLink
                        to="/api/register"
                         className={({isActive}) =>`absolute top-2/3 left-1/2 ${isActive? "border-2 border-yellow-500 bg-black rotate-45": "bg-transparent"} transform -translate-x-1/2 w-2 h-2 mt-1 `} />
                    
                </NavLink>
                    
                    </li>

                    
                </ul>
            </div>
        </div>
    </nav>
    </header>
    </>
  )
}

export default Header
