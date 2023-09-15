import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiUnpinLine } from 'react-icons/ri';


export default function () {

  const { topicId, topicName, articleId } = useParams();
  const [article, setArticle] = useState({});
  const [notes, setNotes] = useState([]);

  /* ***** ***** set up handlers ***** ***** */

  useEffect(() => {
    // pull in article info with loading screen
      // ^^^ done similarly to the search feature

    // once article pulled, get all notes from user

    
  }, []);
  
  /* ***** ***** return ***** ***** */

  return (<>
    <section id="notes" className="w-full min-h-screen p-6 sm:p-12 bg-gradient-to-b from-lightPurple to-white">
      {/* general container */}
      <div className="w-full flex flex-col gap-8 mx-auto justify-center items-center">

        {/* banner container */}
        <div className="w-full flex flex-col gap-6 mx-auto justify-center items-center">
          {/* info bar */}
          <div className="w-full flex flex-row justify-between items-center">
            {/* back link */}
            <Link to={`/topics/${topicId}/${topicName}`}
              className='flex flex-row gap-2 justify-start items-center text-darkPurple group'>
              <FaArrowLeft className='text-sm md:text-lg group-hover:text-xl'/>
              back
            </Link>

            {/* topic badge */}
            <div className='bg-purple px-3 py-1 text-darkPurple border-2 border-darkPurple rounded-full'>{topicName}</div>

            {/* unpin button */}
            <button className='btn-purple p-3'>
              <RiUnpinLine className='scale-150 font-extrabold text-darkPurple' />
            </button>

          </div>
          
          {/* header */}
          <h1 className='text-darkPurple'>{articleId}</h1>
        </div>

        {/* main content container */}

            {/* notes container */}
        
            {/* articles container */}
      
      </div>
    </section>
  </>);
}