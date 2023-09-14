import React from 'react';
import { RiUnpinLine } from 'react-icons/ri';

export default function PinnedArticleCard({ article }) {
  return (<>
    <div id={article.articleId} className="relative card bg-orange border-darkOrange shadow-darkOrange hover:shadow-darkOrange">
      {/* delete button */}
      <button className="absolute top-2 right-2 btn-orange p-3">
        <RiUnpinLine className='scale-150 font-extrabold text-darkOrange'/>
      </button>
      {/* article content */}
      <img src={article.imageUrl} alt={article.imageAlt} className="rounded-lg border-2 border-darkOrange h-full object-cover" />
      <h3 className='text-darkOrange text-lg sm:text-xl md:text-2xl'>
        {article.title}
      </h3>
    </div>
  </>);
}