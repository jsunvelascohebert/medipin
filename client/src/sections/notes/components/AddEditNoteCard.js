import React, { useState } from 'react';
import { addNote } from '../../../fetches/internal/NotesFetches';

export default function AddEditNoteCard({ id = 0, placeholder = '', isUpdated }) {

  const [noteText, setNoteText] = useState(placeholder);
  const [isShown, setIsShown] = useState('flex');
  const dateTime = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      noteId: id,
      text: noteText,
      datetimeMade: dateTime.toISOString()
    }
    addNote(note)
      .then(() => {
        isUpdated(true);
        setIsShown('hidden');
      }).catch(errs => {
        console.log(errs);
      })
  }

  return (
    <div className={`${isShown} flex-col w-full justify-center items-center bg-lightPurple p-4 gap-2 rounded-xl border-2 border-darkPurple shadow-sm shadow-darkPurple`} >

      {/* input field */}
      <form id='note-form' onSubmit={handleSubmit} className='w-full'>
        <input type="text" id="note-input" className=" w-full text-input border-darkPurple ring-purple"
          value={noteText} 
          onChange={(e) => setNoteText(e.target.value)} />
      </form>
      
      {/* submit footer */}
      <div className="flex flex-row w-full justify-between items-center">
        {/* date time */}
        <p className="font-light text-xs">
          {dateTime.toLocaleString()}
        </p>
        {/* submit button */}
        <button type="submit" htmlFor='note-form' className='btn-purple' onClick={handleSubmit}>add</button>
      </div>
    </div>
  );
}