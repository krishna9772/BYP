import React from "react";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react"; // Ensure to import WalletName
import { WalletName } from "@solana/wallet-adapter-base";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const { wallets, select, connect } = useWallet();

    if (!isOpen) return null;

    const handleWalletSelect = async (walletName: WalletName) => {
        try {
            await select(walletName); // No type error should occur here
            await connect(); // Connect the wallet
            onClose(); // Close the modal once connected
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black opacity-50 fixed inset-0" onClick={onClose}></div>
            <div className="bg-[#140A2F] rounded-lg shadow-lg z-10 w-[398px]">
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
                <div className="px-[50px] pb-[20px]">
                    <div className="text-center">
                        <h2 className="text-sm font-bold text-[#FAFAFA] mb-1">Connect Wallet</h2>
                        <p className="text-[#DDDDDD] text-xs">Solana network required to continue.</p>
                    </div>
                    <div className="flex flex-col mt-7">
                        {wallets.map((wallet) => (
                            <button
                                key={wallet.adapter.name}
                                className="bg-[#351B7E33] w-full h-[44px] rounded-[8px] flex items-center justify-between px-4 py-2 mb-4"
                                onClick={() => handleWalletSelect(wallet.adapter.name as WalletName)} // Cast wallet name here
                            >
                                {/* Left side: Wallet icon and name */}
                                <div className="flex items-center gap-3">
                                    <div className="w-[24px] h-[24px]">
                                        <WalletIcon wallet={wallet} />
                                    </div>
                                    <span className="text-white text-sm">{wallet.adapter.name}</span>
                                </div>

                                {/* Right side: "Detected" text */}
                                <span className="text-[#60AF84] text-xs">Detected</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;
