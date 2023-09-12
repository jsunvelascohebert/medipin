import React, { useContext, useState } from 'react';
import Modal from '../../utility/Modal';
import { BannerContext } from '../../../contexts/BannerContext';

export default function About() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  const { showBanner } = useContext(BannerContext);

  const modalBtn =
    <button className="btn-green"
      onClick={() => console.log('test press')}>
      test modal
    </button>;
  
  const openBanner = () => {
    setIsBannerOpen(true);
    showBanner({
      color: 'orange',
      message: 'testing banner',
      status: '420'
    });
  }

  return (<>
    <div>
      <h3>modal test</h3>
      <button onClick={() => setIsModalOpen(true)}>open modal</button>
      <Modal color="green" isOpen={isModalOpen}
        setOpen={(value) => setIsModalOpen(value)}
        header='testing' footerBtn={modalBtn}>
        <p>testing children in body</p>
      </Modal>
    </div>

    {/* banner tests */}
    <div>
      <h3>banner test</h3>
      <button onClick={openBanner}>open banner</button>
    </div>
  </>);
}