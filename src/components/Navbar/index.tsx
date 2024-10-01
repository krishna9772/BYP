"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleDropdown = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const closeDropdown = () => {
        setActiveDropdown(null); // Close the dropdown after clicking an option
    };

    // Handle click outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null); // Close the dropdown
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);


    return (
        <nav className="bg-[#140A2F] shadow-md ">
            <div className=" flex items-center justify-between relative px-8 lg:px-[20%] py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/assets/company_logo.png"
                            alt="Logo"
                            width={40}
                            height={33}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Centered Menu Items */}
                <div className="hidden md:flex items-center gap-[60px] text-white" ref={dropdownRef}>
                    {/* Staking */}
                    <div className="relative group " >
                        <button
                            className="flex items-center space-x-1 focus:outline-none transition duration-300 group-hover:text-gray-300"
                            onClick={() => handleDropdown('staking')}
                        >
                            <span>Staking</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'staking' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'staking' && (
                            <div className="text-sm absolute left-1/2 transform -translate-x-1/2 mt-2 w-[140px] bg-[#140A2F] rounded-md shadow-lg p-[12px] transition-opacity duration-300 space-y-[10px]">
                                <Link href="/staking-solana" className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Staking Solana
                                </Link>
                                <Link href="/withdraw" className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Withdraw
                                </Link>
                                <Link href="/swap" className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Swap
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Why Us */}
                    <div className="relative group">
                        <button
                            className="flex items-center space-x-1 focus:outline-none transition duration-300 group-hover:text-gray-300"
                            onClick={() => handleDropdown('why-us')}
                        >
                            <span>Why Us?</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'why-us' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'why-us' && (
                           <div className="text-sm absolute left-1/2 transform -translate-x-1/2 mt-2 w-[140px] bg-[#140A2F] rounded-md shadow-lg p-[12px] transition-opacity duration-300 space-y-[10px]">
                                <Link href="/roadmap"  className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Roadmap
                                </Link>
                                <Link href="/whitepaper"  className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Whitepaper
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Support */}
                    <div className="relative group">
                        <button
                            className="flex items-center space-x-1 focus:outline-none transition duration-300 group-hover:text-gray-300"
                            onClick={() => handleDropdown('support')}
                        >
                            <span>Support</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'support' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === 'support' && (
                           <div className="text-sm absolute left-1/2 transform -translate-x-1/2 mt-2 w-[140px] bg-[#140A2F] rounded-md shadow-lg p-[12px] transition-opacity duration-300 space-y-[10px]">
                                <Link href="/faq"  className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    FAQ
                                </Link>
                                <Link href="/chat-support"  className="block px-[10px] py-[3px] rounded-[3px] text-[#FAFAFA] hover:bg-[#28145E] transition-colors duration-300" onClick={closeDropdown}>
                                    Chat Support
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Start Staking Button */}
                    <div>
                        <Link href="/start-staking">
                            <button className="bg-gradient-to-r from-[#42229D] to-[#470038] text-white px-6 py-2 rounded-md shadow-lg hover:opacity-90 transition-opacity flex items-center">
                                <span>Start Staking</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#140A2F] text-white py-4  px-6 border-black border-[0.5px]">
                    <div className="space-y-4">
                        <div>
                            <button
                                onClick={() => handleDropdown('staking')}
                                className="block w-full text-left px-4 flex items-center justify-between"
                            >
                                <span>Staking</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'staking' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'staking' && (
                                <div className="text-sm ml-3 px-4">
                                    <Link href="/staking-solana" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Staking Solana</Link>
                                    <Link href="/withdraw" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Withdraw</Link>
                                    <Link href="/swap" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Swap</Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => handleDropdown('why-us')}
                                className="block w-full text-left px-4 flex items-center justify-between"
                            >
                                <span>Why Us?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'why-us' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'why-us' && (
                                <div className="text-sm ml-3 px-4">
                                    <Link href="/roadmap" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Roadmap</Link>
                                    <Link href="/whitepaper" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Whitepaper</Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() => handleDropdown('support')}
                                className="block w-full text-left px-4 flex items-center justify-between"
                            >
                                <span>Support</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${activeDropdown === 'support' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'support' && (
                                <div className="text-sm ml-3 px-4">
                                    <Link href="/faq" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">FAQ</Link>
                                    <Link href="/chat-support" className="block py-2 text-[#DEDEDE] hover:bg-[#28145E] transition-colors duration-300 rounded-[3px] px-[10px]">Chat Support</Link>
                                </div>
                            )}
                        </div>

                        <div className="px-4">
                            <Link href="/start-staking">
                                <button className="bg-gradient-to-r from-[#42229D] to-[#470038] text-white px-6 py-2 rounded-md shadow-lg hover:opacity-90 transition-opacity w-full flex justify-center items-center">
                                    Start Staking
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="ml-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
