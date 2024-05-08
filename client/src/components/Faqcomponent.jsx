import React, { useState } from 'react';

const FAQ = () => {
  const faqItems = [
    {
      question: 'Can education flashcards be used for all ages?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultr',
    },
    {
      question: 'How do education flashcards work?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultr',
    },
    {
      question: 'Can education flashcards be used for exam preparation?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultr',
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mt-8 mx-4 md:mx-16 my-8">
      <h1 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r bg-clip-text from-blue-900 to-blue-800">FAQ</h1>
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden border-blue-700">
          <div
            className="cursor-pointer text-lg font-semibold mb-2 px-4 py-3 flex justify-between items-center"
            onClick={() => toggleAnswer(index)}
          >
            <span>{item.question}</span>
            <button className="focus:outline-none">
              {openIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          </div>
          {openIndex === index && (
            <div className="text-gray-600 px-4 py-3">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
