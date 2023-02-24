import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  // NavLink styles
  const link_css = "text-white font-bold no-underline my-[20px] px-[15px] py-[10px] transition-all duration-700  rounded-3xl hover:ring-4 hover:ring-lime-500/30"
  const active_css = "!underline underline-offset-8 decoration-2 decoration-lime-500"
  // special NavLink style
  const special_css = "text-white font-bold no-underline my-[20px] md:mr-[100px] px-[15px] py-[10px] bg-gradient-to-r from-lime-500 to-green-600 rounded-3xl opacity-90 transition-all duration-700 hover:tracking-wider hover:opacity-100 hover:ring-4 hover:ring-lime-500/30"
  const specialactive_css = "text-gray-200 font-bold no-underline my-[20px] md:mr-[100px] px-[15px] py-[10px] bg-gradient-to-r from-lime-500 to-green-600 tracking-wider rounded-3xl ring-4 ring-lime-500/30"

  return (
    <div className="h-[85px] bg-slate-800 flex flex-row justify-evenly md:gap-[200px]">

      <div className={`md:flex flex-row items-center ${mobileOpen ? "hidden" : "flex"}`}>
        <Link to="home">
          <h1 style={{"filter": "drop-shadow(2px 1px black)"}} className="text-transparent font-bold text-2xl ml-[40px] md:ml-[60px] bg-gradient-to-r from-lime-400 to-green-600 uppercase bg-clip-text">
            <span className="inline-block mr-3 -skew-y-2">Preatoni</span>
            <span className="inline-block -skew-y-2">Giardini</span>
          </h1>
        </Link>
      </div>

      <div className={`flex-row justify-evenly md:justify-end md:flex min-[400px]:gap-[15px] md:gap-[50px] ${!mobileOpen ? "hidden" : "flex"}`}>
        <NavLink to="home" className={({ isActive }) => isActive ? `${link_css} ${active_css}` : link_css}>Home</NavLink>
        <NavLink to="servizi" className={({ isActive }) => isActive ? `${active_css} ${link_css}` : link_css}>Servizi</NavLink>
        
        <NavLink to="contatti" className={({ isActive }) => isActive ? specialactive_css : special_css}>CONTATTACI</NavLink>
      </div>
  
      <div className="flex flex-row items-center mr-[40px] md:hidden">
        { mobileOpen
          ? <XMarkIcon className="h-12 w-12 text-white hover:cursor-pointer" onClick={toggleMobileMenu} />
          : <Bars3Icon className="h-12 w-12 text-white hover:cursor-pointer" onClick={toggleMobileMenu} />
        }
      </div>
      
    </div>
  )
}

export default Header
