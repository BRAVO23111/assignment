import React, { useState } from 'react';
import './App.css';
import Arrow from './components/Arrow';
import Navbar from './components/Navbar';
import RotateIcon from './assets/Arrow.svg'; // Adjust the path based on your folder structure
import Faqcomponent from './components/Faqcomponent';
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { RiFullscreenFill } from "react-icons/ri";
import Tab from './components/Tab';
import Flashcard from './components/Flashcard';

function App() {
  const [activeTab, setActiveTab] = useState('Study');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <Arrow />
      <Tab/>

      {/* Flashcard */}
      <Flashcard/>
  
  {/* Render the SVG icon component */}
  <div className="flex justify-center mt-4 text-2xl">
  <FaArrowRotateRight />

    <div className="flex ml-36">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
      </svg>
      <span className="mx-2 text-xl">01/10</span>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
      </svg>
      <div className='flex justify-end text-2xl ml-40'>
      <RiFullscreenFill />
      </div>
    </div>
  </div>
  
  
  {/* section  */}
  <div className='flex flex-row justify-between mx-16 text-xl my-20'>
      <div>
      <img src="https://i.postimg.cc/LX9XcL3m/Frame-41.png" alt="" srcset="" />
      </div>
      <div className='flex flex-row space-x-4 mt-8'>
      <div className=' pb-3 text-4xl'>
      <FaPlusCircle />
        </div>
        <div className='text-transparent font-bold text-3xl bg-gradient-to-r bg-clip-text from-blue-900 to-blue-600'>
        <h1>Create Flashcard</h1>
        </div>
      </div>
    </div>
     

    {/* section */}

    <Faqcomponent/>
    </>
  );
}

export default App;
