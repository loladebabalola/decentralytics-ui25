import Image from "next/image";
import ComponentContainer from "./ComponentContainer";
import lockIcon from "../../public/lock-icon.svg";
import unLockIcon from "../../public/unlock-icon.svg";
import LineItem from "./LineItem";



const VestingTotalDescriptionBar = () => {
  return (
    <div className="w-full h-auto">
        <h2 className="font-semibold text-[14px]/[20px] tracking-[-0.3%] mb-[16px] text-white">Total distribution progress</h2>
        <ComponentContainer pad="32px">
            <div className="flex items-center gap-[16px] w-full  ">
                <Image src={lockIcon} width={0} height={0} className="w-[20px] h-[20px]" alt="lock icon"/>
                <div className="flex flex-col flex-1 gap-[16px] w-full ">
                    <div className="w-full flex gap-[16px] md:justify-between">
                        <div className="flex items-center gap-[8px] xl:gap-[16px] w-[50%] lg:w-[50%] flex-wrap xl:flex-nowrap xl:flex-shrink-0">
                            <LineItem revColor="#1E80FF" revType="Unlocked 25.8%" />
                            <LineItem revColor="#14C784" revType="Next unlock 0.6%" />
                            <LineItem revColor="#FFFFFF" revType="Locked 32%" />
                        </div>
                        <div className="w-1/2 md:w-fit flex justify-end">
                            <LineItem revColor="#FFFFFF" revType="Untracked 48%" />
                        </div>
                    </div>
                    <div className="flex items-center h-[8px] w-full gap-[8px]">
                        <div className="w-[40%] bg-[#1E80FF] h-full rounded-[4px]"/>
                        <div className="w-[5%] bg-[#14C784] h-full rounded-[4px]"/>
                        <div className="w-[15%] bg-white h-full rounded-[4px]"/>
                        <div className="w-[40%] bg-[#70808F] h-full rounded-[4px]"/>
                    </div>
                    <div className="flex items-center justify-between text-white font-semibold align-[cap] tracking-[-0.25%] text-[12px]/[18px]">
                        <p className="">DEC 2.85B - $1.5B</p>
                        <p>DEC 2.7B - $1.48B</p>
                        <p>DEC 4.25B - $4.48B</p>
                    </div>
                </div>
                <Image src={unLockIcon} width={0} height={0} className="w-[20px] h-[20px]" alt="unlock icon"/>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default VestingTotalDescriptionBar