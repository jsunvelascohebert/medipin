import React, { useState } from 'react';

export default function AddEditNoteCard({ id = 0, placeholder }) {

  const [noteText, setNoteText] = useState('');
  const dateTime = new Date();

  return (
    <div className="flex flex-col w-full justify-center items-center bg-lightPurple p-4 gap-2 rounded-xl border-2 border-darkPurple shadow-sm shadow-darkPurple">
      {/* input field */}
      <input type="text" id="note-input" className="text-input border-darkPurple ring-purple" placeholder={placeholder}
        onChange={(e) => setNoteText(e.target.value)} />

      {/* submit footer */}
      <div className="flex flex-row w-full justify-between items-center">
        {/* date time */}
        <p className="font-light text-xs">
          {dateTime.toLocaleString()}
        </p>

        {/* submit button */}
        <button type="submit" className='btn-purple'>add</button>
      </div>
    </div>
  );
}