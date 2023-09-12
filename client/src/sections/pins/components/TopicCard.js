import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import DeleteTopicModal from './DeleteTopicModal';



export default function TopicCard({ topic }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ***** ***** update handlers ***** ***** */


  /* ***** ***** delete handlers ***** ***** */

  /* ***** ***** return ***** ***** */

  return (<>
    {/* main container */}
    <div id={topic.topicId} className="card w-full bg-orange border-darkOrange shadow-darkOrange hover:shadow-darkOrange">
      {/* top content container */}
      <div className='w-full flex flex-row justify-between items-center'>
        <h5 className='text-left text-darkOrange text-base md:text-lg break-all mr-4'>{topic.name}</h5>
        {/* edit/delete container */}
        <div className="flex flex-row justify-center items-center gap-1">
          <button className='btn-orange'>
            <AiOutlineEdit className='text-darkOrange sm:text-lg'/>
          </button>
          <button className='btn-orange'
            onClick={() => setIsModalOpen(true)}>
            <AiOutlineDelete className='text-darkOrange sm:text-lg' />
          </button>
        </div>
      </div>
      {/* TODO: bottom image gallery */}
    </div>

    {/* delete confirmation modal */}
    { isModalOpen &&
      <DeleteTopicModal isOpen={isModalOpen}
        setOpen={(val) => setIsModalOpen(val)}
        topic={topic} />
    }
  </>);
}