import React, { useState } from 'react';
import Modal from '../../utility/Modal';

import { getArticleContentById } from '../../../fetches/ExternalAPI';
import { parseRelated, parseRelatedAndSections, parseSection } from '../../utility/ArticleParser';
import { FaArrowLeft } from 'react-icons/fa6';

export default function ArticleSearchCard({ article }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState('');
  const [relatedArticles, setRelatedArticles] = useState('');

  const footer = 
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
      {/* back button */}
      <a href="#" className={`group hidden sm:flex flex-row justify-start items-center gap-2 hover:cursor-pointer text-darkGreen}`} onClick={() => setIsModalOpen(false)}>
        <FaArrowLeft className='text-lg group-hover:text-xl' />
        back
      </a>
      {/* pin to topic input */}
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
        className="card bg-green border-darkGreen shadow-darkGreen hover:shadow-darkGreen"
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
        footer={footer}>
        
        {/* modal content container */}
        <div className="flex flex-col gap-10 justify-start items-start text-darkGreen lg:flex-row-reverse">

          {/* article content */}
          <div className='flex flex-col gap-10 justify-start items-start lg:w-9/12'>
            <h2>{article.Title}</h2>
            {articleContent}
          </div>

          {/* related articles */}
          <div className='sticky top-0 flex flex-col gap-2 justify-start items-start lg:w-3/12 overflow-y-auto'>
            <h4>related articles</h4>
            <ul>{relatedArticles}</ul>
          </div>
        </div>
      </Modal>
    </>
  );

}