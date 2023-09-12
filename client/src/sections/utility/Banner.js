import React, { useContext } from 'react';
import { BannerContext } from '../../contexts/BannerContext';

export default function Banner() {

  const { content, visible, hideBanner } = useContext(BannerContext);

  return (<>
    <div className={`fixed ${visible ? 'top-0' : '-top-10'} left-0 right-0 z-50 flex flex-row justify-center items-center gap-2 bg-blue transition-all duration-300`} >
      <h4>{content.status}</h4>
      <p>{content.message}</p>
      <button onClick={hideBanner}>close</button>
    </div>
  </>);

}