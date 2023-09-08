import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


export default function TopicCard({ topic }) {

  return (
    <div id={topic.topicId} className="card w-full bg-orange border-darkOrange shadow-darkOrange hover:shadow-darkOrange">

      {/* bottom content container */}
      <div className='w-full flex flex-row justify-between items-center'>
        <h5 className='text-left text-darkOrange text-base md:text-lg'>{topic.name}</h5>
        {/* edit/delete container */}
        <div className="flex flex-row justify-center items-center gap-1">
          <button className='btn-orange'>
            <AiOutlineEdit className='text-darkOrange sm:text-lg'/>
          </button>
          <button className='btn-orange'>
            <AiOutlineDelete className='text-darkOrange sm:text-lg' />
          </button>
        </div>
      </div>
      
      
    </div>
  );
}