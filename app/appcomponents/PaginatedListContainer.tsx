"use client";
import Image from "next/image";
import { usePagination } from "../utils/hooks/usePagination";

type PaginatedListProps<T> = {
    cardHeader: string,
    list: T[],
    renderItem: (item: T, index: number) => React.ReactNode
    otherClasses?: string,
    pageMax?: number,
    listGap?: string,
}

export const PaginatedListContainer = <T, > ({otherClasses, cardHeader, list, renderItem, pageMax, listGap}: PaginatedListProps<T>) => {
    const { 
    paginatedData,
    showAll,
    toggleShowAll
} = usePagination(list, pageMax);
  return (
   <div className="w-full">
        <div className="flex items-start justify-between px-[20px] w-full">
            <h1
                className="font-bold text-[18px]/[26px] leading-none  tracking-[-0.5%] align-[cap] text-white"
                style={{verticalAlign: "cap"}}
            >{cardHeader}</h1>
            <div className="gap-[12px] flex flex-col md:flex-row items-center">
                
                <span className="flex leading-none items-center bg-[#151C23] rounded-[10px] py-[10px] px-[12px] gap-[10px] text-white font-medium text-[12px]/[18px] tracking-[-0.25%]">
                    All ecosystem
                    <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[18px] h-[18px]" alt="caret icon down"/>
                </span>
                

                <span className="flex items-center bg-[#151C23] rounded-[10px] py-[10px] px-[12px] gap-[10px] text-white font-medium text-[12px]/[18px] leading-none tracking-[-0.25%]">
                    All sectors
                    <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[18px] h-[18px]" alt="caret icon down"/>
                </span>
               
            </div>
        </div>
        <div className={`${otherClasses ? otherClasses : `w-full h-[320px]`} flex flex-col gap-[${listGap ? listGap : "18px"}] px-[20px] mt-[24px] mb-[19px] overflow-y-scroll scrollbar-hide`}>
            {paginatedData.map((item, index) => renderItem(item, index))}   
        </div>
        <div className="w-full flex justify-center items-end border-t border-[#151C23]">   
            <button className="text-[14px]/[20px] mt-[20px] leading-none font-bold align-[cap] tracking-[-0.3%] text-white cursor-pointer"
                onClick={toggleShowAll}
            >
                {showAll ? "See less DAOs" : "See more DAOs"}
            </button>  
        </div>
       
    </div>
  )
}

