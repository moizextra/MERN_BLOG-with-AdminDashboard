import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPenFill } from "react-icons/bs";
import UserProfile from './UserProfile';
import {useDispatch,useSelector} from 'react-redux'

function Navbar() {
  const dispatch=useDispatch();
  const isAuthenticated=useSelector(state=>state.User.isAutheticated);
  const nav = useRef(null);

  const [expand, setExpand] = useState(false);

  const handleclick = () => {
    setExpand(!expand);
  };

  const navClass = `flex items-center justify-center md:justify-between  flex-wrap bg-gray-800 p-6 border-b-4 border-yellow-500 ${
    expand ? 'h-20' : ''
  }`;

  return (
    <nav className={navClass}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-bold text-xl tracking-tight">BlogNode</Link>
      </div>
<div className='mr-10'>
{isAuthenticated && <UserProfile />}
</div>
      <div className="block lg:hidden">
        <button onClick={handleclick} className="flex items-center px-3 py-2 mx-5 border rounded text-gray-200 border-gray-700 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${expand ? 'hidden' : 'text-gray-300'} mr-4`}>
            Home
          </a>
          <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${expand ? 'hidden' : 'text-gray-300'} mr-4`}>
            About
          </a>
          <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${expand ? 'hidden' : 'text-gray-300'}`}>
            Contact
          </a>
        </div>

        <div className="text-right flex justify-center items-center">
         {!isAuthenticated &&  <Link to={"/auth"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0 mr-2">Login</Link>
      }
      {!isAuthenticated &&  <Link to={"/auth"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Register</Link>}
      {isAuthenticated &&  <button  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Logout</button>}

          <Link to="/create" className="mx-2 flex justify-center w-24 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">
            <span className='mx-2'>Write</span> <BsFillPenFill />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
