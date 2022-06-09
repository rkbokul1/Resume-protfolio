import React from 'react';
import resume from './../../img/Final Resume.pdf';

const Navbar = () => {
    const menu = <>
    
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#project">Project</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href={`${resume}`} className='btn btn-outline btn-primary' >Download Resume</a></li>
    
    </>

    return (
        <div>
            <div className="navbar container mx-auto px-4 fixed top-0 z-50 text-white">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a href='#' className="btn btn-ghost normal-case text-xl">Raihanul Kabir</a>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;