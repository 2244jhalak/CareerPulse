import './Root.css'
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from 'react';




const Root = () => {
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
    
    
    return (
        <div className={`font-roboto ${darkMode ? 'dark' : ''} dark:bg-black font-roboto dark:text-white`}>
            
            <div className="container mx-auto hidden">
                <button
                    onClick={() => {
                        setDarkMode(!darkMode)
                    }}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-stone-700 dark:bg-white dark:text-black"
                >
                    {!darkMode ? '🌚 Dark' : '🌞 Light'} Mode
                </button>
            
                
            </div>
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;