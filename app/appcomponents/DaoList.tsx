import Image from "next/image"
import { DaoData } from "../utils/interface"

interface DaoListProps{
    dao: DaoData
}

export const DaoList = ({dao}: DaoListProps ) => {
  return (
    <div key={dao.rank} className="flex justify-between items-center">
        <div className="flex items-center gap-[12px]">
            <span className="p-5 rounded-[50%] flex justify-center items-center leading-none w-[20px] h-[20px] bg-[#151C23] text-white font-semibold tracking-[-0.22%] text-[11px]/[17px] align-[cap]">
                {dao.rank}
            </span>
            <div className="flex items-center gap-[12px]">
                <Image 
                src={dao.dao_logo} 
                width={0} height={0}
                className="w-[40px] h-[40px]"
                alt={`${dao.dao_name}'s logo`}
                />
                <span className="flex flex-col gap-[8px]">
                    <p className="text-white font-bold text-[14px]/[20px] tracking-[-0.3%] align-[cap] leading-none">{dao.dao_name}</p>
                    <span className="bg-[#151C23] p-[8px] rounded-[14px] text-[#84919F] font-medium text-[12px]/[18px] tracking-[-0.25%] leading-none align-[cap]">
                        <p className="leading-none">{dao.category}</p>
                    </span>
                </span>
            </div>
        </div>
        <div>
            <p className="text-white align-[cap] text-[14px]/[20px] leading-none tracking-[-0.3%] font-bold">{`${dao.treasury_value} 0.00%`}</p>
        </div> 
    </div>
  )
}

