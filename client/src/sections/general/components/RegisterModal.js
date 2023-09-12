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
        htmlFor="register-form" type="submit"
        className={`btn-${color}`}
        onClick={handleSubmit}>
        sign up
      </button>
    </div>;

  /* ***** ***** return ***** ***** */

  return (
<Modal color={color} isOpen={isOpen}
      setOpen={toggleModal}
      size='md'
      header='sign up'
      footer={footer}>
      {/* register form */}
      <form id="register-form" className="flex flex-col justify-center items-center gap-4">
        {/* username input */}
        <div className="w-4/5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
          <label htmlFor="register-username" className='text-sm font-bold opacity-50'>username:</label>
          <input type="text" id="register-username" className={`w-full text-input ring-${color}`}
            placeholder='enter username'
            onChange={(evt) => setUsername(evt.target.value)} />
        </div>
        {/* password input */}
        <div className="w-4/5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
          <label htmlFor="register-password" className='text-sm font-bold opacity-50'>password:</label>
          <input type="password" id="register-password" className={`w-full text-input ring-${color}`}
            placeholder='enter password'
            onChange={(evt) => setPassword(evt.target.value)} />
        </div>
      </form>
    </Modal>
  );


}