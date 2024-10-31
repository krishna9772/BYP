"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (

    <footer>
      <div
        className=" py-[100px] mx-auto"
        style={{
          background: 'linear-gradient(180.09deg, #170C37 0.08%, #42229D 149.64%)',
          height: '100%',
        }}
      >

        <div className='flex flex-row justify-center gap-3 items-center'>
          <Image
            src="/assets/certik_logo.png"
            alt="Certik Logo"
            width={32}
            height={32}
          />
          <div className="font-bold text-base text-[#FAFAFA] m-0">
            Audited by Certik
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center lg:px-[20%] mt-[50px]">
          {/* Staking */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/byp_logo.png"
              alt="Company Logo"
              width={90}
              height={60}
            />
          </div>

          <div className='flex flex-col text-center items-center lg:text-start lg:items-start'>
            <h4 className="font-bold mb-2 text-base text-[#FAFAFA]">Staking</h4>
            <ul className="space-y-1 font-normal text-sm text-[#DEDEDE]">
              <li>
                <Link href="/staking-solana" className="hover:underline">Stake Solana</Link>
              </li>
              <li>
                <Link href="/withdraw" className="hover:underline">Withdraw</Link>
              </li>
              <li>
                <Link href="/swap" className="hover:underline">Swap</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className='flex flex-col text-center items-center lg:text-start lg:items-start'>
            <h4 className="font-bold mb-2 text-base text-[#FAFAFA]">Company</h4>
            <ul className="space-y-1 font-normal text-sm text-[#DEDEDE]">
              <li>
                <Link href="/roadmap" className="hover:underline">Roadmap</Link>
              </li>
              <li>
                <Link href="/whitepaper" className="hover:underline">Whitepaper</Link>
              </li>
            </ul>
          </div>


          {/* Support */}
          <div className='flex flex-col  text-center items-center lg:text-start lg:items-start'>
            <h4 className="font-bold mb-2 text-base text-[#FAFAFA]">Support</h4>
            <ul className="space-y-1 font-normal text-sm text-[#DEDEDE]">
              <li>
                <Link href="/faq" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link href="/chat-support" className="hover:underline">Chat Support</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className='flex flex-col text-center items-center lg:text-start lg:items-start'>
            <h4 className="font-bold mb-2 text-base text-[#FAFAFA]">Community</h4>
            <ul className="space-y-1 font-normal text-sm text-[#DEDEDE]">
              <li>
                <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className='flex flex-col  text-center items-center lg:text-start lg:items-start'>
            <h4 className="font-bold mb-2 text-base text-[#FAFAFA]">Legal</h4>
            <ul className="space-y-1 font-normal text-sm text-[#DEDEDE]">
              <li>
                <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center bg-[#42229D] py-4 text-[#DEDEDE] text-sm">
        <p className="text-sm">&copy; BYP {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
