import Accordion from "@/components/Accordion";
import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";

const Faq = () => {
    return (
        <div>
            {/* First Section with Background */}
            <div className="bg-[#20104c] text-center py-[20px]">
                <h3 className="text-2xl font-semibold text-[#FAFAFA]">Frequently asked questions</h3>
                <p className="text-base font-normal text-[#DDDDDD]">
                    BYP staking platform
                </p>
            </div>

            <div style={{ background: 'linear-gradient(180deg, #140A2F 0%, #42229D 100%)' }}>
                <div className="py-[100px] flex flex-col items-center justify-center">
                    <div className="flex items-center gap-[14px] mb-[40px]">
                        <Image
                            src="/assets/chat.png"
                            alt="Chat"
                            width={32}
                            height={32}
                        />
                        <div className="font-bold text-lg text-[#FAFAFA]">Common queries</div>
                    </div>

                    {/* Responsive Grid for Accordion */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Accordion title="What is BYP?">
                            <p>This is the content for section 1.</p>
                        </Accordion>
                        <Accordion title="How do I start staking on BYP?">
                            <p>This is the content for section 2.</p>
                        </Accordion>
                        <Accordion title="What staking options are available?">
                            <p>This is the content for section 3.</p>
                        </Accordion>
                        <Accordion title="How can I withdraw my staked tokens?">
                            <p>This is the content for section 4.</p>
                        </Accordion>
                    </div>
                </div>

                <div className="py-[100px] flex flex-col items-center justify-center">
                    <div className="flex items-center gap-[14px] mb-[40px]">
                        <Image
                            src="/assets/bulb.png"
                            alt="Bulb"
                            width={32}
                            height={32}
                        />
                        <div className="font-bold text-lg text-[#FAFAFA]">Popular questions</div>
                    </div>

                    {/* Responsive Grid for Accordion */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Accordion title="What is the swapping feature?">
                            <p>This is the content for section 1.</p>
                        </Accordion>
                        <Accordion title="How does BYP secure my assets?">
                            <p>This is the content for section 2.</p>
                        </Accordion>
                        <Accordion title="What should I do if I encounter an issue?">
                            <p>This is the content for section 3.</p>
                        </Accordion>
                        <Accordion title="How can I stay updated on BYP news?">
                            <p>This is the content for section 4.</p>
                        </Accordion>
                    </div>
                </div>

                {/* Need more help section */}
                <div className="py-[100px] flex flex-col items-center justify-center">
                    <div className="flex items-center gap-[14px] mb-[40px]">
                        <Image
                            src="/assets/face.png"
                            alt="Face"
                            width={32}
                            height={32}
                        />
                        <div className="font-bold text-lg text-[#FAFAFA]">Need more help?</div>
                    </div>

                    <div className="bg-[#351B7E] border-[#B3A7D8] border-[1px] shadow-[0px_4px_19.3px_0px_#00000040] p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 w-full max-w-[850px] mx-auto">
                        {/* Join Image */}
                        <Image
                            src="/assets/join.png"
                            alt="Join"
                            width={322}
                            height={322}
                            className="w-full max-w-[300px] md:max-w-none"
                        />

                        {/* Title and Paragraph */}
                        <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
                            {/* Recommended Section */}
                            <div className="flex items-center gap-2 mb-3">
                                <Image
                                    src="/assets/thumb.png"
                                    alt="Thumb"
                                    width={24}
                                    height={24}
                                />
                                <div className="text-[#DDDDDD] font-bold text-xs leading-6">Recommended</div>
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-xl md:text-2xl text-[#FAFAFA] mb-3">
                                Join our Discord community
                            </h3>

                            {/* Paragraph */}
                            <p className="text-sm md:text-base text-[#DDDDDD] mb-6">
                                Connect with fellow users and stay updated by joining the BYP Discord. Get real-time news, share experiences, and be part of our growing community!
                            </p>

                            {/* Gradient Button */}
                            <GradientButton href="/start-staking" label="Join Discord Community" download={false} />
                        </div>



                    </div>



                    <div className="bg-[#351B7E] border-[#B3A7D8] border-[1px] shadow-[0px_4px_19.3px_0px_#00000040] p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 w-full max-w-[850px] mx-auto mt-[35px]">
                        {/* Join Image */}
                        <Image
                            src="/assets/chat_message.png"
                            alt="Chat"
                            width={322}
                            height={322}
                            className="w-full max-w-[300px] md:max-w-none"
                        />

                        {/* Title and Paragraph */}
                        <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
                            {/* Recommended Section */}
                            <div className="flex items-center gap-2 mb-3">
                                <Image
                                    src="/assets/thumb.png"
                                    alt="Thumb"
                                    width={24}
                                    height={24}
                                />
                                <div className="text-[#DDDDDD] font-bold text-xs leading-6">Recommended</div>
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-xl md:text-2xl text-[#FAFAFA] mb-3">
                            Chat with BYP assistant
                            </h3>

                            {/* Paragraph */}
                            <p className="text-sm md:text-base text-[#DDDDDD] mb-6">
                            Our chat support is here to assist you with any questions or issues. Get quick, real-time assistance directly from our support team.
                            </p>

                            {/* Gradient Button */}
                            <GradientButton href="/start-staking" label="Chat now" download={false} />
                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq;
