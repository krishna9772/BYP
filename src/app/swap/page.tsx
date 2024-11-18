"use client";

import { useState, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletModal from "@/components/Modal/WalletModal"; // Import the modal component
import Image from "next/image";
import Link from "next/link";

const Swap = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal
    const [showOptions, setShowOptions] = useState(false); // State for showing options
    const { publicKey, disconnect } = useWallet(); // Get publicKey and disconnect function
    const walletRef = useRef<HTMLDivElement>(null);

    const toggleOptions = () => setShowOptions(!showOptions); // Toggle options visibility
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const copyAddress = () => {
        navigator.clipboard.writeText(publicKey?.toBase58() || "");
        alert("Address copied to clipboard");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (walletRef.current && !walletRef.current.contains(event.target as Node)) {
                setShowOptions(false); // Close dropdown if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const [swapState, setSwapState] = useState({
        send: { label: 'BYP', value: '0.00' , logo : '/assets/byp_logo.png' },
        receive: { label: 'SOL', value: '0.00' ,  logo : '/assets/solana_logo.png'}
    });

    const handleSwap = () => {
        // Swap the send and receive values
        setSwapState(prevState => ({
            send: prevState.receive,
            receive: prevState.send
        }));
    };

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
                        <div className="relative" ref={walletRef}>
                            <div
                                className="bg-[#28145E80] flex items-center rounded-[8px] py-[9px] px-[14px] cursor-pointer relative"
                                style={{ boxShadow: "0px 4px 19.5px 0px #00000040" }}
                                onClick={toggleOptions}
                            >
                                <span className="text-[#FAFAFA] text-xs">
                                    {publicKey.toBase58().slice(0, 9)}...{publicKey.toBase58().slice(-4)}
                                </span>
                                <div className="w-[24px] h-[24px] ml-2">
                                    <Image
                                        src="/assets/wallet.png"
                                        alt="Wallet"
                                        width={20}
                                        height={18}
                                    />
                                </div>
                            </div>

                            {/* Dropdown with options */}
                            {showOptions && (
                                <div
                                    className="absolute mt-2 bg-[#140A2F] rounded-lg z-10 p-[12px] w-[161px] rounded-[8px] font-semibold text-xs text-[#FAFAFA] space-y-[10px]"
                                    style={{ boxShadow: "0px 4px 16.5px 0px #684EB114" }}
                                >
                                    <div
                                        className="px-4 py-2 hover:bg-[#28145E] cursor-pointer rounded-[3px]"
                                        onClick={copyAddress}
                                    >
                                        Copy Address
                                    </div>
                                    <div
                                        className="px-4 py-2 hover:bg-[#28145E] cursor-pointer rounded-[3px]"
                                        onClick={openModal}
                                    >
                                        Change Wallet
                                    </div>
                                    <div
                                        className="px-4 py-2 hover:bg-[#28145E] cursor-pointer rounded-[3px]"
                                        onClick={disconnect}
                                    >
                                        Disconnect
                                    </div>
                                </div>
                            )}
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

                <div className="md:px-[20%]">

                    {/* connect wallet card */}
                    <div className="w-[453px] bg-[#140A2F] py-[45px] px-[40px] rounded-[10px] mx-auto">
                        <h6 className="text-[#FAFAFA] font-bold text-sm text-center">Connect  the wallet</h6>
                        <div className="mt-[20px]">
                            <div className="flex justify-between px-[8px]">
                                <div className="flex text-sm text-[#DDDDDD] gap-2 items-center">
                                    <div>Fill node address</div>
                                </div>
                            </div>

                            <div className="border-[#797979] border-[0.5px] flex h-[49px] items-center rounded-lg overflow-hidden pr-[20px]">
                                <input
                                    className="w-full px-4 py-2 text-[#797979] bg-transparent focus:outline-none font-semibold"
                                    placeholder="0xb3F0...291f"
                                    value={publicKey ? `${publicKey.toBase58().slice(0, 9)}...${publicKey.toBase58().slice(-4)}` : ''}
                                    readOnly
                                />

                            </div>
                        </div>

                        <button
                            className={`w-full py-[12px] rounded-[8px] shadow-lg flex items-center justify-center mt-[45px] ${publicKey
                                    ? 'bg-[#2A2538] text-[#A7A7A7] cursor-not-allowed opacity-90'
                                    : 'bg-gradient-to-r from-[#42229D] to-[#470038] text-white hover:opacity-90 transition-opacity'
                                }`}
                            disabled={!!publicKey} // Disable button if publicKey exists
                            onClick={openModal}
                        >
                            <span className={`font-semibold`}>
                                {publicKey ? 'Connected' : 'Connect'} {/* Change text to "Connected" if publicKey exists */}
                            </span>
                        </button>
                    </div>
                </div>

                <div className="md:px-[20%] mt-[100px]">
            {/* withdraw card */}
            <div className="w-[453px] bg-[#140A2F] py-[45px] px-[40px] rounded-[10px] mx-auto">
                <h6 className="text-[#FAFAFA] font-bold text-sm text-center">Swap details</h6>
                <div className="flex justify-between px-[8px] mt-[20px]">
                    <div className="flex text-sm text-[#DDDDDD] gap-2 items-center">
                        <Image
                            src={swapState.send.logo}
                            alt="send-logo"
                            width={24}
                            height={24}
                        />
                        <div>Send {swapState.send.label}</div>
                    </div>
                    <div>
                        <p className="text-[#DDDDDDDD] text-sm">
                            <span>Available:</span>
                            <span className="font-semibold">00.00 {swapState.send.label}</span>
                        </p>
                    </div>
                </div>

                <div className="border-[#797979] border-[0.5px] flex h-[49px] items-center rounded-lg overflow-hidden pr-[20px]">
                    <input
                        type="number"
                        className="w-full px-4 py-2 text-[#797979] bg-transparent focus:outline-none font-semibold"
                        placeholder="0.00"
                        min="0"
                        value={swapState.send.value}
                        onChange={(e) => setSwapState({ ...swapState, send: { ...swapState.send, value: e.target.value } })}
                    />
                    <button className="bg-[#684EB1] rounded-full w-[54px] h-[33px] font-semibold text-xs text-[#FAFAFA] px-[15px] py-[5px] ml-2">
                        Max
                    </button>
                </div>

                <div className="flex justify-between items-center text-xs  px-[8px] mt-2">
                    <div className="flex text-[#AA0000] gap-1 items-center ">
                        <Image
                            src="/assets/warning.png"
                            alt="Warning"
                            width={16}
                            height={16}
                        />
                        <p>Insufficient amount</p>
                    </div>
                    <div className="text-[#DDDDDDDD] text-xs  px-[8px]">
                        <p>≈ 5.70 USD</p>
                    </div>
                </div>

                <div className="py-[30px]">
                    <div className="w-[36px] h-[36px] bg-[#1F104A] rounded-[8px] flex justify-center items-center mx-auto cursor-pointer" onClick={handleSwap}>
                        <Image
                            src="/assets/swap.png"
                            alt="Swap"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between px-[8px]">
                        <div className="flex text-sm text-[#DDDDDD] gap-2 items-center">
                            <Image
                                src={swapState.receive.logo}
                                alt="receive-logo"
                                width={24}
                                height={24}
                            />
                            <div>Receive {swapState.receive.label}</div>
                        </div>
                    </div>

                    <div className="border-[#797979] border-[0.5px] flex h-[49px] items-center rounded-lg overflow-hidden pr-[20px]">
                        <input
                            type="number"
                            className="w-full px-4 py-2 text-[#797979] bg-transparent focus:outline-none font-semibold"
                            placeholder="0.00"
                            min="0"
                            value={swapState.receive.value}
                            onChange={(e) => setSwapState({ ...swapState, receive: { ...swapState.receive, value: e.target.value } })}
                        />
                    </div>

                    <div className="text-end text-[#DDDDDDDD] text-xs  px-[8px] mt-2">
                        <p>≈ 0.00 USD</p>
                    </div>
                </div>

                <button
                    className={`w-full py-[12px] rounded-[8px] shadow-lg flex items-center justify-center mt-[45px] ${publicKey
                        ? 'bg-gradient-to-r from-[#42229D] to-[#470038] text-white hover:opacity-90 transition-opacity'
                        : 'bg-[#2A2538] text-[#A7A7A7] cursor-not-allowed opacity-90'
                        }`}
                    disabled={!publicKey} // Disable button if publicKey does not exist
                >
                    <span className="font-semibold">
                        {publicKey ? 'Swap' : 'Swap'}
                    </span>
                </button>
            </div>

            <div className="flex justify-center mt-[50px]">
                <p className="text-[#DDDDDD] text-sm flex items-center">
                    Encountering difficulties? Find out in&nbsp;
                    <Link href="/faq" className="underline text-[#DDDDDD]">
                        FAQ
                    </Link>
                    &nbsp;
                    <Image
                        src="/assets/withdraw_icon.png"
                        alt="Withdraw"
                        width={24}
                        height={24}
                    />
                </p>
            </div>
        </div>
            </div>

            {/* Wallet Modal */}
            <WalletModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Swap;
