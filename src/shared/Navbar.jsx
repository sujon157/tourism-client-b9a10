import { useEffect, useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave');
        }
        else {
            setTheme('light');
        }
    }

    const navLink = <>
        <li><NavLink to='/' className='text-white font-semibold'>Home</NavLink></li>
        <li><NavLink to='/addSpot' className='text-white font-semibold'  >Add Tourists Spot</NavLink></li>
        <li><NavLink to='/spots' className='text-white font-semibold'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/users' className='text-white font-semibold'>My Lists</NavLink></li>
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
                    <a className="btn btn-ghost text-3xl text-white font-bold"><GiCommercialAirplane className="text-yellow-400"></GiCommercialAirplane><span className="text-pink-600 font-extrabold text-4xl">W</span>orld Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">
                    <input
                        onChange={handleToggle}
                        type="checkbox"
                        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />


                    <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                        </span>
                        <span className="relative text-white"><Link to='/login'>Login</Link></span>
                    </a>
                    <a href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"><Link to='/register'>SignUp</Link></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;