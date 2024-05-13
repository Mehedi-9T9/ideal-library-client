import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import useProvider from "../Provider/useProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2'


const Navbar = () => {
    const { users, logoutUser } = useProvider()
    console.log(users);
    const logoutHandle = () => {
        logoutUser()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    // position: "top",
                    icon: "success",
                    title: "Login Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                // An error happened.
            });
    }

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allbook">All Book</NavLink>
        <NavLink to="/addBook">Add Book</NavLink>
        <NavLink to="/borrowedBook">Borrowed Book</NavLink>
        <NavLink to="/myBook">My Book</NavLink>
    </>
    return (
        <div className="bg-[#F6F7F9] drop-shadow-sm">
            <div className="navbar container mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><a className="  text-xl md:text-2xl font-platypi font-bold text-black"> <span className="text-[#C20E1A]   ">Ideal</span>  Library</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10 text-[#343F52] text-base font-medium font-poppins">
                        {links}
                    </ul>
                </div>
                <Tooltip anchorSelect=".my-anchor-element" place="left">
                    {users?.displayName}
                </Tooltip>



                <div className="navbar-end">
                    {
                        users ?

                            <div className="dropdown dropdown-end drop-shadow-md my-anchor-element">
                                <div tabIndex={0} role="button" className="btn  btn-circle avatar ">
                                    <div className="w-10 rounded-full focus:outline-[#C20E1A] ">
                                        <img alt="No img" src={users?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20 ">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logoutHandle}><a>Logout</a></li>
                                </ul>
                            </div> :
                            <Link to="/login"><button className="bg-[#F7F7F7] py-3 px-7 rounded-xl drop-shadow-md text-[#B09CA9]">Login</button></Link>
                    }

                </div>



            </div>
        </div>
    );
};

export default Navbar;