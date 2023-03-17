import React from "react";
import { ConnectWallet } from '@thirdweb-dev/react';
import { useStateContext } from "../context/stateContext";

const navlinks = [
  { name: "Home", href: "#" },
  { name: "Profile", href: "#" },
  { name: "Campaigns", href: "#" },
];

function Navbar() {

  const {connect,address} = useStateContext()
  return (
    
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:space-x-96">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navlinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
             
            </div>
            <div className="">
            < ConnectWallet />
           
            </div>
           
          </div>
         
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {
          link.name}
          </a>
        ))}
      </div>
    </div>
   
  </nav>
);
}

export default Navbar;  