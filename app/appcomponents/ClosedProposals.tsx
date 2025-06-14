import Image from "next/image"
import LineItem from "./LineItem"
import ComponentContainer from "./ComponentContainer"

const ClosedProposals = () => {
  return (
   <ComponentContainer pad="0px">
        <div className="w-full">
            <div className="w-full h-full py-[20px] border-b border-[#151C23]">
                <div className="w-full flex justify-between items-center px-[16px]">
                    <h1 className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-white align-[cap]">Closed Proposal - 185</h1>
                    <Image src="/info-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt="info icon"/>
                </div>
                <div className="flex items-center w-full mt-[24px] px-[16px] gap-[20px]">
                    <Image src="/closed-prop-donut.svg" width={0} height={0} className="w-[59px] h-[59px]" alt="donut icon"/>
                    <div className="w-full flex flex-col gap-[16px]">
                        <LineItem revColor="#14C784" revType="Passed" revIn="87" revPerc="87.7%"/>
                        <LineItem revColor="#F54842" revType="Failed" revIn="80" revPerc="6.8%"/>
                        <LineItem revColor="#1E80FF" revType="Cancelled" revIn="20" revPerc="5.5%"/>
                    </div>
                </div>
            </div>
            <div className="w-full px-[16px] pt-[24px] pb-[20px]">
                <span className="flex items-center gap-[4px] text-center">
                    <Image src="/fire-icon.svg" width={0} height={0} className="w-[10px] h-[10px] " alt="fire icon"/>
                    <h1 className="text-white font-semibold text-[12px]/[18px] tracking-[-0.25%]">Most successful proposal categories</h1>    
                </span>
                <div className="flex flex-col gap-[32px] mt-[20px]">
                    <LineItem revType="Financial" revIn="4 of 20 passed" revPerc="20% success rate"/>
                    <LineItem revType="Operational" revIn="4 of 20 passed" revPerc="20% success rate"/>
                    <LineItem revType="Community development" revIn="4 of 20 passed" revPerc="20% success rate"/>
                    <LineItem revType="Governance" revIn="4 of 20 passed" revPerc="20% success rate"/>
                </div>
            </div>
        </div>
   </ComponentContainer>
  )
}

export default ClosedProposals