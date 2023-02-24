import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {

  // NavLink styles
  const link_css = "text-white font-bold no-underline my-[20px] mx-[30px] px-[15px] py-[10px] transition-all duration-700  rounded-3xl hover:ring-4 hover:ring-lime-500/30"
  const active_css = "!underline underline-offset-8 decoration-2 decoration-lime-500"

  const special_css = "text-white font-bold no-underline my-[20px] mx-[30px] mr-[100px] px-[15px] py-[10px] bg-gradient-to-r from-lime-500 to-green-600 rounded-3xl opacity-90 transition-all duration-700 hover:tracking-wider hover:opacity-100 hover:ring-4 hover:ring-lime-500/30"
  const specialactive_css = "text-gray-200 font-bold no-underline my-[20px] mx-[30px] mr-[100px] px-[15px] py-[10px] bg-gradient-to-r from-lime-500 to-green-600 tracking-wider rounded-3xl ring-4 ring-lime-500/30"
  

  return (
    <div className="flex bg-slate-800 flex-row justify-between">
      <div className="flex flex-row items-center">
        <Link to="home">
          <h1 style={{"filter": "drop-shadow(2px 1px black)"}} className="text-transparent font-bold text-2xl ml-[60px] bg-gradient-to-r from-lime-400 to-green-600 uppercase bg-clip-text">
            <span className="inline-block mr-3 -skew-y-2">Preatoni</span>
            <span className="inline-block -skew-y-2">Giardini</span>
          </h1>
        </Link>
      </div>

      <div className="flex flex-row justify-end">
        <NavLink to="home" className={({ isActive }) => isActive ? `${link_css} ${active_css}` : link_css}>Home</NavLink>
        <NavLink to="servizi" className={({ isActive }) => isActive ? `${active_css} ${link_css}` : link_css}>Servizi</NavLink>
        
        <NavLink to="contatti" className={({ isActive }) => isActive ? specialactive_css : special_css}>CONTATTACI</NavLink>
      </div>
    </div>
  )
}

export default Header
