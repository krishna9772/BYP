"use client";

import PrivateFarm from "@/components/Staking/PrivateFarm";
import StakingCard from "@/components/Staking/StakingCard";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
const StakingSolana = () => {
    return(
        <div style={{background: "linear-gradient(180deg, #140A2F 0%, #42229D 100%)" , paddingRight : '20%' , paddingLeft : '20%' , 
        }} className="pb-[100px] pt-[15px]">
            <div>
                <div className="flex justify-end items-start">
                    <WalletMultiButton/>
                    {/* <div>
                      
                    <Image
                        src="/assets/wallet.png"
                        alt="Wallet"
                        width={20}
                        height={18}
                      />
                    </div> */}
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                {/* Staking Card */}
                <div className="lg:w-1/2">
                    <StakingCard />
                </div>

                {/* Private Farm - it will auto-adjust its height */}
                <div className="lg:w-1/2">
                    <PrivateFarm />
                </div>
                </div>
            </div>
        </div>
    )
}

export default StakingSolana;