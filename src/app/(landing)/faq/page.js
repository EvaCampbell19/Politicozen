"use client";
import Custom from '@/app/components/CustomBanner';
import { useState } from 'react';

const AccordionItem = ({ id, question, answer, isOpen, onClick, isActive }) => {
    return (
        <div className={`relative transition-all duration-200 bg-white border border-gray-200 rounded-[1rem] cursor-pointer hover:bg-gray-50 ${isActive ? 'shadow-custom-shadow' : ''}`}>
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => onClick(id)}
            >
                <span className="text-lg font-semibold text-black float-left w-auto">{question}</span>
                <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${isOpen ? '' : 'hidden'}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openId, setOpenId] = useState('faq1'); // Set the default open item to 'faq1'

    const toggleItem = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [
        {
            id: 'faq1',
            question: 'How to create an account?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            id: 'faq2',
            question: 'How can I make payment using Paypal?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            id: 'faq3',
            question: 'Can I cancel my plan?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            id: 'faq4',
            question: 'How can I reach support?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
    ];

    return (
        <>
        <Custom header="FAQ"/>
        <section className="most-recent pt-[160px] mt-[-450px] bg-transparent pb-16">
        <div className="luffy flex justify-center items-start pb-[25px] relative z-[1] ml-[11rem]">
            <div className="">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className=" mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            id={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openId === faq.id}
                            isActive={openId === faq.id}
                            onClick={toggleItem}
                        />
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">
                    Didn’t find the answer you are looking for?{' '}
                    <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                        Contact our support
                    </a>
                </p>
            </div>
            </div>
        </section>
        </>
    );
};

export default Accordion;
