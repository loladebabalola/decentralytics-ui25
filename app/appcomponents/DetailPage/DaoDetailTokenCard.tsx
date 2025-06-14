import { useDaoStore } from "@/app/utils/stores/daoStore";
import Image from "next/image"
import ComponentContainer from "../ComponentContainer";

type DetailTokenProps = {
    headerIcon: string,
    tokenType: string,
    deltaIcon: string,
    graphBg: string,
    graphModel?: string,
    totalPrice: string,
    deltaPrice: string,
    bgWidth?: string,
    bgHeight?:string,
    cardHeight?:string
}
const DaoDetailTokenCard = ({
    headerIcon, 
    tokenType, 
    deltaIcon, 
    graphBg, 
    graphModel,
    totalPrice,
    deltaPrice,
    bgHeight,
    bgWidth,
    cardHeight
}: DetailTokenProps) => {
    const dao = useDaoStore(state => state.selectedDao);
  return (
    <ComponentContainer pad="32px" >
        <div className={`w-full ${cardHeight ? `h-[${cardHeight}]`: `max-h-[541px]`}`}>
            <div className="w-full flex justify-between items-center ">
                <div className="w-fit flex items-center gap-[4px]">
                    <Image src={`${headerIcon}`} width={0} height={0} className="w-[20px] h-20px" alt="silver coin"/>
                    <h1 className="text-white text-[18px]/[26px] tracking-[-0.5%] font-exta">{tokenType}</h1>
                </div>
                <Image src="/info-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="info icon"/>
            </div>
            <div className="w-full mt-[48px]">
                <div className="flex items-start gap-[4px] w-full">
                    <Image src={`${dao ? dao.dao_logo : '/Bitcoin.svg'}`} width={0} height={0} className="w-[20px] h-[20px]" alt="token icon"/>
                    <div className="flex flex-1 justify-between gap-[4px]">
                       <div>
                            <h3 className="font-medium font-[14px]/[20px] tracking-[-0.3%] align-[cap] text-[#84919F]">Token name</h3>
                            <h1 className="font-bold text-[22px]/[29px] tracking-[-0.6%] align-[cap] text-white"> {dao?.dao_name.slice(0, 3).toUpperCase()}</h1>
                            <span className="flex items-center gap-[2px] mt-[15px]">
                                <span className="text-[#84919F] text-[12px]/[18px] align-[cap] font-medium tracking-[-0.25%]">{totalPrice}</span>
                                <span className="flex items-center gap-[2px]">
                                    <Image src={`${deltaIcon}`} width={0} height={0} className="w-[10px] h-[120x]" alt="trend icon"/>
                                    <p className={`${deltaIcon.includes('deltaDown') ? `text-[#F54842]` : `text-[#14C784]` } text-[12px]/[18px] tracking-[-0.25%] font-medium align-[cap]`}>{deltaPrice}</p>
                                </span>
                            </span>
                        </div>
                        <div className="text-right">
                            <h3 className="font-medium font-[14px]/[20px] tracking-[-0.3%] align-[cap] text-[#84919F]">Amount issued</h3>
                            <h1 className="font-bold text-[22px]/[29px] tracking-[-0.6%] align-[cap] text-white">120K</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-auto overflow-x-scroll scrollbar-hide ">
                <div className={`${bgHeight ? `h-[${bgHeight}]` : `h-[336px]`} ${bgWidth ? `w-[${bgWidth}]` : `w-[619.99px]`} bg-cover bg-center bg-no-repeat flex items-center`} style={{
                    backgroundImage: `url(${graphBg})`
                }}>
                   {graphModel && 
                     <div className="w-[593.07px] h-[258px] mt-[50px] mb-[28px] ml-[26.93px] bg-contain bg-[bottom_bottom] bg-no-repeat" style={{
                        backgroundImage: `url(${graphModel})`
                    }}/>
                   }
                </div>
            </div>
        </div>
   </ComponentContainer>
  )
}

export default DaoDetailTokenCard