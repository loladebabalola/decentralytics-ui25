import Image from "next/image"
import chartIcon from "../../public/chart-icon.svg";
import ComponentContainer from "../ComponentContainer";


const DaoDetailFinRevOverTime = () => {
  return (
    <ComponentContainer pad="32px">
        <div className="flex items-center gap-[4px]">
            <Image src={chartIcon} width={0} height={0} className="w-[20px] h-[20px]" alt="chart icon"/>
            <h1 className="font-bold text-[18px]/[26px] tracking-[-0.5%] align-[cap] text-white">Revenue over time</h1>
        </div>
        <div className="w-full h-auto overflow-x-scroll scrollbar-hide mt-[20px]">
            <div className="h-[336px] w-[568.99px] bg-cover bg-center bg-no-repeat flex items-center" style={{
                backgroundImage: `url('/rev-graph-bg.png')`
            }}>
                <div className="w-[541.43px] h-[258px] mt-[50px] mb-[28px] ml-[27.55px] bg-contain bg-[bottom_bottom] bg-no-repeat" style={{
                    backgroundImage: `url('/rev-graph.png')`
                }}/>
            </div>
        </div>
    </ComponentContainer>
  )
}

export default DaoDetailFinRevOverTime