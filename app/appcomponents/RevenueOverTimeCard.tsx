import Image from "next/image"
import ComponentContainer from "./ComponentContainer"
import CardBtn from "./CardBtn"
import { RevOverTimeCardProps } from "../utils/interface"


const RevenueOverTimeCard = ({
    chartIcon, graphBg, 
    graphImg, bgWidth,
    bgHeight, graphWidth, 
    graphHeight ,gap,
    revCardTitle, classForGraph
}: RevOverTimeCardProps) => {
  return (
    <ComponentContainer hx="h-full" direction="vertical" gap={0}>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
                <Image src={chartIcon} width={0} height={0} className="w-[20px] h-[20px]" alt="chart icon"/>
                <h1 className="font-bold text-[18px]/[26px] tracking-[-0.5%] align-[cap] text-white">{revCardTitle}</h1>
            </div>
            <div className="flex items-center gap-[8px]">
                <CardBtn btnName="All ecosystem"/>
                <CardBtn btnName="All sectores"/>
            </div>
        </div>
        <div className={`w-full h-auto overflow-x-scroll scrollbar-hide mt-[${gap}px]`}>
            <div className="bg-contain bg-center bg-no-repeat flex items-center" style={{
                backgroundImage: `url(${graphBg})`,
                width: `${bgWidth}px`,
                height: `${bgHeight}px`
            }}>
                <div 
                className={`${classForGraph}  bg-contain bg-center bg-no-repeat`} style={{
                    backgroundImage: `url(${graphImg})`,
                    width: `${graphWidth}px`,
                    height: `${graphHeight}px`
                }}/>
            </div>
        </div>
    </ComponentContainer>
  )
}

export default RevenueOverTimeCard