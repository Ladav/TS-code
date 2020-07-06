import React, { useState } from "react";

import Avatar from '../Avatar/Avatar';
import logo from "./logo.svg";

const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const navToggle = () => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className="items-center bg-gray-900 sm:flex sm:justify-between sm:px-6 sm:py-4">
      <div className="flex items-center justify-between px-6 py-4 sm:p-0">
        <div className="h-8">
          <img className="h-8" src={logo} alt="logo" />
        </div>
        <div className="sm:hidden" onClick={navToggle}>
            {
                menuOpen ? <svg className="block w-6 h-6 text-white cursor-pointer fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806"><path d="M228.929 205.01L404.596 29.343c6.78-6.548 6.968-17.352.42-24.132-6.548-6.78-17.352-6.968-24.132-.42-.142.137-.282.277-.42.42L204.796 180.878 29.129 5.21c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713L180.664 205.01 4.997 380.677c-6.663 6.664-6.663 17.468 0 24.132 6.664 6.662 17.468 6.662 24.132 0l175.667-175.667 175.667 175.667c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L228.929 205.01z"/></svg>
                : <svg className="block w-6 h-6 text-white cursor-pointer fill-current" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
            }
        </div>
      </div>
      <div className="">
        <div className={`${menuOpen ? 'block' : 'hidden'} px-4 pb-4 font-semibold text-gray-100 sm:flex`}>
          <a className="block px-2 py-1 rounded hover:bg-gray-800" href="/">
            galary </a>
          <a className="block px-2 py-1 mt-1 rounded hover:bg-gray-800 sm:mt-0 md:ml-0" href="/">
            nothing here </a>
          <a className="block px-2 py-1 mt-1 rounded hover:bg-gray-800 sm:mt-0 md:ml-0" href="/">
            you didn't saw anything </a>
        </div>
          <div className={`${menuOpen ? 'block' : 'hidden'} ml-2 md:ml-6`}>
            <Avatar /> </div>
      </div>
    </header>
  );
};

export default NavigationBar;
