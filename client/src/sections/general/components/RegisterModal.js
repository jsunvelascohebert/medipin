import React, { useContext, useState } from 'react';
import Modal from '../../utility/Modal';
import AuthContext from '../../../contexts/AuthContext';
import { authenticate, createAccount } from '../../../fetches/internal/AuthFetches';

export default function RegisterModal({ isOpen, setOpen, color }) {

  const [creds, setCredentials] = useState({
    username: '',
    password: ''
  });

  const auth = useContext(AuthContext);

  const toggleModal = () => {
    setOpen(!isOpen);
    setCredentials({ username: '', password: '' });
  }

  /* ***** ***** submit handler ***** ***** */

  const handleSubmit = (evt) => {
    evt.preventDefault();

    createAccount(creds)
      .then(() => {
        authenticate(creds)
          .then(data => {
            auth.onAuthenticated(data);
            toggleModal();
          }).catch(errs => {
            console.log(errs);
          });
      }).catch(errs => {
        console.log(errs);
      });
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
          <input type="text" id="register-username"
            className={`w-full text-input ring-${color}`}
            name='username' placeholder='enter username'
            onChange={(event) => creds.username = event.target.value} />
        </div>
        {/* password input */}
        <div className="w-4/5 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
          <label htmlFor="register-password" className='text-sm font-bold opacity-50'>password:</label>
          <input type="password" id="register-password"
            className={`w-full text-input ring-${color}`}
            placeholder='enter password' name='password'
            onChange={(event) => creds.password = event.target.value} />
        </div>
      </form>
    </Modal>
  );

}