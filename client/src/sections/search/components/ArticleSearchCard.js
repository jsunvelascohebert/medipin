import React from 'react';

export default function ArticleSearchCard({ article }) {

  
  
  return (
    <div key={article.Id} id={article.Id} className="flex flex-col gap-4 p-4 rounded-lg bg-green border-2 border-darkGreen shadow-md shadow-darkGreen">
      <img src={article.ImageUrl} alt={article.ImageAlt} className="rounded-lg border-2 border-darkGreen" />
      <h3 className='text-darkGreen text-lg sm:text-xl md:text-2xl'>{article.Title}</h3>
    </div>
  );

}