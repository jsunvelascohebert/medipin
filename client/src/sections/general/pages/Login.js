import React, { useState } from 'react';
import Modal from '../../utility/Modal';

export default function Login() {
  
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleModalVisibility = (val) => {
    setIsModalOpen(val);
  }

  /* ***** ***** footer components ***** ***** */

  const footer = <div>temp</div>;

  /* ***** ***** return ***** ***** */

  return (
    <div>temp</div>
  );
  
}