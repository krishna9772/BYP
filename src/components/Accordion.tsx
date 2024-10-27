"use client";
import { useState, ReactNode, useRef } from "react";
import Image from "next/image";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // To dynamically adjust the height

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#351B7E] border-[1px] bg-[#180c39] w-[414px]  shadow-[0px_4px_13px_0px_#00000040]">
      <button
        className="w-[414px] h-[66px] px-[30px] text-left flex items-center gap-[15px]"
        onClick={toggleAccordion}
      >
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src="/assets/down_arrow.png"
            alt="Down Arrow"
            width={13}
            height={8}
          />
        </span>
        <span className="text-[#FAFAFA] font-semibold">{title}</span>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="pb-6 ps-14">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
