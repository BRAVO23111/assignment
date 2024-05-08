import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between text-black px-4 py-2 mx-4 md:mx-16 my-8'>
      <img src="https://i.postimg.cc/jdzXcr2P/PIC1.png"alt="image" srcset="" />
      <nav>
        <ul className='flex flex-col md:flex-row md:items-center gap-x-8'>
          <li className='cursor-pointer hover:text-gray-300 mr-4 mb-2 md:mb-0'>Home</li>
          <li className='cursor-pointer hover:text-gray-300 mr-4 mb-2 md:mb-0'>Flashcard</li>
          <li className='cursor-pointer hover:text-gray-300 mr-4 mb-2 md:mb-0'>Contact</li>
          <li className='cursor-pointer hover:text-gray-300 mr-4 mb-2 md:mb-0'>Faq</li>
          <li>
            <button 
              className='cursor-pointer rounded-full px-5 py-2 bg-gradient-to-b from-blue-900 to-blue-800 text-white hover:text-gray-300'
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
