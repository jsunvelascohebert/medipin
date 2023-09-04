import React, { useState } from 'react';
import Modal from '../../utility/Modal';

export default function About() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>TESTS</h1>
      <button onClick={() => setIsModalOpen(true)}>open modal</button>
      <Modal isOpen={isModalOpen} setOpen={(value) => setIsModalOpen(value)} />
    </div>
  );
}