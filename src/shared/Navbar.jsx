import { GiCommercialAirplane } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
        <li><NavLink to='/' className='text-white font-semibold       '>Home</NavLink></li>
        <li><NavLink to='/addSpot'className='text-white font-semibold   '  >Add Tourists Spot</NavLink></li>
        <li><NavLink to='/spots' className='text-white font-semibold  '>All Tourists Spot</NavLink></li>
        <li><NavLink to='/users' className='text-white font-semibold '>My Lists</NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-[#5ac8fa]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold"><GiCommercialAirplane></GiCommercialAirplane>World Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">
                    <MdDarkMode className="text-3xl"></MdDarkMode>
                    <a className="btn text-[20px] font-bold">Login</a>
                    <a className="btn text-[20px] font-bold">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;