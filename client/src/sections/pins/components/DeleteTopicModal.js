import React, { useState } from 'react';
import Modal from '../../utility/Modal';
import { FaArrowLeft } from 'react-icons/fa6';
import { deleteTopic } from '../../../fetches/internal/TopicFetches';

export default function DeleteTopicModal({ isOpen, setOpen, topic }) {

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  /* ***** ***** modal handlers ***** ***** */

  const closeModal = (val) => {
    setIsModalOpen(val);
    setOpen(val);
  }

  /* ***** ***** * ***** ***** */
  /* ***** ***** * ***** ***** */
  /* ***** ***** * ***** ***** */
  /* ***** ***** delete handlers ***** ***** */

  const handleDelete = () => {
    deleteTopic(topic.topicId)
      .then(() => {
        console.log('success!');
      }).catch(errs => {
        console.log(errs);
      });
  }

  /* ***** ***** footer components ***** ***** */

  const footer = 
    <div className="w-full flex flex-row justify-between items-center">
      {/* back statement */}
      <a href="#" className="flex flex-row justify-start gap-2 
      items-center group text-darkOrange"
        onClick={() => closeModal(false)}>
        <FaArrowLeft className='text-sm md:text-lg group-hover:text-xl' />
        cancel
      </a>
      {/* confirm button */}
      <button className="btn-orange" onClick={handleDelete}>
        confirm
      </button>
    </div>

  /* ***** ***** return ***** ***** */

  return (
    <Modal color='orange' isOpen={isModalOpen}
      setOpen={closeModal}
      size='sm'
      header='delete topic'
      footer={footer}>
      
      {/* content */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className='text-center underline'>
          are you sure you want to delete this topic?
        </p>
        <p className='bg-orange border-2 border-darkOrange rounded-full px-3 py-1 text-center'>
          {topic.name}
        </p>
        <p className='font-light text-center opacity-50'>
        deleting a topic will permanently remove all articles and notes attached to it
        </p>
      </div>
    </Modal>
  );
}