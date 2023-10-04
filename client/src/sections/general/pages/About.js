import React, { useState } from 'react';
import { PiArrowsOutDuotone, PiChatsCircleBold, PiArrowsInDuotone, PiPencilBold, PiPuzzlePieceBold, PiHammerBold, PiMonitorBold, PiTelegramLogoBold, PiArrowsClockwiseBold } from 'react-icons/pi';

export default function About() {

  const [isEmpathizeOpen, setIsEmpathizeOpen] = useState(true);
  const [isDefineOpen, setIsDefineOpen] = useState(false);
  const [isIdeateOpen, setIsIdeateOpen] = useState(false);

  /* ***** ***** accordian handler ***** ***** */
  const openAccordian = (name) => {
    setIsEmpathizeOpen(false);
    setIsDefineOpen(false);
    setIsIdeateOpen(false);
    switch (name) {
      case 'empathize':
        setIsEmpathizeOpen(true);
        break;
      case 'define':
        setIsDefineOpen(true);
        break;
      case 'ideate':
        setIsIdeateOpen(true);
        break;
      default:
        break;
    }
  }

  return (
    <section id="about" className='bg-gradient-to-b from-lightRed to-white w-full flex flex-col p-12 md:p-24 justify-center items-center gap-24'>
      {/* banner */}
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-center text-darkRed">about</h1>
        <p className='text-center md:max-w-[40vw]'>all medical information used in medipin is pulled from the US Department’s of Health and Human Services’ external API. otherwise, the entire front-end, back-end, and database was designed from scratch using Java, Spring, React, Router, Tailwind, and MySQL.</p>
      </div>

      {/* ideation and development */}
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className='text-center text-darkRed'>ideation & development</h2>
        <p className='text-center md:max-w-[40vw]'>this version of medipin was conceptualized, designed, and developed solely by Jsun Velasco-Hébert (more information about them below). following the design process, the making of medipin started from a conversation had between Jsun and their friends enrolled in medical school. that conversation ended up with the goal to: </p>
        <div className="text-center md:max-w-[50vw] p-10 rounded-xl bg-red border-2 border-darkRed shadow-md shadow-darkRed text-darkRed text-lg md:text-2xl font-bold">
          develop a web/mobile application that bridges the gap between medical information and awareness
        </div>
      </div>

      {/* process & documentation accordian */}
      <div className="w-full flex flex-col justify-center items-center gap-10">

        <h2 className='text-center text-darkRed'>
          process & documentation
        </h2>

        {/* desktop accordian icons */}
        <div className="hidden md:flex flex-row w-full justify-around items-center">
          {/* empathize icon */}
          <div className={`flex flex-col justify-center items-center gap-2 hover:cursor-pointer ${isEmpathizeOpen && 'border-2 border-darkRed rounded-lg p-2 bg-red'}`}
            onClick={() => openAccordian('empathize')}>
            {/* icon */}
            <PiChatsCircleBold className='text-darkRed text-2xl'/>
            {/* name */}
            <p className="font-bold text-darkRed">empathize</p>
          </div>

          {/* define icon */}
          <div className={`flex flex-col justify-center items-center gap-2 hover:cursor-pointer ${isDefineOpen && 'border-2 border-darkRed rounded-lg p-2 bg-red'}`}
            onClick={() => openAccordian('define')}>
            <PiPencilBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">define</p>
          </div>

          {/* ideate icon */}
          <div className={`flex flex-col justify-center items-center gap-2 hover:cursor-pointer ${isIdeateOpen && 'border-2 border-darkRed rounded-lg p-2 bg-red'}`} onClick={() => openAccordian('ideate')}>
            <PiPuzzlePieceBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">ideate</p>
          </div>

          {/* prototype icon */}
          <div className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer">
            <PiHammerBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">prototype</p>
          </div>

          {/* develop icon */}
          <div className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer">
            <PiMonitorBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">develop</p>
          </div>

          {/* deploy icon */}
          <div className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer">
            <PiTelegramLogoBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">deploy</p>
          </div>

          {/* iterate icon */}
          <div className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer">
            <PiArrowsClockwiseBold className='text-darkRed text-2xl' />
            <p className="font-bold text-darkRed">iterate</p>
          </div>
        </div>

        {/* empathize mobile accordian card */}
        <div className="w-full flex md:hidden flex-row justify-between items-center border-b-2 border-darkRed pb-2 hover:cursor-pointer"
          onClick={() => openAccordian('empathize')}>
          {/* icon/name container */}
          <div className="flex flex-row gap-2 justify-start items-center">
            {/* icon */}
            <PiChatsCircleBold className='text-darkRed'/>
            {/* name */}
            <p className="font-bold text-darkRed">empathize</p>
          </div>
          {/* expand icon */}
          {isEmpathizeOpen
            ? <PiArrowsInDuotone className='text-darkRed' />
            : <PiArrowsOutDuotone className='text-darkRed' />
          }
        </div>

        {/* empathize information */}
        {isEmpathizeOpen &&
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10'>
            {/* image */}
            <img src='https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='two people having a conversation' className='rounded-lg border-2 border-darkRed shadow-md shadow-darkRed md:max-w-[40vw]' />
            {/* text content */}
            <p>during the empathize phase, we spoke to current medical students starting with the question, “what are some issues in the medical field that you would want to see addressed?” the common pattern amongst their answers were centered on the discrepancy in health knowledge. upon further discussions with other involved parties, it was decided that an easily learnable app for bridging said gap would be central to the app’s development.</p>
          </div>
        }

        {/* define mobile accordian card */}
        <div className="w-full flex md:hidden flex-row justify-between items-center border-b-2 border-darkRed pb-2 hover:cursor-pointer"
          onClick={() => openAccordian('define')}>
          {/* icon/name container */}
          <div className="flex flex-row gap-2 justify-start items-center">
            {/* icon */}
            <PiPencilBold className='text-darkRed'/>
            {/* name */}
            <p className="font-bold text-darkRed">define</p>
          </div>
          {/* expand icon */}
          {isDefineOpen
            ? <PiArrowsInDuotone className='text-darkRed' />
            : <PiArrowsOutDuotone className='text-darkRed' />
          }
        </div>

        {/* define information */}
        {isDefineOpen &&
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            {/* image */}
            <img src='https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80' alt='person writing on whiteboard' className='rounded-lg border-2 border-darkRed shadow-md shadow-darkRed md:max-w-[40vw]' />
            {/* text content */}
            <p>during the define phase, work was done to articulate the problem statement and goal statements. Our hypothesis is that: <span className='font-bold'>If Zoe can easily access credible information on their partner’s condition, then they will be more educated and supportive of their partner’s needs and concerns</span>. Also, <span className=' underline'>We believe that an intuitive interface that makes medical information accessible for Zoe will ease their nerves concerning their knowledge of medical information with their limited background training.</span></p>
          </div>
        }

        {/* ideate mobile accordian card */}
        <div className="w-full flex md:hidden flex-row justify-between items-center border-b-2 border-darkRed pb-2 hover:cursor-pointer"
          onClick={() => openAccordian('ideate')}>
          {/* icon/name container */}
          <div className="flex flex-row gap-2 justify-start items-center">
            {/* icon */}
            <PiPuzzlePieceBold className='text-darkRed'/>
            {/* name */}
            <p className="font-bold text-darkRed">ideate</p>
          </div>
          {/* expand icon */}
          {isIdeateOpen
            ? <PiArrowsInDuotone className='text-darkRed' />
            : <PiArrowsOutDuotone className='text-darkRed' />
          }
        </div>

        {/* ideate information */}
        {isIdeateOpen &&
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            {/* image */}
            <img src={require('./assets/medipin-ideate.png')} alt="shared figjam board ideating medipin app" className='rounded-lg border-2 border-darkRed shadow-md shadow-darkRed md:max-w-[40vw]'/>
            {/* text content */}
            <p>for the ideate phase, we used a shared FigJam board to map out the remaining elements of our goal statement, hypothesis, personas, as well as the systemic structure of the app. For the second version, the planning began with the MySQL database tables, moved onto the backend structure, and ended with some interface prototypes. The structure was based primarily on a Three-Layer Architecture model: global level models, data layer repositories, domain level validation services, and a user interface level model/view/control structure.</p>
          </div>
        }





      </div>



    </section>
  );
}