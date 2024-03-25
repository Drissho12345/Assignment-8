import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li className="text-[18px] text-[#23BE0A]"><NavLink to="">Home</NavLink></li>
        <li className="text-[18px] text-[#23BE0A]"><NavLink to="/Listed Books">Listed Books</NavLink></li>
        <li className="text-[18px] text-[#23BE0A]"><NavLink to="/Pages to Read">Pages to Read</NavLink></li>
        <li className="text-[18px] text-[#23BE0A]"><NavLink to="/Item 4">Item 4</NavLink></li>
        <li className="text-[18px] text-[#23BE0A]"><NavLink to="/Item 5">Item 5</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 w-[90%] m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <p className="btn btn-ghost font-bold text-[28px]">Book Vibe</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-[18px] text-[#23BE0A]">{links}</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn text-[#fff] bg-[#23BE0A]">Sign In</a>
                <a className="btn bg-[#59C6D2] text-[#fff]">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;