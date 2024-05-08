import React, { useState } from 'react';
import './App.css';
import Arrow from './components/Arrow';
import Navbar from './components/Navbar';
import RotateIcon from './assets/Arrow.svg'; // Adjust the path based on your folder structure
import Faqcomponent from './components/Faqcomponent';
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { RiFullscreenFill } from "react-icons/ri";

function App() {
  const [activeTab, setActiveTab] = useState('Study');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <Arrow />
      <div className="mt-10 px-4 mx-16 ">
        <span className="text-transparent font-bold text-2xl bg-gradient-to-r bg-clip-text from-blue-900 to-blue-800 py-2">Relation and Functions ( Mathematics )</span>
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex flex-row gap-x-14">
          <li
            className={`cursor-pointer ${activeTab === 'Study' && 'text-blue-500 font-bold border-b-2 border-blue-500'}`}
            onClick={() => handleTabClick('Study')}
          >
            Study
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'Quiz' && 'text-blue-500 font-bold border-b-2 border-blue-500'}`}
            onClick={() => handleTabClick('Quiz')}
          >
            Quiz
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'Test' && 'text-blue-500 font-bold border-b-2 border-blue-500'}`}
            onClick={() => handleTabClick('Test')}
          >
            Test
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'Game' && 'text-blue-500 font-bold border-b-2 border-blue-500'}`}
            onClick={() => handleTabClick('Game')}
          >
            Game
          </li>
          <li
            className={`cursor-pointer ${activeTab === 'Others' && 'text-blue-500 font-bold border-b-2 border-blue-500'}`}
            onClick={() => handleTabClick('Others')}
          >
            Others
          </li>
        </ul>
      </div>

      {/* Flashcard */}
      <div className="flex justify-center mt-9 relative">
    <div className="w-full md:max-w-xl relative">
      <div className="bg-gradient-to-l from-blue-900 to-blue-500 text-white p-6 rounded-2xl shadow-lg h-72 relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute top-4 left-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute top-4 right-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>

        <h2 className="text-3xl font-bold text-center mt-24">9 + 6 + 7x  - 2x - 3</h2>
      </div>
    </div>
  </div>
  
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
