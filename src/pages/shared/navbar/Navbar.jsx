import { Link, NavLink, useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
        .then(() => {
            navigate("/login");
            console.log("Successfully logged out!")
        })
        .catch(error => {
            console.error(error);
        })
    }

    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
    </>
    return (
        <div className="mt-3 mb-12">
            <div className="navbar p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userImage} />
                        </div>
                    </div>
                    {
                        user ?
                        <button onClick={handleSignOut} className="bg-gray-700 text-white py-1 px-5 font-semibold ml-2">Log out</button>
                        : <Link to={"/login"} className="bg-gray-700 text-white py-1 px-5 font-semibold ml-2">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;