import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {


    return (
        <nav className=" relative px-2 h-14 w-full bg-[#FF004F] text-white md:font-semibold text-3xl flex items-center justify-center">
            <img className='absolute left-4 h-10' src={logo} alt="" />
            <h1>Claris Admin</h1>
        </nav>
    )
}

export default Navbar
