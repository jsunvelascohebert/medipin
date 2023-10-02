import React, { useContext, useState } from 'react';
import Modal from '../../utility/Modal';
import { FaArrowLeft } from 'react-icons/fa6';
import { deleteTopicArticle } from '../../../fetches/internal/TopicArticleFetches';
import { BannerContext } from '../../../contexts/BannerContext';
import { useNavigate } from 'react-router-dom';

export default function UnpinModal({ isOpen, setOpen, color, topic, article }) {

  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const { showBanner } = useContext(BannerContext);
  const navigate = useNavigate();

  const showModal = (val) => {
    setIsModalOpen(val);
    setOpen(val);
  }

  /* ***** ***** unpin handlers ***** ***** */

  const handleUnpin = () => {
    const topicArticle = { topicId: topic.topicId, articleId: article.articleId };
    deleteTopicArticle(topicArticle)
      .then(() => {
        // open a modal
        navigate(`/topics/${topic.topicId}/${topic.topicName}`)
        window.location.reload(false);
        showBanner({
          message: 'successfully unpinned article',
          status: 'success'
        });
      }).catch(errs => {
        console.log(errs);
      })
  }

  /* ***** ***** footer ***** ***** */

  const footer = 
    <div className="flex flex-row w-full justify-between items-center">
      {/* cancel section */}
      <a href="#" className="flex flex-row justify-start items-center gap-2 group" onClick={() => showModal(false)}>
        <FaArrowLeft className='text-sm md:text-lg group-hover:text-xl' />
        cancel
      </a>
      {/* confirm button */}
      <button className="btn-purple" onClick={handleUnpin}>
        unpin
      </button>
    </div>

  /* ***** ***** return ***** ***** */

  return (<>
    <Modal color={color} isOpen={isModalOpen}
      setOpen={showModal}
      size='sm' header='unpin particle' footer={footer}>
      
      {/* modal content container */}
      <div className='flex flex-col gap-2 p-2 justify-center items-center'>
        <div className="flex flex-col">
          <p>unpinning an article will permanently remove the article from the topic as well as any notes affiliated with it</p>
          <p>are you sure you want to unpin the following?</p>
        </div>
        {article.articleName} + {topic.topicName}
      </div>

      </Modal>
  </>);

}