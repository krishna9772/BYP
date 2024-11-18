import React from "react";
import Image from "next/image";

interface ConnectWalletModalProps {
    isOpen: boolean;
    onClose: () => void;
    openModal : () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ isOpen, onClose , openModal }) => {
    // const { wallets, select, connect } = useWallet();

    if (!isOpen) return null;

    // const handleWalletSelect = async (walletName: WalletName) => {
    //     try {
    //         await select(walletName); // No type error should occur here
    //         await connect(); // Connect the wallet
    //         onClose(); // Close the modal once connected
    //     } catch (error) {
    //         console.error("Failed to connect wallet:", error);
    //     }
    // };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#140A2FD9]  fixed inset-0" onClick={onClose}></div>
            <div className="bg-[#140A2F] rounded-lg shadow-lg z-10 w-[405px]">
                <div className="p-[20px] flex justify-end">
                    <Image
                        src="/assets/close_icon.png"
                        alt="Close Icon"
                        width={9}
                        height={9}
                        onClick={onClose}
                        className="cursor-pointer"
                    />
                </div>
                <div className="px-[50px] pb-[20px] flex flex-col items-center">
                    <Image
                        src="/assets/connect-wallet-modal-bg.png"
                        alt="Connect wallet"
                        width={186}
                        height={124}
                    />

                    <div className="text-[#FAFAFA] font-bold text-sm mt-[25px]">Connect!</div>
                    <div className="text-[#DDDDDD] text-xs">Connect your wallet to start staking.</div>


                     <button className="my-[25px] bg-gradient-to-r from-[#42229D] to-[#470038] text-white  rounded-[8px] shadow-lg hover:opacity-90 transition-opacity flex items-center h-[39px] w-[131px] justify-center"
                      onClick={openModal}
                     >
                        <span>Connect wallet</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConnectWalletModal;
