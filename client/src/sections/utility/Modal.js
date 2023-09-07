import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaArrowLeft } from 'react-icons/fa6';



export default function Modal({ color, isOpen, setOpen, header, footerBtn, children }) {

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
        <div className={`flex flex-col max-h-[90vh] md:max-h-[75vh] w-4/5 justify-start items-center bg-${color} border-2 border-${darkColor} shadow-md shadow-${darkColor} rounded-xl cursor-auto`} onClick={(event) => event.stopPropagation()}>

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

          {/* modal footer */}
          <div className={`w-full flex flex-col sm:flex-row justify-between items-center border-t-2 p-4 border-${darkColor} gap-2 sm:gap-0`}>
            {/* go back */}
            <a className={`group hidden sm:flex flex-row justify-start items-center gap-2 hover:cursor-pointer text-${darkColor}`} onClick={toggleModalState}>
              <FaArrowLeft className='text-lg group-hover:text-xl' />
              back
            </a>
            {/* confirm button */}
            {footerBtn}
          </div>
        </div>
      </div>
    ) : null}</>
  );
}