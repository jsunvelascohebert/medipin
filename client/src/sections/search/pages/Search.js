import React from 'react';

export default function Search() {
  return (
    <section id="search" className="w-full min-h-screen p-12 md:p-24 bg-gradient-to-b from-lightGreen to-white">
      {/* general container */}
      <div className="flex flex-col gap-12 max-auto justify-center items-center">

        {/* banner */}
        <div className="flex flex-col gap-4 mx-auto justify-center items-center">
          <h1 className='text-darkGreen'>search</h1>
          <p className='text-center max-w-lg'>search for a specific topic and check out the articles that come up. these resources are pulled from the US Department of Health and Human Services’ external API.</p>
        </div>

        {/* search bar */}
        <form id="search-form" className="flex flex-col sm:flex-row gap-4 w-full mx-auto justify-center items-center">
            <input id="search-input" type="text" className=" w-full h-100 px-3 py-1  rounded-full border-2 shadow-md-inner border-darkGreen text-darkGreen focus:ring-4 outline-none ring-green" placeholder='enter search query'/>
            <button className='btn-green'>search</button>
        </form>

        {/* results */}


      </div>
    </section>
  );
}