import Image from "next/image";
import { useState } from "react";
import GradientButton from "../Button/GradientButton";

const StakingCard = () => {
  const [activeTab, setActiveTab] = useState("Stake");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Value type");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-[#140A2F] p-6 rounded-lg w-full max-w-md">
      {/* Tab Navigation */}
      <div className="text-sm font-semibold flex">
        <div
          className={`p-[10px] rounded-l-[8px] w-[196px] h-[53px] flex justify-center items-center ${
            activeTab === "Stake"
              ? "bg-[#28145E] text-[#FAFAFA]"
              : "bg-[#241A40] text-[#B599AF]"
          }`}
          onClick={() => setActiveTab("Stake")}
        >
          <p>Stake</p>
        </div>
        <div
          className={`p-[10px] rounded-r-[8px] w-[196px] h-[53px] flex justify-center items-center ${
            activeTab === "UnStake"
              ? "bg-[#28145E] text-[#FAFAFA]"
              : "bg-[#241A40] text-[#B599AF]"
          }`}
          onClick={() => setActiveTab("UnStake")}
        >
          <p>Unstake</p>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Stake" ? (
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-[#FAFAFA] text-sm">
                  Solana staking pool
                </p>
              </div>
              <div className="relative">
                {/* Custom Dropdown */}
                <button
                  onClick={toggleDropdown}
                  className="border border-[#28145E] text-[#FAFAFA] bg-[#140A2F] px-4 py-2 rounded-[8px] text-xs font-semibold flex items-center justify-between gap-3"
                >
                  {selectedOption}
                  <span className="ml-2">
                    {/* {dropdownOpen ? "▲" : "▼"} */}

                    {
                        <Image
                        src="/assets/down_arrow.png"
                        alt="Down Arrow"
                        width={13}
                        height={8}
                      />
                    }
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute mt-2 w-full bg-[#140A2F] p-[12px] space-y-[10px] border border-[#28145E] rounded-[8px] z-10 text-xs font-semibold text-[#FAFAFA]">
                    <div
                      className="px-4 py-2 hover:bg-[#28145E] cursor-pointer rounded-[3px]"
                      onClick={() => handleOptionSelect("Flexible")}
                    >
                      Flexible
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-[#28145E] cursor-pointer rounded-[3px]"
                      onClick={() => handleOptionSelect("Locked")}
                    >
                      Locked
                    </div>
                    
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#B3A7D814] flex justify-between items-center px-[22px] py-[2px] text-[#DDDDDD] rounded-[10px] text-xs mt-5">
                <div>
                    <p>Market</p>
                </div>
                <div>
                    <p>1 BYP = 1.352 SOL</p>
                </div>
            </div>
            <div className="mt-[50px]">
              
                <div className="flex justify-between px-[8px]">
                  <div className="flex text-sm text-[#DDDDDD] gap-2 items-center">
                  <Image
                      src="/assets/solana_logo.png"
                      alt="solana-logo"
                      width={24}
                      height={24}
                    />
                      <div>Stake SOL</div>
                  </div>

                  <div>
                      <p className="text-[#DDDDDDDD] text-sm">
                          <span>Available:</span>
                          <span className="font-semibold">42.50 SOL</span>
                      </p>
                  </div>
                </div>


                <div className="border-[#797979] border-[0.5px] flex h-[49px] items-center rounded-lg overflow-hidden pr-[20px]">
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 text-[#797979] bg-transparent focus:outline-none font-semibold" 
                    placeholder="0.00" 
                    min="0"
                    // style={{ appearance: 'textfield' }}
                  />
                  <button className="bg-[#684EB1] rounded-full w-[54px] h-[33px] font-semibold text-xs text-[#FAFAFA] px-[15px] py-[5px] ml-2">
                    Max
                  </button> 
                </div>

                <div className="text-end text-[#DDDDDDDD] text-xs  px-[8px] mt-2">
                    <p>≈ 0.00 USD</p>
                </div>

                
            </div>

            <div className="mt-[50px]">
              
              <div className="flex justify-between px-[8px]">
                <div className="flex text-sm text-[#DDDDDD] gap-2 items-center">
                <Image
                    src="/assets/byp_logo.png"
                    alt="solana-logo"
                    width={24}
                    height={24}
                  />
                    <div>Receive BYP</div>
                </div>

              
              </div>


              <div className="border-[#797979] border-[0.5px] flex h-[49px] items-center rounded-lg overflow-hidden pr-[20px]">
                <input 
                  type="number" 
                  className="w-full px-4 py-2 text-[#797979] bg-transparent focus:outline-none font-semibold" 
                  placeholder="0.00" 
                  min="0"
                  // style={{ appearance: 'textfield' }}
                />
              </div>

              <div className="text-end text-[#DDDDDDDD] text-xs  px-[8px] mt-2">
                  <p>≈ 0.00 USD</p>
              </div>
            </div>


            <div className="text-[#DDDDDDDD] text-xs mt-[40px] space-y-4">
                  <div className="flex items-center gap-2">
                      <div>Details</div>
                      <hr className="border-[#797979] border-[0.5px] w-full" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>Estimated AYP</div>
                    <div>7%</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>Estimated earn</div>
                    <div>2.29% per month</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>Service fee</div>
                    <div>0.03 SOL</div>
                  </div>
            </div>
           

            <div className="w-full mt-10">
              {/* <GradientButton href="/start-staking" label="Stake" download = {false}/> */}
              
              <button className="bg-gradient-to-r from-[#42229D] to-[#470038] text-white  rounded-[8px] shadow-lg hover:opacity-90 transition-opacity flex items-center w-full h-[50px] justify-center">
                <span>Stake</span>
              </button>
   
            </div>
          </div>
        ) : (
          <div>
            {/* Content for UnStake */}
            <h2 className="text-xl font-bold mb-2">UnStake your tokens</h2>
            <p>Here you can unstake your Solana tokens.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StakingCard;
