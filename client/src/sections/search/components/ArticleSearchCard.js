import React, { useState } from 'react';
import Modal from '../../utility/Modal';

import { getArticleContentById } from '../../../fetches/ExternalAPI';
import { parseRelatedAndSections, parseSection } from '../../utility/ArticleParser';

export default function ArticleSearchCard({ article }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleContent, setArticleContent] = useState('');

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
        
        // open the populated modal
        setIsModalOpen(true);
      }).catch(errs => {
        console.log(errs);
      });
  }
  
  /* ***** ***** return ***** ***** */
  
  return (
    <>
      {/* main card container */}
      <div key={article.Id} id={article.Id}
        className="flex flex-col gap-4 p-4 rounded-lg bg-green border-2 border-darkGreen shadow-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg shadow-darkGreen hover:shadow-darkGreen hover:cursor-pointer"
        onClick={handleCardClick}>
        
        <img src={article.ImageUrl} alt={article.ImageAlt} className="rounded-lg border-2 border-darkGreen" />
        <h3 className='text-darkGreen text-lg sm:text-xl md:text-2xl'>
          {article.Title}
        </h3>
      </div>

      {/* article modal */}
      <Modal color='green' isOpen={isModalOpen}
        setOpen={(val) => setIsModalOpen(val)}
        header='pin article'
        footerBtn={modalBtn}>
        
        <div className="flex flex-col gap-2 justify-start items-start">
          {articleContent}
        </div>
        
        </Modal>
    </>
  );

}