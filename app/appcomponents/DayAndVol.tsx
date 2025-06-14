import Image from "next/image"
import moneyIn from "../../public/arrow-down.svg";
import moneyOut from "../../public/arrow-right.svg"

const DayAndVol = () => {
    const timeFrame = ["24h","7d","20d","90d", "180d"]
  return (
    <div className="border-t border-b border-[#222B35] w-[95%] mx-auto mt-[16px] py-[16px]">
        <div className="flex justify-around gap-2 items-center mb-[24px]">
            {timeFrame.map((time, idx) => (
                <button 
                key={idx} 
                className={`font-medium text-[11px]/[17px] text-white rounded-lg
                    py-[10px] px-[12px] bg-[#19212A] border border-[#2B3640]
                `}
                >
                    {time}
                </button>
            ))}
        </div>
        <div className="w-full flex justify-center">
            <div className="w-1/2 border-r border-[#222B35]">
                <p className="font-semibold text-[18px]/[26px] text-white">$2.8B</p>
                <span className="flex gap-1">
                    <Image src={moneyIn} width={16} height={16} alt="in" className="w-auto h-auto"/>
                    <p className="text-[12px]/[18px] font-medium text-[#84919F]">In</p>
                </span>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <p className="font-semibold text-[18px]/[26px] text-white">$1.4B</p>
                <span className="flex gap-1">
                    <Image src={moneyOut} width={16} height={16} alt="in" className="w-auto h-auto"/>
                    <p className="text-[12px]/[18px] font-medium text-[#84919F]">out</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default DayAndVol