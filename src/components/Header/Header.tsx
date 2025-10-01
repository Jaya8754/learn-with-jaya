import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);    

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// bg-[#434BE7]
// text-[#28ebdb]
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#434BE7] text-white text-md shadow-md" : "bg-white text-[#434BE7] text-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl hover:text-[#888dcf] font-bold">
          Learn With Jaya
        </Link>
        <ul className="flex items-center gap-6">
          <li><Link to="/home" className = "font-bold hover:text-[#888dcf] ">Home</Link></li>
          <li><Link to="/concepts" className = "hover:text-[#888dcf] font-bold">Concepts</Link></li>
          <li><Link to="/projects" className = "hover:text-[#888dcf] font-bold">Projects</Link></li>
          <li><Link to="/challenges" className = "hover:text-[#888dcf] font-bold">Challenges</Link></li>
          <li><Link to="/about" className = "hover:text-[#888dcf] font-bold">About</Link></li>
          <li><Link to="/contact" className = "hover:text-[#888dcf] font-bold">Contact</Link></li>
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
          className={`transition-colors duration-300 ${
          scrolled
            ? "bg-white text-[#434BE7] hover:bg-[#dfe1fc]"
            : "bg-[#434BE7] text-white hover:bg-[#3737c0]"
              }`}
          >
            Log In</Button>
            </Link>
            )
          }</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
