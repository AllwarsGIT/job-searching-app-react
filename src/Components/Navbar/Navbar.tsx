import {NavLink} from 'react-router-dom';
import logo from '../../assets/react.svg';
import styles from './Navbar.module.css';
import { SlMenu } from "react-icons/sl";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

type NavData = {
    isActive: boolean;
}

const Navbar = () => {

    const navClass = ({ isActive }:NavData) => isActive ? `${styles.navButton} ${styles.active}` : styles.navButton
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        
            <nav className="flex text-white items-center justify-between md:justify-around md:items-start bg-[#242424] p-4 border-b-1 border-[#5e5e5e]">
                
                <div className="flex items-center">
                    <img src={logo} alt="logo" width="30" height="30" className={`d-inline-block align-text-top me-2 ${styles.rotateSlow}`} />
                    <span className="text-2xl px-2 font-semibold">Job Page</span>
                </div>

                <div className="hidden md:flex md: space-x-4">
                    <NavLink to="/" className={navClass}>Home</NavLink>
                    <NavLink to="/jobs" className={navClass}>Jobs</NavLink>
                    {/* <NavLink to="/addjobs" className={navClass}>Add Jobs</NavLink> */}
                </div>

                <SlMenu 
                    size={24} 
                    className="navbarToggle md:hidden cursor-pointer transition-all ease-in-out hover:text-[#79e2fffb]"
                    onClick={() => setIsOpen(!isOpen)}
                    />

                {isOpen && (
                    <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setIsOpen(false)}
                    />
                )}

                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#1f1f1f] shadow-md z-20 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
                >
                    <div className="p-4 border-b border-[#444] flex items-center justify-end">
                        <RxCross1  size={24} onClick={() => setIsOpen(false)} className=" text-xl cursor-pointer transition-all ease-in-out hover:text-[#79e2fffb]"/>
                    </div>

                    <nav className="flex flex-col py-2">
                        <NavLink to="/" className={navClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/jobs" className={navClass} onClick={() => setIsOpen(false)}>Jobs</NavLink>
                    </nav>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
