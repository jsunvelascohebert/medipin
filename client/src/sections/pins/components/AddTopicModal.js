import React, { useState } from 'react';
import Modal from '../../utility/Modal';

export default function AddTopicModal({ isOpen, setOpen }) {

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleAddClick = (val) => {
    setIsModalOpen(val);
    setOpen(val);
  }

  /* ***** ***** add form functionality ***** ***** */


  /* ***** ***** return ***** ***** */

  return (
    <Modal color='orange' isOpen={isModalOpen}
      setOpen={handleAddClick}
      header='add topic'
      footer={<p>TESTING</p>}>
      
      <form id="add-topic-form" className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <label for="add-topic-input" className='text-sm font-bold opacity-50'>add topic:</label>
        <input id="add-topic-input" type="text" className="w-4/5 text-input border-darkOrange text-darkOrange ring-orange" />
      </form>
    </Modal>
  );
}