import Image from "next/image";
import { TrifectaDataProps } from "../utils/interface";
import { TrifectaData } from "../utils/data";


const DAOTrifectaList = () => {
    return (
        <div className="flex flex-row w-full px-[24px] h-[360px] md:px-[24px] md:flex-col md:h-fit  mt-[135px]">   
            <div className="h-full w-[2px] md:h-[2px] md:w-full multi-gradient md:md-multi-gradient" 
            />
            <div className="h-auto w-full  xl:w-[90%] xl:mx-auto  md:h-full">

                <div className="w-full h-auto mt-[64px] 
                md:mt-0 flex flex-col gap-[40px]
                md:flex-row md:gap-0 md:gap-2 xl:gap-[83px]
                ">
                    {TrifectaData.map((item, index) => (
                        <DAOTrifectaChild key={index} 
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DAOTrifectaList;

export const DAOTrifectaChild = ({title, description, icon}:  TrifectaDataProps) => {
    return (
        <div className="flex items-start gap-[20px] -ml-4 
        md:ml-0 md:-mt-12 h-[62px] md:h-[133px]
        md:flex-col md:w-[33.33%] 
        xl:w-[330px] md:gap-[32px] ">
            <Image src={icon}
            alt="DAO Trifecta Child"
            width={28}
            height={28}
            />
            <div className="flex flex-col justify-between text-left w-full h-auto">
                <h1 className="text-white text-[16px] leading-[24px] tracking-[-0.4%] font-bold">
                    {title}
                </h1>
                <p className="text-[#84919F] text-[14px] leading-[20px] tracking-[-0.3%] font-medium">
                    {description}
                </p>
            </div>
        </div>
    )
}
