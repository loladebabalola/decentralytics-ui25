import Image from "next/image"
import ComponentContainer from "./ComponentContainer"

const VestingInfo = () => {
  return (
    <ComponentContainer>
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-full gap-[16px]">
                <h3 className="text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium">Vesting information</h3>
                <h1 className="text-[16px]/[24px] tracking-[-0.5%] align-[cap] font-semibold text-white">Links to official documents</h1>
            </div>
            <Image src="/right-caret-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="right icon"/>
        </div>
    </ComponentContainer>
  )
}

export default VestingInfo