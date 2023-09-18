import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { BiExpandVertical, BiCollapseVertical } from 'react-icons/bi';
import NotesCard from './NotesCard';

export default function NotesContainer() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* ***** ***** return ***** ***** */

  return (<>
    {/* mobile */}
    <div className="sticky top-10 flex w-full md:hidden flex-col gap-4 shadow-md bg-purple border-2 border-darkPurple shadow-darkPurple rounded-xl p-2">

      {/* header and add container */}
      <div className="flex flex-row justify-between items-center hover:cursor-pointer"
        onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {/* notes and add */}
        <div className='flex flex-row gap-1 justify-start items-center'>
          <h4 className="text-darkPurple scale-75">notes</h4>
          {/* add button */}
          {isMobileOpen &&
            <button className='btn-purple rounded-full p-1'>
              <IoMdAdd className='scale-150 text-darkPurple'
                onClick={(e) => e.stopPropagation()} />
            </button>
          }
        </div>
        
        {/* expand button */}
        {!isMobileOpen &&
          <BiExpandVertical
            className='text-center text-darkPurple text-lg' />
        }
        {/* collapse button */}
        {isMobileOpen &&
          <BiCollapseVertical
            className='text-center text-darkPurple text-lg' />
        }
      </div>

      {/* notes content (mobile expanded) */}
      {isMobileOpen &&
        <div className="flex flex-col gap-4 justify-center items-center">
          test
        </div>
      }
    </div>

    {/* desktop */}
    <div className="hidden sticky top-10 md:w-1/3 md:flex flex-col gap-4 bg-purple border-2 border-darkPurple shadow-md shadow-darkPurple rounded-2xl p-3">
      {/* header and add container */}
      <div className="flex justify-between items-center">
        <h4 className='text-darkPurple'>notes</h4>
        <button className='btn-purple rounded-full p-2'>
          <IoMdAdd className='scale-150'/>
        </button>
      </div>
      {/* notes container */}
      <NotesCard />
    </div>  
  </>);
}