
import { NavLink } from 'react-router-dom';
import logo from '../../assets/agrodemobg.jpg'
import { CiCircleChevDown } from "react-icons/ci";
import './NavBar.css'
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='' style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className="navbar bg-white lg:ps-24 md:ps-16 ps-6 py-4">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 h-8 md:w-12 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" onClick={() => setOpen(true)} /></svg>
                        </label>
                        {open &&
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <ul className="menu menu-vertical px-1">
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/' className='border-separate hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(!open)}>HOME</NavLink>
                                    </div>

                                    <div className="dropdown dropdown-hover mt-1 ">
                                        <label tabIndex={0} className=" m-1 bg-white flex border-separate hover:border-b-2 border-orange-500 font-semibold px-2">PRODUCTS <span ><CiCircleChevDown className=' w-6 h-5 text-3xl'></CiCircleChevDown></span></label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64 ms-24">
                                            <li className='hover:bg-orange-500 hover:text-white ' onClick={() => setOpen(!open)}><a>Item 1</a></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(!open)}><a>Item 2</a></li>
                                        </ul>
                                    </div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/blog' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(!open)}>BLOG</NavLink></div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/contact' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(!open)}>CONTACT</NavLink></div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/about' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(!open)}>ABOUT</NavLink></div>

                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/login' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold ' onClick={() => setOpen(!open)}>LOGIN</NavLink></div>
                                </ul>
                            </ul>
                        }
                    </div>

                    <div className='flex justify-center items-center gap-2 px-4'>
                        <img src={logo} alt="" className='h-16 w-16 rounded-full' />
                        <span>
                            <h3 className='text-4xl font-bold '> AgroFarm</h3>
                            <p className='text-xs'>Largest agreculture process</p>
                        </span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/' className='border-separate hover:border-b-2 hover:border-orange-500  font-semibold'>HOME</NavLink></div>
                        <div className="dropdown dropdown-hover mt-1 px-3">
                            <label tabIndex={0} className=" m-1 bg-white flex border-separate hover:border-b-2 border-orange-500 font-semibold ">PRODUCTS <span ><CiCircleChevDown className=' w-6 h-5 text-3xl'></CiCircleChevDown></span></label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64">
                                <li className='hover:bg-orange-500 hover:text-white'><a>Item 1</a></li>
                                <li className='hover:bg-orange-500 hover:text-white'><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/blog' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>BLOG</NavLink></div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/contact' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>CONTACT</NavLink></div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/about' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>ABOUT</NavLink></div>
                        <li className=' px-3 text-2xl'> | </li>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/login' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold '>LOGIN</NavLink></div>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
