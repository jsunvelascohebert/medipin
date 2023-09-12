import React, { useState } from 'react';
import Modal from '../../utility/Modal';

export default function LoginModal({ isOpen, setOpen, color }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => {
    setOpen(!isOpen);
    setUsername('');
    setPassword('');
  }

  /* ***** ***** return ***** ***** */

  return (
    <Modal color={color} isOpen={isOpen}
      setOpen={toggleModal}
      size='lg'
      header='sign up'
      footer={<div>temp footer</div>}>
      

      </Modal>
  );


}