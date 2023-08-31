import React from 'react';
import FeaturesCard from '../components/FeaturesCard';

export default function Home() {
  return (
    <section id="home">
      {/* banner */}
      <div id="banner" className="flex flex-col w-full mx-auto py-24 md:py-32 justify-center items-center gap-5">
        <h1 className='text-center uppercase text-darkBlue'>
          medipin
        </h1>
        <div className="font-nunito text-base mx-4 text-center md:text-xl font-light text-darkBlue">
          a way to search, pin, and annotate your medical knowledge
        </div>
      </div>
      
      {/* hero image */}
      <img id="hero-image" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="temporary unsplash home image" className="object-cover w-3/4 h-80 rounded-lg mx-auto border-2 border-darkBlue shadow-md" />

      {/* mission statement */}
      <div id="mission" className='flex flex-col mx-auto pt-24 gap-14 max-w-2xl'>
        <h2 className="text-darkBlue text-center">mission</h2>
        <p className='text-center'><span className='font-bold text-darkBlue'>medipin</span> was created to bridge the gap between medical information and awareness. by allowing users to search, save, and supplement medical knowledge through a pin-and-note structure, medipin offers a platform for broadening our medical knowledge.</p>
      </div>

      {/* features */}
      <div id="features" className="mx-auto pt-24">
        {/* header */}
        <h2 className="text-darkBlue text-center">features</h2>
        {/* card container */}
        <div className="flex flex-col mx-auto gap-14 justify-center items-center md:flex-row">
          {/* search card */}
            <FeaturesCard />
          {/* pin card */}

          {/* notes card */}


        </div>
      </div>
      

    </section>
    
  );
}