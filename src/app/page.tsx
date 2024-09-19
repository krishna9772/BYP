import GradientButton from "@/components/Button/GradientButton";
import CoinRateChart from "@/components/Chart/CoinRateChart";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/home_main_bg.png)',
          padding: '80px 20%',
          textAlign: 'center'
        }}
      >
        {/* Title Text */}
        <h1

          style={{
            fontSize: '36px', // Adjust as needed
            background: 'linear-gradient(269.57deg, #684EB1 37.06%, #FAFAFA 67.68%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}
        >
          Stake Solana
        </h1>

        {/* Subtitle Text */}
        <h1
          style={{
            fontSize: '36px', // Adjust as needed
            background: 'linear-gradient(90.49deg, #42229D 8.04%, #C7BEE0 63.4%, #8E7AC4 84.85%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}
        >
          Double rewards and plus more coins
        </h1>

        {/* Introductory Text */}
        <div className="text-[#B3A7D8]  mt-4">
          BYP is one of the best decentralized liquid staking protocols for Solana.
        </div>

        {/* Info Cards */}
        <div className="bg-[#42229D] flex flex-col md:flex-row justify-around items-center p-10 mt-[200px] mb-12 gap-8 md:gap-4">
          {/* Reward Info */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-[#351B7E] w-20 h-20 flex items-center justify-center rounded-full mb-4">
              <Image
                src="/assets/reward.png"
                alt="Maximized Rewards"
                width={64}
                height={64}

              />
            </div>
            <p className="text-[#FAFAFA] font-semibold">Maximized Rewards</p>
            <p className="text-[#DDDDDD] max-w-xs">
              Earn higher returns with our competitive staking rates, designed to give you the best value for your SOL investments.
            </p>
          </div>

          {/* Security Info */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-[#351B7E] w-20 h-20 flex items-center justify-center rounded-full mb-4">
              <Image
                src="/assets/security.png"
                alt="Security"
                width={64}
                height={64}

              />
            </div>
            <p className="text-[#FAFAFA] font-semibold">Reliable security</p>
            <p className="text-[#DDDDDD] max-w-xs">
              Top-tier security measures ensure your assets are protected the contribution to stability and growth of  Solana network.
            </p>
          </div>

          {/* Fee Info */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-[#351B7E] w-20 h-20 flex items-center justify-center rounded-full mb-4">
              <Image
                src="/assets/fee.png"
                alt="Low Fees"
                width={64}
                height={64}

              />
            </div>
            <p className="text-[#FAFAFA] font-semibold">Low Fees</p>
            <p className="text-[#DDDDDD] max-w-xs">
              Benefit from minimal fees, ensuring that more of your earnings stay in your pocket while you stake your SOL.
            </p>
          </div>
        </div>
      </div>

      {/* Our Stats Section */}
      <section
        id="our-stats"
        className="text-center flex flex-col items-center justify-center px-[20%]"
        style={{ background: 'linear-gradient(180.09deg, #170C37 0.08%, #42229D 149.64%)' }}
      >
        <div className="flex flex-col items-center py-[100px]">
          <Image
            src="/assets/telescope.png"
            alt="Telescope"
            width={32}
            height={32}
          />
          <div className="text-center mt-4">
            <p className="text-lg text-[#FAFAFA] font-bold">Stake with us to watch your investments grow</p>
            <p className="text-lg text-[#DEDEDE] font-normal mt-2">
              Explore the growing institutions of trusting the BYP for their staking demands. Join in now to watch your investment grow!
            </p>
          </div>
        </div>
        <div >
          <h6 className="text-sm font-normal text-[#DEDEDE] mb-6">Our stats</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">7days average APR</p>
              <p className="text-[#FAFAFA] text-base font-bold">0.40%</p>
            </div>
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">Total value locked</p>
              <p className="text-[#FAFAFA] text-base font-bold">$34,0025</p>
            </div>
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">Yesterday APR</p>
              <p className="text-[#FAFAFA] text-base font-bold">0.03%</p>
            </div>
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">Nodes</p>
              <p className="text-[#FAFAFA] text-base font-bold">200</p>
            </div>
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">Total staker</p>
              <p className="text-[#FAFAFA] text-base font-bold">100+</p>
            </div>
            <div
              className="py-[20px] px-[45px] rounded-[5px] border-[#684EB1] border-[0.5px] flex flex-col items-center"
              style={{
                boxShadow: '0px 4px 9.6px 0px #684EB1 inset',
              }}
            >
              <p className="text-sm font-normal text-[#DEDEDE]">Staked</p>
              <p className="text-[#FAFAFA] text-base font-bold">200,39</p>
            </div>
          </div>
        </div>
       
     
          <div className="w-full py-[62px]">
         
                <CoinRateChart/>
          </div>
   
        <div className="mb-[100px]">
          <GradientButton href="/start-staking" label="Start staking now" download = {false}/>
        </div>
      </section>






      <section
        className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/assets/community_bg.png)',
          padding: '30px 20%',
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-lg mb-[70px] py-[80px]">
          <Image
            src="/assets/discord.png"
            alt="Discord Logo"
            width={32}
            height={32}
            className="mb-4"
          />
          <h6 className="text-lg font-bold mb-2 text-[#FAFAFA]">Become part of our network</h6>
          <p className="text-[#DEDEDE] font-normal text-lg mb-[50px]">
            Experience the benefits of staking with BYP and connect with a dynamic community of forward-thinking investors.
          </p>
          <GradientButton href="/start-staking" label="Join discord community" download = {false}/>
        </div>

       
      </section>

    </div>
  );
};

export default Home;
