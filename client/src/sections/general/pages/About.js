import React, { useState } from 'react';
import Modal from '../../utility/Modal';

export default function About() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalBtn =
    <button className="btn-green"
      onClick={() => console.log('test press')}>
      testing button
    </button>;

  return (
    <div>
      <h1>TESTS</h1>
      <button onClick={() => setIsModalOpen(true)}>open modal</button>
      <Modal color="green" isOpen={isModalOpen}
        setOpen={(value) => setIsModalOpen(value)}
        header='testing' footerBtn={modalBtn}>
        <p>testing children in body</p>
      </Modal>
    </div>
  );
}