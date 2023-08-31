import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function HeaderNav() {

  return (
    <section id="header" className='sticky top-0 z-10'>
      {/* desktop menu */}
      <div className="hidden sm:flex flex-row w-100 p-4 px-6 justify-between items-center gap-4 bg-blue border-2 border-darkBlue">
        {/* TODO -- logo */}
        <div>
          <h3 className="text-xl font-darkBlue">medipin</h3>
        </div>
        {/* menu items */}
        <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
          <a href="#" className="menu-item">about</a>
          <a href="#" className="menu-item">search</a>
          <a href="#" className="menu-item">pins</a>
        </div>
        {/* authentication */}
        <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
          <a href="#" className="menu-item">login</a>
          <button className="btn-blue">sign up</button>
        </div>
      </div>

      {/* mobile menu collapsed */}
      <div className="flex sm:hidden flex-row w-100 p-2 justify-between items-center bg-blue border-2 border-darkBlue">
        {/* TODO -- logo */}
        <h3 className="text-lg font-darkBlue">medipin</h3>
        {/* hamburger */}
        <FaBars id="hamburgerIcon" className="text-xl hover:cursor-pointer" />     
      </div>

      {/* todo -- mobile menu expanded */}
    </section>
  );

}