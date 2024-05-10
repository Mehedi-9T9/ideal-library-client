import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allbook">All Book</NavLink>
        <NavLink to="/addbook">Add Book</NavLink>
        <NavLink to="/borrowedBook">Borrowed Book</NavLink>
    </>
    return (
        <div className="bg-[#F6F7F9]">
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
                    <Link to="/"><a className="  text-2xl font-platypi font-bold text-black"> <span className="text-[#C20E1A] text-2xl   ">Ideal</span>  Library</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10 text-[#343F52] text-base font-medium font-poppins">
                        {links}
                    </ul>
                </div>



                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Navbar;