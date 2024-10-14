"use client"
import { useState, ReactNode } from 'react';
import Image from 'next/image';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#351B7E] border-[1px] bg-[#180c39] w-[414px]">
      <button
        className="w-[414px] h-[66px] px-[30px] text-left flex items-center gap-[15px] shadow-[0px_4px_13px_0px_#00000040]"
        onClick={toggleAccordion}
      >
        <span className={`ml-2 transform ${isOpen ? 'rotate-180' : ''}`}>
          <Image
            src="/assets/down_arrow.png"
            alt="Down Arrow"
            width={13}
            height={8}
          />
        </span>
        <span className="text-[#FAFAFA] font-semibold">{title}</span>
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
