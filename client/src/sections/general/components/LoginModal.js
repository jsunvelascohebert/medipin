import React, { useEffect, useState } from 'react';
import Modal from '../../utility/Modal';

export default function LoginModal({ isOpen, setOpen, color }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ringColor, setRingColor] = useState(`ring-${color}`);

  const toggleModal = () => {
    setOpen(!isOpen);
    setUsername('');
    setPassword('');
  }

  useEffect(() => {
    setRingColor(`ring-${color}`);
  }, [color]);

  /* ***** ***** submit handler ***** ***** */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`username: ${username} ... password: ${password}`);
  }

  /* ***** ***** footer ***** ***** */

  const footer =
    <div className="w-full flex justify-center items-center">
      {/* submit button */}
      <button
        htmlFor="login-form" type="submit"
        className={`btn-${color}`}
        onClick={handleSubmit}>
        login
      </button>
    </div>;

  /* ***** ***** return ***** ***** */

  return (
    <Modal color={color} isOpen={isOpen}
      setOpen={toggleModal}
      size='md'
      header='login'
      footer={footer}>
      {/* login form */}
      <form id="login-form" className="flex flex-col justify-center items-center gap-4">
        {/* username input */}
        <div className="w-4/5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
          <label htmlFor="login-username" className='text-sm font-bold opacity-50'>username:</label>
          <input type="text" id="login-username" className={`w-full text-input ${ringColor}`}
            placeholder='enter username'
            onChange={(evt) => setUsername(evt.target.value)} />
        </div>
        {/* password input */}
        <div className="w-4/5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
          <label htmlFor="login-password" className='text-sm font-bold opacity-50'>password:</label>
          <input type="password" id="login-password" className={`w-full text-input ${ringColor}`}
            placeholder='enter password'
            onChange={(evt) => setPassword(evt.target.value)} />
        </div>
      </form>
    </Modal>
  );
}