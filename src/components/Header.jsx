
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '../assets/image 157.svg';


// const Header = () => {
	
	

// 	return (
// 		<div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">


// 			<div className="flex h-5 items-center">
				
// 				<Link
// 					to="/"
// 					className="flex h-5 items-center"
// 				>
// 				{logo}
				
// 				</Link>
// 			</div>
// 			<div className="group flex items-center">

import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/image 157.svg';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
      <div className="flex h-8 items-center">
        <Link to="/" className="flex h-5 text-lg items-center">
          <img src={logo} alt="Logo" className="h-5 w-auto" />
        </Link>
      </div>
      <div className="group flex items-center">
        <Link to="/solutions" className="text-white ml-4 text-lg hover:text-gray-300">Solutions</Link>
        <Link to="/services" className="text-white ml-4 text-lg hover:text-gray-300">Services</Link>
        <Link to="/about" className="text-white ml-4 text-lg hover:text-gray-300">About</Link>
        <Link to="/culture" className="text-white ml-4 text-lg hover:text-gray-300">Culture</Link>
      </div>
      <div className="flex items-center">
        <Link to="/" className="text-white hover:text-gray-300">
          <div className="flex items-center justify-center h-10 w-10 text-lg rounded-full hover:bg-[#303030]/[0.6] cursor-pointer">
            Contact
          </div>
        </Link>
        <Link to="/" className="text-white hover:text-gray-300 ml-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] cursor-pointer">
            →
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
