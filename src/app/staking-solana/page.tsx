"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import PrivateFarm from "@/components/Staking/PrivateFarm";
import StakingCard from "@/components/Staking/StakingCard";
import WalletModal from "@/components/Modal/WalletModal"; // Import the modal component
import Image from "next/image";

const StakingSolana = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal
    const { publicKey, disconnect } = useWallet(); // Get publicKey and disconnect function

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div
            style={{
                background: "linear-gradient(180deg, #140A2F 0%, #42229D 100%)",
            }}
            className="pb-[100px] pt-[15px]"
        >
            <div>
                <div className="flex justify-end items-center mb-[60px] mt-[30px] px-8 lg:px-[20%]">
                    {/* If connected, show wallet address and disconnect button */}
                    {publicKey ? (
                        <div className="flex items-center space-x-3">
                            <div
                                className="bg-[#28145E80] flex items-center rounded-[8px]  py-[9px] px-[14px] cursor-pointer"
                                style={{ boxShadow: "0px 4px 19.5px 0px #00000040" }}
                                onClick={() => disconnect()} // Optionally add disconnect functionality
                            >
                                <span className="text-[#FAFAFA] text-xs">
                                    {publicKey.toBase58().slice(0, 12)}...{publicKey.toBase58().slice(-4)}
                                </span>
                                <div className="w-[24px] h-[24px] ml-2"> {/* Updated icon size */}
                                    <Image
                                        src="/assets/wallet.png"
                                        alt="Wallet"
                                        width={20} // Updated width for better visibility
                                        height={18} // Updated height for better visibility
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Wallet Icon - triggers modal on click */
                        <div
                            className="bg-[#28145E80] w-[44px] h-[41px] flex justify-center items-center rounded-[8px] py-[9px] px-[14px] cursor-pointer"
                            style={{ boxShadow: "0px 4px 19.5px 0px #00000040" }}
                            onClick={openModal}
                        >
                            <Image
                                src="/assets/wallet.png"
                                alt="Wallet"
                                width={20}
                                height={18}
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 md:px-[20%]">
                    <div className="w-full flex justify-center mb-4 md:mb-0">
                        <StakingCard />
                    </div>
                    <div className="mx-auto">
                        <PrivateFarm />
                    </div>
                </div>

            </div>

            {/* Wallet Modal */}
            <WalletModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default StakingSolana;
