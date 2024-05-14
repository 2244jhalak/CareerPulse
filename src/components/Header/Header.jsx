import './Header.css'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import {FaRegUserCircle,FaWindowClose,FaBars } from 'react-icons/fa';

import Logo from '../../../src/assets/images/logo.png'

import { useContext,  useEffect,  useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import { Link } from 'react-router-dom';





const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from localStorage, default to false if not found
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true'; // Convert string to boolean
});

useEffect(() => {
    // Apply dark mode class to document.documentElement
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Update localStorage with the new dark mode state
    localStorage.setItem('darkMode', darkMode);
}, [darkMode]);



  const [open,setOpen]=useState(false);  
  
  



  const {user,logOut}=useContext(AuthContext);
  const logOutUser=()=>{
    logOut();
    
  }
    
        

  return (
    <div className='sticky top-0 z-50'>
      <nav className='container mx-auto'>
      <div className='flex items-center bg-blue-950'>
         
    
         <div onClick={()=>setOpen(!open)} className='container mx-auto p-5 lg:hidden'>
             <p className=''>
                   {open?<FaWindowClose className='text-white'></FaWindowClose>:<FaBars className='text-white'></FaBars>}
             </p>
         </div> 
         <img className='w-12 h-12' src={Logo} alt="" />
         <h3 className='text-3xl text-white lg:pl-3 md:pr-2 pr-2 font-semibold'>CareerPulse</h3>
         <ul className={`${open ?'top-12 block z-50':'-top-96 text-white bg-blue-950'} flex lg:flex-row flex-col px-10 py-2  absolute lg:static items-center rounded-b-lg ms-6 duration-1000 lg:gap-x-10 bg-blue-950 text-white`}>
         
        <li className='hover:text-orange-400 mr-2'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-400 mr-2'><Link to="/all">All Jobs</Link></li>
        <li className='hover:text-orange-400 mr-2'><Link to="/blogs">Blogs</Link></li>
        <li className={`font-roboto ${darkMode ? 'dark' : ''} dark:bg-black dark:text-white`}>
        <div className="container mx-auto">
                <button
                    onClick={() => {
                        setDarkMode(!darkMode)
                    }}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-stone-700 dark:bg-white dark:text-black"
                >
                    {!darkMode ? '🌚Dark' : '🌞Light'}
                </button>
            </div>
        


        </li>
        
        
        <li>
        {
      user ? 
           <div className="flex items-center lg:flex-row flex-col">
              
              
              
              <ul className='flex lg:flex-row md:flex-col flex-col'>
              <li className='hover:text-orange-400 mr-2'><Link to="/add">Add a job</Link></li>
        <li className='hover:text-orange-400 mr-2'><Link to="/my">My Jobs</Link></li>
        <li className='hover:text-orange-400 mr-2'><Link to="/applied">Applied Jobs</Link></li>
        

              </ul>
              
              <div data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName}
  data-tooltip-place="top">
    <Tooltip id="my-tooltip" />
  

              
                     
                      {
                        user.photoURL?
                        <img referrerPolicy='no-referrer' className="h-12 w-12 rounded-[50%]" src={user.photoURL} alt="" />
                        :
                        <FaRegUserCircle className='text-2xl'></FaRegUserCircle>
                      }
                      


                     
                     
                     
              </div>
              <button onClick={logOutUser} className="btn btn-primary font-bold ml-4 text-white">Logout</button>
              
              
              
              </div>

          
             :
            <div className='flex'>
            <Link to="/login">
                    <button className="btn btn-primary font-bold ml-4 text-white">Login</button>
            </Link>
            
            
            </div>
    }
    </li>
      
        </ul>
      </div>
    
      
    
    
    </nav>
    </div>

  );
};

export default Header;





