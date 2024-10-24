import React from 'react';

interface FlippableCardProps {
  frontTitle: string;
  backContent: string;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ frontTitle, backContent }) => {
  return (
    <div className="relative w-[300px] h-[400px]">
      <div className="group perspective w-full h-full">
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-[#20104c] rounded-lg shadow-lg transition-transform duration-500 transform group-hover:rotateY-180 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="mt-4 text-2xl font-bold text-white">{frontTitle}</h3>
          </div>
        </div>
        
        {/* Back of the card */}
        <div className="absolute w-full h-full bg-[#42229D] rounded-lg shadow-lg transition-transform duration-500 transform rotateY-180 group-hover:rotateY-0 backface-hidden">
          <div className="flex items-center justify-center h-full text-center text-white p-4">
            <p>{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
