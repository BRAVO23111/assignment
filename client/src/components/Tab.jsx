import React from 'react'

const Tab = () => {
  return (
    <>
    <div className="mt-10 px-4 mx-16 ">
        <span className="text-transparent font-bold text-3xl bg-gradient-to-r bg-clip-text from-blue-900 to-blue-800 py-2">Relation and Functions ( Mathematics )</span>
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
    </>
  )
}

export default Tab