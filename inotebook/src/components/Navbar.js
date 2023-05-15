import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Navbar = () => {
  // const location =useLocation();

  //  React.useEffect(()=> {
  //   // Google Analytics
  //   console.log(location.pathname)
  // }, [location]);

  const navLinkStyles=({isActive})=>{
      return {
        fontWeight:isActive?'bold':'normal'
      }
  }

  return (
   <>

<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <NavLink className="flex title-font font-medium items-center text-gray-900 mb-1.5 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">iNoteBook</span>
    </NavLink>
    <nav className="md:mr-auto md:ml-4 md:py-0 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" style={navLinkStyles}className="mr-5 hover:text-gray-900 " >Home</NavLink>
      <NavLink to ="/About" style={navLinkStyles} className="mr-5 hover:text-gray-900">About</NavLink>
      <NavLink to ="/Contact" style={navLinkStyles}className="mr-5 hover:text-gray-900">Contact</NavLink>
      <NavLink to ="/Login" style={navLinkStyles}className="mr-5 hover:text-gray-900">Login</NavLink>
      <NavLink to ="/Register" style={navLinkStyles} className="mr-5 hover:text-gray-900">Register</NavLink>
      <NavLink to ="/Notes" style={navLinkStyles} className="mr-5 hover:text-gray-900">Notes</NavLink>
    </nav>
    
  </div>
</header>

   </>
  )
}

export default Navbar