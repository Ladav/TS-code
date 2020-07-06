import React, { useState, useEffect } from "react";

import profile from "./profile.jpg";

const Avatar: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(true);

  const profileToggle = () => {
    setProfileOpen((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): any => {
      if (e.key === "Esc" || e.key === "Escape") {
        console.log("btn clicked");
        setProfileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative">
      <div className="hidden sm:block">
        <button onClick={profileToggle} className="block w-8 h-8 overflow-hidden rounded-full focus:outline-none">
          <img className="relative z-10 object-cover w-full h-full" src={profile} alt="avatar" />
        </button>
        <button onClick={profileToggle} tabIndex={-1000} className={`${
          profileOpen ? "block" : "hidden"
          } fixed inset-0 w-full h-full bg-black opacity-25 cursor-default`}
        ></button>
        <div
          className={`${
            profileOpen ? "block" : "hidden"
            } absolute right-0 w-48 py-2 mt-3 text-gray-800 bg-gray-100 rounded-lg`}
        >
          <a className="block px-4 py-2 hover:bg-indigo-500 hover:text-gray-100" href="/" >
            Account settings
          </a>
          <a className="block px-4 py-2 hover:bg-indigo-500 hover:text-gray-100" href="/" >
            Support
          </a>
          <a className="block px-4 py-2 hover:bg-indigo-500 hover:text-gray-100" href="/" >
            Sign out
          </a>
        </div>
      </div>


      <div className="px-4 pt-4 text-gray-100 border-t border-gray-800 mb- mobile sm:hidden">
        <div className="flex items-center">
          <div onClick={profileToggle} className="w-8 h-8 mb-3">
            <img className="object-cover w-full h-full overflow-hidden rounded-full" src={profile} alt="avatar" />
          </div>
          <span className="ml-3 font-semibold">Ada Lovelace</span>
        </div>
        <div className="py-3 text-sm" >
          <a className="block hover:text-gray-400" href="/" >
            Account settings
          </a>
          <a className="block mt-2 hover:text-gray-400" href="/" >
            Support
          </a>
          <a className="block mt-2 hover:text-gray-400" href="/" >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
