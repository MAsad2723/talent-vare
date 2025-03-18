import { useState } from "react";

const AccordionItem = ({ index, title, content, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center py-5 text-slate-800"
      >
        <span>{title}</span>
        <span
          className={`text-slate-800 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="pb-5 text-sm text-slate-500">{content}</div>
      </div>
    </div>
  );
};

const InterviewSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Material Tailwind?",
      content:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      title: "How to use Material Tailwind?",
      content:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      title: "What can I do with Material Tailwind?",
      content:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default InterviewSection;
