import Image from "next/image";
import { useState } from "react";


interface PrivateFarmProps {
    publicKey: string;
}
const PrivateFarm: React.FC<PrivateFarmProps> = ({ publicKey }) => {


    return (
        <div className="relative">
            {!publicKey ? (
                <div className="absolute inset-0 bg-[#140A2FD9] rounded-[10px] z-10 flex justify-center items-center">
                    <div className="bg-[#140A2F] w-[197px] h-[80px] flex flex-col justify-center items-center gap-[9px] rounded-[8px]">

                    <Image
                        src="/assets/sad.png"
                        alt="Sad"
                        width={24}
                        height={24}
                      />
                        <div className="text-[#DDDDDD] text-xs">Staked at first to view this!</div>
                    </div>
                </div>
            ) : null}

            <div className="bg-[#140A2F4D] py-[40px] px-[31px] text-[#FAFAFA] space-y-[20px] w-[370px] rounded-[10px]">
                <div className="text-sm font-bold">Private Farm</div>

                <div className="bg-[#351B7E33] py-[15px] px-[30px] space-y-[12px] rounded-[10px]">
                    <div className="text-sm font-semibold ">Status</div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Your first deposit</div>
                        <div>5 days ago</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Staked</div>
                        <div>20.2 SOL</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Value type</div>
                        <div className="text-[#E0C32C]">Flexible</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Today reward</div>
                        <div className="text-[#10F026]">+ 0.2 BYP</div>
                    </div>
                </div>

                <div className="bg-[#351B7E33] py-[15px] px-[30px] space-y-[12px] rounded-[10px]">
                    <div className="text-sm font-semibold ">Status</div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Your first deposit</div>
                        <div>-</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Staked</div>
                        <div>-</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Value type</div>
                        <div className="text-[#E0C32C]">Locked</div>
                    </div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between">
                        <div>Today reward</div>
                        <div>-</div>
                    </div>
                </div>

                <div className="bg-[#351B7E33] py-[15px] px-[30px] space-y-[12px] rounded-[10px]">
                    <div className="text-sm font-semibold ">Reward</div>

                    <div className="flex text-xs text-[#DDDDDD] justify-between items-center">
                        <div>5.8 BYP =  2.30 USD</div>
                        <div className="text-[#B3A7D8] flex items-center">
                            <div className="underline">Withdraw</div>
                            <div>

                                <Image
                                    src="/assets/withdraw_icon.png"
                                    alt="Withdraw"
                                    width={24}
                                    height={24}
                                />
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default PrivateFarm;