import React, { useState } from 'react';

export default function PinnedArticles({ topic }) {

  const [articles, setArticles] = useState([]);

  return (
    <section id="pins" className='w-full min-h-screen p-6 sm:p-12 md:p-24 bg-gradient-to-b from-lightOrange to-white'>
      <h1>TEST</h1>
    </section>
  );
}