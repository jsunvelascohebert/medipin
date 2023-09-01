import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className='z-10'>
      <div className="flex flex-col md:flex-row justify-between items-center p-12 bg-blue border-2 border-darkBlue gap-8">
        <h3 className="font-darkBlue">medipin</h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <a href="#" className="menu-item">about</a>
          <a href="#" className="menu-item">search</a>
          <a href="#" className="menu-item">pins</a>
          <a href="#" className="menu-item">documentation</a>
        </div>
      </div>
    </section>
  );
}