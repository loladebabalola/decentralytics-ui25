import Image from "next/image"
import ComponentContainer from "./ComponentContainer"

const FinanceTreasuryDix = () => {
    const fontClass = "text-white text-[12px]/[18px] tracking-[-0.25%] align-[cap] font-semibold";
  return (
    <ComponentContainer pdx="32px" pdy="24px" hx="h-[308px]">
        <div className="w-full ">
            <div className="flex justify-between items-center">
                <h1 className="text-white font-bold text-[18px]/[26px] align-[cap] tracking-[-0.5%] h-[9px]">Treasury distribution</h1>
                <div className="flex gap-[8px] items-center">
                    <button className="flex items-center gap-[4px] bg-[#151C23] py-[10px] px-[12px] text-white rounded-[10px] text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%]">
                        All categories
                        <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[18px] h-[18px]" alt="caret icon down"/>
                    </button>
                    <button className="flex items-center gap-[4px] bg-[#151C23] py-[10px] px-[12px] text-white rounded-[10px] text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%]">
                        All sectors
                        <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[18px] h-[18px]" alt="caret icon down"/>
                    </button>
                </div>
            </div>
            <div className="flex items-center w-full justify-between mt-[16px]">
                <div className="w-[151px] h-[151px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/finance-distribution-piechart.svg)`}} />
                <div className=" w-[329px] overflow-x-scroll scrollbar-hide">
                    <table className="w-full border-separate border-spacing-y-[10px] border-spacing-x-[0px]">
                        <thead>
                            <tr className="text-[#84919F] font-semibold text-[12px]/[18px] align-[cap] leadin-none">
                                <td>Assets Type</td>
                                <td>Value</td>
                                <td className="text-right">Percentage</td>
                            </tr>
                        </thead>
                        {FinTDxData.map((item, idx) =>(
                        <tbody key={idx}>
                            <tr className={fontClass}>
                                <td>
                                    <div className="flex gap-[4px] items-center">
                                        <div className="w-[8px] h-[8px] rounded-[2px]" style={{backgroundColor: `${item.color}`}}/>
                                        <p>{item.name}</p>
                                    </div>
                                </td>
                                <td>
                                    {item.value}
                                </td>
                                <td className="text-right">
                                    {item.percentage}
                                </td>
                            </tr>  
                          
                        </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    </ComponentContainer>
  )
}

export default FinanceTreasuryDix;

const FinTDxData = [
    {name: "Stable coins", color: "#1E80FF", value: "$2.2B", percentage: "-"},
    {name: "NFTs", color: "#FEB752", value: "$2.2B", percentage: "10%"},
    {name: "Volatile assets", color: "#14C784", value: "$2.2B", percentage: "5%"},
    {name: "Asset Type", color: "#61D4E5", value: "$2.2B", percentage: "7%"},
    {name: "Asset Type", color: "#AF7AFA", value: "$2.2B", percentage: "-"},
    {name: "Asset Type", color: "#FA7AC5", value: "$2.2B", percentage: "1%"},
]