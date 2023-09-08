import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

export default function Modal({ color, isOpen, setOpen, header, footer, children }) {

  /* ***** ***** color scheme handlers ***** ***** */

  let colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1);
  let darkColor = 'dark' + colorCapitalized;

  /* ***** ***** modal state handlers ***** ***** */

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const toggleModalState = () => {
    setIsModalOpen(!isModalOpen);
    setOpen(!isOpen);
  }

  useEffect(() => {
    setIsModalOpen(isOpen);    
  }, [isOpen]);

  /* ***** ***** return statement ***** ***** */

  return (
    <>{isModalOpen ? (
      // outer container
      <div tabIndex={-1} aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-x-hidden overflow-y-hidden bg-${color} bg-opacity-75 hover:cursor-pointer`} onClick={toggleModalState}>

        {/* inner container */}
        <div className={`flex flex-col max-h-[90vh] w-4/5 justify-start items-center bg-${color} border-2 border-${darkColor} shadow-md shadow-${darkColor} rounded-xl cursor-auto`} onClick={(event) => event.stopPropagation()}>

          {/* modal header */}
          <div className={`relative w-full flex flex-row justify-between items-center border-b-2 p-4 border-${darkColor} text-${darkColor}`}>
            <h3>{header}</h3>
            <CgClose
              id="closeIcon"
              className={`hover:cursor-pointer text-xl md:text-2xl`}
              onClick={toggleModalState}
            />
          </div>

          {/* modal body */}
          <div className={`w-full p-4 sm:p-8 bg-white overflow-y-auto`}>
            {children}
          </div>

          {/* modal footer container */}
          <div className={`w-full border-t-2 p-4 border-${darkColor}`}>
            {footer}
          </div>

        </div>
      </div>
    ) : null}</>
  );
}