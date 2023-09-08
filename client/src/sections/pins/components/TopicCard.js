import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteTopic } from '../../../fetches/internal/TopicFetches';


export default function TopicCard({ topic }) {

  /* ***** ***** update handlers ***** ***** */

  /* ***** ***** delete handlers ***** ***** */

  const handleDelete = () => {
    deleteTopic(topic.topicId)
      .then(() => {
        console.log('success!');
      }).catch(errs => {
        console.log(errs);
      });
  }

  /* ***** ***** return ***** ***** */

  return (
    <div id={topic.topicId} className="card w-full bg-orange border-darkOrange shadow-darkOrange hover:shadow-darkOrange">
      {/* top content container */}
      <div className='w-full flex flex-row justify-between items-center'>
        <h5 className='text-left text-darkOrange text-base md:text-lg break-all mr-4'>{topic.name}</h5>
        {/* edit/delete container */}
        <div className="flex flex-row justify-center items-center gap-1">
          <button className='btn-orange'>
            <AiOutlineEdit className='text-darkOrange sm:text-lg'/>
          </button>
          <button className='btn-orange' onClick={handleDelete}>
            <AiOutlineDelete className='text-darkOrange sm:text-lg' />
          </button>
        </div>
      </div>
      {/* TODO: bottom image gallery */}
    </div>
  );
}