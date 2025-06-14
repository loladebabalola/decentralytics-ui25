import Image from "next/image"
import ComponentContainer from "./ComponentContainer"

const NextUnlockEvent = () => {
  return (
    <div>
        <h1 className="font-semibold text-[14px]/[20px] tracking-[-0.3%] align-[cap] text-white mb-[24px]">Next Unlock event</h1>
        <ComponentContainer>
            <div className="w-full flex flex-col gap-[64px]">
                <div>
                    <p className="text-[12px]/[18px] tracking-[-0.25%] text-white align-[cap] font-semibold mb-[20px]">Unlock <span className="text-[#1E80FF]">2 rounds</span></p>
                    <p className="text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white mb-[16px]">DEC 82.6M - <span className="text-[#84919F]">0.94% of Total Supply</span></p>
                    <p className="text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white">$49.8M - <span className="text-[#84919F]">0.94% of Market Cap</span></p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-[16px]">
                        <h1 className="text-[34px]/[41px] font-bold align-[cap] tracking-[-0.7%] text-white">57</h1>
                        <p className="text-white text-[12px]/[18px] tracking-[-0.25%] font-medium align-[cap]"> days remaining</p>
                    </div>
                    <div className="flex flex-col gap-[16px] items-end">
                        <Image src="/unlock-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="unlock icon"/>
                        <p className="text-[#84919F] text-[12px]/[18px] tracking-[-0.25%] align-[cap] font-medium">Unlocks Sep 16, 2025</p>
                    </div>
                </div>
                <div className="w-full">
                    <span className="flex w-full gap-[4px]">
                        <p className="text-[#1E80FF] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium">Share information</p>
                        <Image src="/share-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="share icon"/>
                    </span>
                </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default NextUnlockEvent