import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';


export default function Modal({ isOpen, setOpen }) {

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const toggleModalState = () => {
    setIsModalOpen(!isModalOpen);
    setOpen(false);
  }

  useEffect(() => {
    console.log(`isOpenInModal: ${isModalOpen}`);
    setIsModalOpen(isOpen);
    
  }, [isOpen]);

  return (
    <>{isModalOpen ? (
      // modal container
      <div id="modalContainer" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full h-full overflow-x-hidden overflow-y-hidden bg-lightBlue">
        {/* modal header */}
        <div className="relative w-full flex flex-row p-2 justify-between items-center border-b-2">
          <h3 className="">test!</h3>
          <CgClose
              id="closeIcon"
              className={`hover:cursor-pointer`}
              onClick={toggleModalState}
            />
        </div>

        {/* modal body */}

        {/* modal footer */}

        </div>
    ) : null}</>
  );

}