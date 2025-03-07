"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the POS system?",
    answer:
      "A POS (Point of Sale) system is software used by businesses to process sales transactions, manage inventory, and generate reports.",
  },
  {
    question: "Can I use the POS system offline?",
    answer: "No, our POS system doesn't supports offline mode yet.",
  },
  {
    question: "Is the POS system secure?",
    answer:
      "Absolutely! Our system uses advanced encryption to ensure that all transactions and customer data are secure.",
  },
  {
    question: "How do I reload or top-up my card?",
    answer:
      "You can easily reload your card through the POS terminal or our mobile app by selecting the ‘Top-Up’ option.",
  },
  {
    question: "Can I manage multiple stores with this POS?",
    answer:
      "Yes, our POS system allows you to manage multiple stores from a single dashboard, making it perfect for business expansions.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col mb-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold text-center pb-6 gradient-title">
          Frequently asked questions
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          We`ve complied a list of the most common questions we get asked. If
          you have any other questions, please feel free to reach out to us
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border rounded-md shadow-md">
            <button
              className="w-full rounded-t-md text-left p-4 focus:outline-none bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform ease-in-out"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>

            {activeIndex === index && (
              <div className="p-4 rounded-b-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
