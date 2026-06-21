import React from 'react'
import { NavLink } from 'react-router-dom'
import user from '../../assets/images/user.png'

const Nav = () => {
    return (
        <nav className="w-full bg-white shadow-sm py-3">
            <div className="w-11/12 mx-auto flex justify-between items-center">

                {/* Left: Navigation Links */}
                <div className="flex gap-8 text-lg font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-gray-600 hover:text-primary transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-gray-600 hover:text-primary transition"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-gray-600 hover:text-primary transition"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Right: User + Login */}
                <div className="flex items-center gap-4">
                    <img
                        src={user}
                        alt="User"
                        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
                    />

                    <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition font-medium shadow-sm">
                        Log In
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Nav