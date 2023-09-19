import React, { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { BiExpandVertical, BiCollapseVertical } from 'react-icons/bi';
import NotesCard from './NotesCard';
import AddEditNoteCard from './AddEditNoteCard';
import { getAllNotes } from '../../../fetches/internal/NotesFetches';

export default function NotesContainer() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes()
      .then(data => {
        console.log(data);
      }).catch(errs => {
        console.log(errs);
      })
  }, []);

  /* ***** ***** return ***** ***** */

  return (<>
    {/* mobile */}
    <div className="sticky top-10 flex w-full md:hidden flex-col gap-2 shadow-md bg-purple border-2 border-darkPurple shadow-darkPurple rounded-xl p-3 max-h-[50vh]">

      {/* header and add container */}
      <div className="relative flex flex-row justify-between items-center hover:cursor-pointer px-1"
        onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {/* notes and add */}
        <div className='flex flex-row gap-3 justify-start items-center'>
          <h4 className="text-darkPurple">notes</h4>
          {/* add button */}
          {isMobileOpen &&
            <button className='btn-purple rounded-full p-1'
              onClick={(e) => {
                e.stopPropagation()
                setIsAddNoteOpen(!isAddNoteOpen)
              }}>
              <IoMdAdd className='scale-150 text-darkPurple'/>
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
        <div className="flex flex-col gap-2 justify-start items-start overflow-y-scroll scrollbar-none p-1">
          {isAddNoteOpen && <AddEditNoteCard /> }
          {notes && notes.map(n => <NotesCard note={n} />)}
        </div>
      }
    </div>

    {/* desktop */}
    <div className="hidden sticky top-10 md:w-1/3 md:flex flex-col gap-4 bg-purple border-2 border-darkPurple shadow-md shadow-darkPurple rounded-2xl p-4">
      {/* header and add container */}
      <div className="flex justify-between items-center p-1">
        <h4 className='text-darkPurple'>notes</h4>
        <button className='btn-purple rounded-full p-2' onClick={() => setIsAddNoteOpen(!isAddNoteOpen)}>
          <IoMdAdd className='scale-150'/>
        </button>
      </div>
      {/* notes container */}
      <div className="flex flex-col gap-2 justify-start items-start overflow-scroll max-h-[50vh] scrollbar-none p-1">
        {isAddNoteOpen && <AddEditNoteCard /> }
        {notes && notes.map(n => <NotesCard note={n} />)}
      </div>
    </div>  
  </>);
}