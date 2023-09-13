import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleTopics } from '../../../fetches/internal/TopicArticleFetches';
import { getArticleById } from '../../../fetches/internal/ArticleFetches';

export default function PinnedArticles() {

  const [articles, setArticles] = useState([]);
  const { topicId, name } = useParams();

  /* ***** ***** pull articles from id ***** ***** */

  useEffect(() => {
    setArticles([]);
    getArticleTopics(topicId)
      .then(data => {
        for (let d of data) {
          getArticleById(d.articleId)
            .then(data => {
              setArticles(prev => [...prev, data]);
            }).catch(errs => {
              console.log(errs);
            })
        }
      }).catch(errs => {
        console.log(errs);
      })
  }, []);

  /* **** ***** return ***** ***** */

  return (
    <section id="pins" className='w-full min-h-screen p-6 sm:p-12 md:p-24 bg-gradient-to-b from-lightOrange to-white'>
      <h1>TEST</h1>
      {articles.map(a => <p>{a.title}</p>)}
    </section>
  );
}