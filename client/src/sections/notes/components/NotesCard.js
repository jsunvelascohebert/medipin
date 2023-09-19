import React from 'react';

export default function NotesCard({ note }) {

  return (<>
    <div className="flex flex-col w-full bg-lightPurple p-4 gap-2 rounded-xl border-2 border-darkPurple shadow-sm shadow-darkPurple">
      {/* note body */}
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquid?</p>
      {/* note footer */}
      <div className="flex flex-row justify-between items-center">
        {/* date showcase */}
        <p className='font-light text-xs'>today @ now</p>
        {/* edit and delete */}

      </div>

    </div>
  </>);
}