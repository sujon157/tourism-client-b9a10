
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import './Navbar.css';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    // const [theme, setTheme] = useState('light');
    // console.log(theme);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");


        } else {
            setTheme("light");

        }
    };

    // useEffect(() => {

    //     const localTheme = localStorage.getItem('theme') || 'light';
    //     localStorage.setItem('theme', localTheme);


    //     document.querySelector('html').setAttribute('data-theme', localTheme);
    //     setTheme(localTheme);

    // }, []);

    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme('dark');
    // localStorage.setItem('theme', 'dark');

    // document.querySelector('html').setAttribute('data-theme', 'dark');
    // setTheme('dark');
    //     }
    //     else {

    //         setTheme('light');
    // localStorage.setItem('theme', 'light');

    // document.querySelector('html').setAttribute('data-theme', 'light');
    // setTheme('light');
    //     }
    // }


    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    if (loading) {
        return <span className="loading loading-spinner loading-lg "></span>
    }


    const navLink = <>
        <li><NavLink to='/' className='text-white font-semibold'>HOME</NavLink></li>
        {
            user &&
            <li><NavLink to='/addSpot' className='text-white font-semibold'  >ADD TOURIST</NavLink></li>
        }
        <li><NavLink to='/countryField' className='text-white font-semibold'  >ADD COUNTRY</NavLink></li>
        <li><NavLink to='/spots' className='text-white font-semibold'>ALL TOURISTS</NavLink></li>
        {
            user &&

            <li><NavLink to='/users' className='text-white font-semibold'>USER LIST</NavLink></li>

        }

    </>
    return (
        <div className="">
            <div className="navbar   navbar-dark bg-primary shadow-3xl fixed z-10">
                <div className="navbar-start ">
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
                            className="menu menu-sm dropdown-content  mt-3 w-52 p-2">
                            {navLink}
                        </ul>
                    </div>
                    {/* <img src="https://i.ibb.co/w0d1F8J/airplane.png" className="w-14 h-14" alt="" /> */}
                    <a className="my-anchor-elements">
                        <img src="https://i.ibb.co/w0d1F8J/airplane.png" className="w-14 h-14" alt="" />
                    </a>
                    <Tooltip anchorSelect=".my-anchor-elements" place="top">
                        Logo
                    </Tooltip>
                    <a className="btn btn-ghost text-white font-bold text-xl">

                        <span className='text-3xl font-bold text-orange-600'>T</span>RAVEL TOUR</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-2 p-6 ">


                    <a data-tooltip-id="my-tooltip"
                        data-tooltip-content="Theme"
                        data-tooltip-place="top">
                        <label className="cursor-pointer grid place-items-center pr-1 lg:pr-2">
                            <input
                                onChange={handleToggle}
                                type="checkbox"
                                checked={theme === "dark"}
                                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                            />
                            <svg
                                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </a>
                    <Tooltip id="my-tooltip" />











                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className=" m-1 rounded-full w-10 h-10 mr-7 ">

                                        <a className="my-anchor-element"><img src={user.photoURL} className="rounded-full w-10 h-10 mr-3" alt="" /></a>

                                        <Tooltip anchorSelect=".my-anchor-element" place="top">
                                            Account
                                        </Tooltip>


                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
                                        <li><a onClick={handleSignOut}>SignOut</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <p>
                                        <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                            </span>
                                            <span className="relative text-white">Log in </span>
                                        </a>
                                    </p>
                                </Link>

                                <Link to='/register'>
                                    <p>
                                        <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Sign Up</span>
                                        </a>

                                    </p>

                                </Link>
                            </>
                    }
                </div>

            </div>
        </div>

    );
};

export default Navbar;