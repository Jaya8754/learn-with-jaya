import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {

  const [isLoggedIn] = useState(false);   

  return (
    <nav className = "fixed top-0 left-0 w-full bg-gradient-to-br from-indigo-400 via-indigo-800 to-indigo-400 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Learn With Jaya
        </Link>
        <ul className="flex items-center gap-6">
          <li>
          <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-500"  
              : "font-bold text-white hover:text-teal-500" 
          }
          >Home</NavLink></li>
          <li><NavLink to="/concepts" className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-500"  
              : "font-bold text-white hover:text-teal-500" 
          }>Concepts</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-500"  
              : "font-bold text-white hover:text-teal-500" 
          }>Projects</NavLink></li>
          <li><NavLink to="/challenges" className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-500"  
              : "font-bold text-white hover:text-teal-500" 
          }>Challenges</NavLink></li>
          <li>
          {
            isLoggedIn ? (
             <Link to="/profile" >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>) : (
             <Link to="/login">
              <Button
                className="relative overflow-hidden text-md px-6 py-3 border-2 border-white drop-shadow-lg shadow-white text-white 
                          transition-all duration-300 
                          hover:text-white hover:border-transparent
                          bg-transparent"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Login</span>
              </Button>
            </Link>
            )
          }</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
