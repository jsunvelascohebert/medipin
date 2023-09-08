import React, { useEffect, useState } from 'react';
import { getTopics } from '../../../fetches/internal/TopicFetches';
import TopicCard from '../components/TopicCard';
import { GrAdd } from 'react-icons/gr';
import AddTopicModal from '../components/AddTopicModal';

export default function Topics() {

  const [topics, setTopics] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // pull topics and present
  useEffect(() => {
    getTopics()
      .then(data => {
        setTopics([...data]);
      }).catch(errs => {
        console.log(errs);
      });
  }, [topics]);

  return (
    <section id="topics" className="w-full min-h-screen p-6 sm:p-12 md:p-24 bg-gradient-to-b from-lightOrange to-white">
      {/* general container */}
      <div className="flex flex-col gap-10 mx-auto justify-center items-center">

        {/* banner container */}
        <div className="flex flex-col gap-8 mx-auto justify-center items-center">
          <h1 className='text-darkOrange'>topics</h1>
          <p className="text-center max-w-lg">
            below are your custom topics. these organize your articles and subsequent notes. you may add, edit, and delete topics; however, you will be prompted to confirm a delete as attached articles and notes will also be deleted
          </p>
        </div>

        {/* sort/add container */}
        <div className="w-full mx-auto flex flex-row gap-4 justify-between items-center">
          <div className='w-full group relative'>
            {/* sort select */}
            <select name="topic-sort" id="topic-sort" className='w-full p-1 px-2 rounded-full border-2 border-darkOrange text-darkOrange shadow-sm-inner disabled:opacity-25' disabled>
              <option value="" disabled defaultChecked>sort: TBA</option>
              <option value="alphabetical">alphabetical: a-z</option>
              <option value="recent">time: recent-early</option>
            </select> 

            {/* tooltip */}
            <span className="absolute -top-10 left-1/3 scale-0 transition-all rounded-lg bg-lightGray border p-2 text-xs opacity-50 group-hover:scale-100">
              feature unavailable currently
            </span>
          </div>

          {/* add button */}
          <button className='btn-orange rounded-full p-1'
            onClick={() => setIsAddModalOpen(true)}>
            <GrAdd className='text-orange text-xl'/>
          </button>
        </div>

        {/* topic results */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          { topics.map(t => <TopicCard key={t.topicId} topic={t} />) }
        </div>

        {/* add modal content */}
        {isAddModalOpen && 
          <AddTopicModal isOpen={true}
            setOpen={(val) => setIsAddModalOpen(val)} />
        }
      </div>
    </section>
  );
}