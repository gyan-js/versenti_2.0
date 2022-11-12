import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import ThemeSwitch from './ThemeSwitch';

import { AiOutlineCompass } from 'react-icons/ai';
import { GlobeIcon } from '@primer/octicons-react';
import {FaAutoprefixer} from 'react-icons/fa'
import Searchbar from './Searchbar';

import '../index.css'

const links = [
  { name: 'Discover', to: '/', icon: AiOutlineCompass },
  { name: 'Around You', to: '/around-you', icon: GlobeIcon },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: FaAutoprefixer },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex items-center px-4 py-2 mt-5 rounded-md text-white hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

function Sidebar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }, [])
  

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <>
      <div  className=" flex  md:flex  flex-col bg-gradient-to-br bg-transparent  bg-[#343434] dark:bg-[#000] w-64 px-4 py-8 border-r min-h-screen relative hidden">
        <Searchbar />
        <NavLinks />
        <ThemeSwitch class="absolute mt-96 left-11" onChange={themeSwitch} />
      </div>

      {/* Mobile sidebar */}
      <div className="sidebar absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-br bg-[#191624] backdrop-blur z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <ThemeSwitch onChange={themeSwitch} />
      </div>
    </>
  );
}

export default Sidebar;


// a component with text props in react 

