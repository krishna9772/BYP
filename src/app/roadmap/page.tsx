"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';

const RoadMap: React.FC = () => {
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
    const [isFlipped5, setIsFlipped5] = useState(false);
    const [isFlipped6, setIsFlipped6] = useState(false);


    const [isFlipped7, setIsFlipped7] = useState(false);
    const [isFlipped8, setIsFlipped8] = useState(false);
    const [isFlipped9, setIsFlipped9] = useState(false);
    const [isFlipped10, setIsFlipped10] = useState(false);
    const [isFlipped11, setIsFlipped11] = useState(false);
    const [isFlipped12, setIsFlipped12] = useState(false);

    // Check if the screen width is mobile-sized
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <div>
            <div className="bg-[#20104c] text-center py-[20px]">
            <h3 className="text-2xl font-semibold text-[#FAFAFA] mb-2">Roadmap overview</h3>
                <p className="text-base font-normal text-[#DDDDDD]">
                    Building a secure and engaged community
                </p>
            </div>

            <div
                style={{ background: 'linear-gradient(180deg, #140A2F 0%, #42229D 100%)' }}
                // className="px-4 md:px-[20%] py-10"
                className="px-4 md:px-[10%] lg:px-[20%] py-10"
            >


                {/* first year section  */}

                <div className='py-[100px]'>
                    <div className="flex flex-col items-center mb-10">
                        <div className="font-extralight text-[#DDDDDD]">2024</div>
                        <div className="h-[69.5px] border-[0.5px] border-[#797979]"></div>
                        <div className="flex gap-[14px] items-center">
                            <Image src="/assets/rocket.png" alt="Rocket" width={32} height={32} />
                            <p className="text-[#FAFAFA] text-lg font-bold">Website launch and initial offering</p>
                        </div>
                    </div>

                    {/* Responsive three flipable cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 sm:gap-y-0 justify-center items-center">
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-0 justify-center items-center"> */}
                            {/* First Card */}
                            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped1(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped1(false)}
                                onClick={() => isMobile && setIsFlipped1(!isFlipped1)}
                            >
                                <h3 className="font-semibold text-[#FAFAFA]">1. Launch platform</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped1(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped1(false)}
                                onClick={() => isMobile && setIsFlipped1(!isFlipped1)}
                            >
                                <p className="text-white text-center">Launch website and initial offerings</p>
                            </div>
                            </ReactCardFlip>

                            {/* Second Card */}
                            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped2(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped2(false)}
                                onClick={() => isMobile && setIsFlipped2(!isFlipped2)}
                            >
                                <h3 className="font-semibold text-[#FAFAFA]">2. User experience</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped2(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped2(false)}
                                onClick={() => isMobile && setIsFlipped2(!isFlipped2)}
                            >
                                <p className="text-white text-center">Expand community engagement</p>
                            </div>
                            </ReactCardFlip>

                            {/* Third Card */}
                            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped3(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped3(false)}
                                onClick={() => isMobile && setIsFlipped3(!isFlipped3)}
                            >
                                <h3 className="font-semibold text-[#FAFAFA]">3. Community building</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped3(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped3(false)}
                                onClick={() => isMobile && setIsFlipped3(!isFlipped3)}
                            >
                                <p className="text-white text-center">Introduce new features and offerings</p>
                            </div>
                            </ReactCardFlip>
                        </div>



                    <div className="flex flex-col items-center my-10">
                        {/* <div className="font-extralight text-[#DDDDDD]">2024</div> */}
                        <div className="h-[69.5px] border-[0.5px] border-[#797979]"></div>
                        <div className="flex gap-[14px] items-center">
                            <Image src="/assets/care.png" alt="Care" width={32} height={32} />
                            <p className="text-[#FAFAFA] text-lg font-bold">Platform enhancement and community growth</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 sm:gap-y-0 justify-center items-center">
                        {/* First Card */}
                        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped4(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped4(false)}
                                onClick={() => isMobile && setIsFlipped4(!isFlipped4)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">1. Feature expansion</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped4(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped4(false)}
                                onClick={() => isMobile && setIsFlipped4(!isFlipped4)}
                            >
                                <p className="text-white text-center">Launch website and initial offerings</p>
                            </div>
                        </ReactCardFlip>

                        {/* Second Card */}
                        <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped5(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped5(false)}
                                onClick={() => isMobile && setIsFlipped5(!isFlipped5)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">2. Support and documentation</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped5(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped5(false)}
                                onClick={() => isMobile && setIsFlipped5(!isFlipped5)}
                            >
                                <p className="text-white text-center">Expand community engagement</p>
                            </div>
                        </ReactCardFlip>

                        {/* Third Card */}
                        <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped6(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped6(false)}
                                onClick={() => isMobile && setIsFlipped6(!isFlipped6)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">3. Community engagement</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped6(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped6(false)}
                                onClick={() => isMobile && setIsFlipped6(!isFlipped6)}
                            >
                                <p className="text-white text-center">Introduce new features and offerings</p>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>


                {/* Second year section  */}
                <div className='py-[100px]'>
                    <div className="flex flex-col items-center mb-10">
                        <div className="font-extralight text-[#DDDDDD]">2025</div>
                        <div className="h-[69.5px] border-[0.5px] border-[#797979]"></div>
                        <div className="flex gap-[14px] items-center">
                            <Image src="/assets/growth.png" alt="Growth" width={32} height={32} />
                            <p className="text-[#FAFAFA] text-lg font-bold">Scaling and market expansion</p>
                        </div>
                    </div>

                    {/* Responsive three flipable cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 sm:gap-y-0 justify-center items-center">
                        {/* First Card */}
                        <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped7(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped7(false)}
                                onClick={() => isMobile && setIsFlipped7(!isFlipped7)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">1. Market expansion</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped7(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped7(false)}
                                onClick={() => isMobile && setIsFlipped7(!isFlipped7)}
                            >
                                <p className="text-white text-center">Launch website and initial offerings</p>
                            </div>
                        </ReactCardFlip>

                        {/* Second Card */}
                        <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped8(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped8(false)}
                                onClick={() => isMobile && setIsFlipped8(!isFlipped8)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">2. Platform optimization</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped8(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped8(false)}
                                onClick={() => isMobile && setIsFlipped8(!isFlipped8)}
                            >
                                <p className="text-white text-center">Expand community engagement</p>
                            </div>
                        </ReactCardFlip>

                        {/* Third Card */}
                        <ReactCardFlip isFlipped={isFlipped9} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped9(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped9(false)}
                                onClick={() => isMobile && setIsFlipped9(!isFlipped9)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">3. Security enhancements</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped9(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped9(false)}
                                onClick={() => isMobile && setIsFlipped9(!isFlipped9)}
                            >
                                <p className="text-white text-center">Introduce new features and offerings</p>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="flex flex-col items-center my-10">
                        {/* <div className="font-extralight text-[#DDDDDD]">2024</div> */}
                        <div className="h-[69.5px] border-[0.5px] border-[#797979]"></div>
                        <div className="flex gap-[14px] items-center">
                            <Image src="/assets/plant.png" alt="Plant" width={32} height={32} />
                            <p className="text-[#FAFAFA] text-lg font-bold">Long-term growth and sustainability</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 sm:gap-y-0 justify-center items-center">
                        {/* First Card */}
                        <ReactCardFlip isFlipped={isFlipped10} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped10(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped10(false)}
                                onClick={() => isMobile && setIsFlipped10(!isFlipped10)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">1. Sustainable growth</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped10(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped10(false)}
                                onClick={() => isMobile && setIsFlipped10(!isFlipped10)}
                            >
                                <p className="text-white text-center">Launch website and initial offerings</p>
                            </div>
                        </ReactCardFlip>

                        {/* Second Card */}
                        <ReactCardFlip isFlipped={isFlipped11} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped11(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped11(false)}
                                onClick={() => isMobile && setIsFlipped11(!isFlipped11)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">2. Future planning</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped11(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped11(false)}
                                onClick={() => isMobile && setIsFlipped11(!isFlipped11)}
                            >
                                <p className="text-white text-center">Expand community engagement</p>
                            </div>
                        </ReactCardFlip>

                        {/* Third Card */}
                        <ReactCardFlip isFlipped={isFlipped12} flipDirection="horizontal">
                            <div
                                className="w-full max-w-[275px] h-[186px] border border-[#351B7E] border-[1px] bg-[#180c39] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-180 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped12(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped12(false)}
                                onClick={() => isMobile && setIsFlipped12(!isFlipped12)}
                            >
                                <h3 className=" font-semibold text-[#FAFAFA]">3. Community loyalty</h3>
                            </div>

                            <div
                                className="w-full max-w-[275px] h-[186px] bg-[#42229D] flex items-center justify-center rounded-[5px] shadow-[0px_4px_13px_0px_#00000040] cursor-pointer hover:rotateY-0 transition-transform duration-500 mx-auto"
                                onMouseEnter={() => !isMobile && setIsFlipped12(true)}
                                onMouseLeave={() => !isMobile && setIsFlipped12(false)}
                                onClick={() => isMobile && setIsFlipped12(!isFlipped12)}
                            >
                                <p className="text-white text-center">Introduce new features and offerings</p>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default RoadMap;
