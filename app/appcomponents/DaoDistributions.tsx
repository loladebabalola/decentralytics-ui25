import Image from "next/image";
import { RangeProps } from "../utils/interface";
import CaretIcon from "../../public/caret-down-icon.svg";
import { DaoPlatforms } from "../utils/data";


const DaoDistributions = () => {
  return (
    <div className="w-full h-auto p-[20px] rounded-[12px] bg-[#11171D]">
        <span className="w-full flex justify-between">
            <h2 className="font-semibold text-[16px]/[24px] text-white">DAO Distributions</h2>
            <div className="flex gap-[8.5px] bg-[#151C23] rounded-[10px] py-[10px] px-[12px]">
                <p className="font-medium text-[12px]/[18px] tracking-[-0.25%] text-white">Platform</p>
                <Image src={CaretIcon} width={9} height={5} className="w-auto h-auto" alt="DAO platform caret down icon"/>
            </div>
        </span>
        <div className="w-full mt-[48px] flex flex-col h-full">
            <BarRange year="2024" first={25} second={25} third={25} fourth={25}/>
            <BarRange year="2023" first={40} second={40} third={10} fourth={10}/>
            <BarRange year="2022" first={35} second={30} third={25} fourth={10}/>
            <BarRange year="2021" first={50} second={30} third={10} fourth={10}/>
            <BarRange year="2020" first={50} second={35} third={5} fourth={15}/>
        </div>
        <div className="mt-[32px] flex w-full flex-wrap gap-[16px]">
            {DaoPlatforms.map((platform, idx) => (
                <KeyHolder
                    key={idx}
                    color={platform.color}
                    name={platform.name}
                />
            ))}
        </div> 

    </div>
  )
}

export default DaoDistributions;


export const BarRange = ({first,second,third,fourth,year}: RangeProps) =>{
    return(
        <div className="w-full h-auto flex items-center gap-[20px]">
            <p className="text-[#84919F] text-[11px]/[17px] font-normal">{year}</p>
            <div className="w-full py-[16px] border-t-2  border-dotted border-[#19212A]">
                <div className="w-full h-[16px] flex items-center">
                    <div className={`bg-[#7AB4FF] h-[16px] rounded-l-[6px]`} style={{width: `${first}%`}} />
                    <div className={`bg-[#9AE3EF] h-[16px]`} style={{width: `${second}%`}} />
                    <div className={`bg-[#4B85D2] h-[16px]`} style={{width: `${third}%`}} />
                    <div className={`bg-[#2B3640] h-[16px] rounded-r-[6px]`} style={{width: `${fourth}%`}} />
                </div>
            </div>
        </div>
    )
}

export const KeyHolder = ({color, name}:{color:string, name: string}) =>{
    return(
        <div className="flex w-fit gap-[4px] items-center text-white">
            <div className="w-[8px] h-[8px] rounded-[2px]" style={{backgroundColor: `${color}`}}/>
            <p className="font-medium text-[12px]/[18px] tracking-[-0.25%]  align-[cap]">{name}</p>
        </div>
    )
}