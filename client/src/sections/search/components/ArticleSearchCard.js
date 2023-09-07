import React, { useState } from 'react';
import Modal from '../../utility/Modal';

import { getArticleContentById } from '../../../fetches/ExternalAPI';
import { parseRelated, parseRelatedAndSections, parseSection } from '../../utility/ArticleParser';

export default function ArticleSearchCard({ article }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState('');
  const [relatedArticles, setRelatedArticles] = useState('');

  // TODO -- change this and overall modal to accept a custom footer

  const modalBtn = 
    <div className="flex flex-col sm:flex-row gap-4 justify-end items-center w-full md:w-1/2">
      <p as="label" htmlFor="topic-select" className='w-full text-right hidden sm:inline-block'>select a topic:</p>
      <div className='flex flex-row gap-2 justify-center items-center w-full'>
        <select name="topic-select" id="topic-select"
          className='p-2 rounded-full border-2 border-darkGreen shadow-sm-inner w-full text-sm'>
          <option>personal</option>
        </select>
        <button className="btn-green">pin</button>
      </div>
    </div>
  
  const handleCardClick = () => {
    // pull and parse all the article content
    getArticleContentById(article.Id)
      .then(data => {
        const [related, sections] = parseRelatedAndSections(data);
        setArticleContent(sections.map(s => parseSection(s)));
        setRelatedArticles(related.map(r => parseRelated(r)));

        setIsModalOpen(true);
      }).catch(errs => {
        console.log(errs);
      });
  }
  
  /* ***** ***** return ***** ***** */
  
  return (
    <>
      {/* main card container */}
      <div id={article.Id}
        className="flex flex-col gap-4 p-4 rounded-lg bg-green border-2 border-darkGreen shadow-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg shadow-darkGreen hover:shadow-darkGreen hover:cursor-pointer active:translate-x-1 active:translate-y-1 active:shadow-none"
        onClick={handleCardClick}>
        
        <img src={article.ImageUrl} alt={article.ImageAlt} className="rounded-lg border-2 border-darkGreen h-full object-cover" />
        <h3 className='text-darkGreen text-lg sm:text-xl md:text-2xl'>
          {article.Title}
        </h3>
      </div>

      {/* article modal */}
      <Modal color='green' isOpen={isModalOpen}
        setOpen={(val) => setIsModalOpen(val)}
        header='pin article'
        footerBtn={modalBtn}>
        
        {/* modal content container */}
        <div className="flex flex-col gap-8 justify-start items-start text-darkGreen lg:flex-row-reverse">

          {/* article content */}
          <div className='flex flex-col gap-10 justify-start items-start lg:w-9/12'>
            <h2>{article.Title}</h2>
            {articleContent}
          </div>

          {/* related articles */}
          <div className='flex flex-col gap-2 justify-start items-start lg:w-3/12'>
            <h4>related articles</h4>
            <ul>{relatedArticles}</ul>
          </div>
        </div>
      </Modal>
    </>
  );

}