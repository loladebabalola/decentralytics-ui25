"use client"

import { useState } from "react"
import GraphModel from "./GraphModel";

const Financials = () => {
    const [currentFin, setCurrentFin] = useState("AUM");
    const financials = ["AUM", "Stablecoins", "Native tokens", "Other tokens"];
    const handleSwitchTab = (tab: string) =>{
        setCurrentFin(tab);
    }
  return (
    <div className="h-auto w-full md:w-[60%] xl:w-[75%] p-[24px]">
        <h3 className="text-white mb-[24px] font-semibold text-[14px]/[20px] align-[cap] tracking-[-0.3%]">Financials</h3>
        <div>
            {financials.map((finance, idx)=> (
                <button 
                key={idx} 
                className={`text-[12px]/[18px] cursor-pointer font-normal rounded-[10px] bg-[#151C23] py-[10px] px-[12px] text-white  
                    ${currentFin === finance? `border-[1.3px] border-[#2B3640] `:`border-none`}`}
                onClick={()=>handleSwitchTab(finance)}
                > 
                    {finance}
                </button>
            ))}
        </div>
        <div className="w-full mt-[32px] h-auto overflow-x-scroll scrollbar-hide ">
           <GraphModel graphBg="/aum-graph-bg.png" graphModel="/aum-graph-model.png"/>
        </div>
    </div>
  )
}

export default Financials