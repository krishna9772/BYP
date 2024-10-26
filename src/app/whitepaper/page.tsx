import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";

const WhitePaper = () => {
    return (
        <div className="">

            {/* First Section with Background */}
            <div className="bg-[#20104c] text-center py-[20px]">
                <h3 className="text-2xl font-semibold text-[#FAFAFA]">BYP Whitepaper</h3>
                <p className="text-base font-normal text-[#DDDDDD]">
                    A decentralized future for secure staking
                </p>
            </div>

            {/* Second Section with Gradient Background */}
            <div
                className="text-center py-[40px] px-[10%] lg:px-[25%] flex flex-col items-center"
                style={{ background: 'linear-gradient(180deg, #140A2F 0%, #42229D 100%)' }}
            >
                {/* Image and Title */}
                <div className="border-[#42229D] flex flex-col items-center border-[1px] p-[54px]">
                    <div className="flex flex-row items-center gap-3 mb-4">
                        <Image
                            src="/assets/book.png"
                            alt="Book"
                            width={32}  // Increased size for better visibility
                            height={32}
                            className="w-auto h-auto"
                        />
                        <div className="text-lg font-bold text-[#FAFAFA]">Introduction</div>
                    </div>

                    {/* Paragraph Text */}
                    <div className="text-base font-normal text-[#DDDDDD] text-center mb-10">
                        <p className="mb-3">This whitepaper outlines the vision, architecture, and strategic roadmap of BYP, a cutting-edge platform designed to offer secure and user-friendly staking solutions.</p>
                        <p className="mb-3">From the initial launch to long-term sustainability, BYP is committed to empowering users through transparent governance, advanced security measures, and an engaged community.</p>
                        <p className="mb-3">Explore how BYP aims to revolutionize staking by providing a reliable and scalable ecosystem for all participants.</p>
                    </div>

                    <GradientButton href="/start-staking" label="Download white paper" download = {true}/>
                </div>



            </div>
        </div>
    )
}

export default WhitePaper;
