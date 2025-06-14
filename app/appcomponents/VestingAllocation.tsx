import ComponentContainer from "./ComponentContainer"
import LineItem from "./LineItem";


const VestingAllocation = () => {
    const tClass = 'font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white';
    const hClass = 'font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-[#84919F]'
  return (
    <div>
        <div className="flex justify-between items-center text-white text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-semibold mb-[16px]">
            <h2>Allocation</h2>
            <p>Max supply: DEC 10.00B</p>
        </div>
        <ComponentContainer pad="32px">
            <div className="flex flex-col w-full gap-[30px] xl:gap-[60px] lg:flex-row lg:items-center">
                <div className="bg-center bg-cover bg-no-repeat w-[213px] h-[213px] mx-auto"
                 style={{backgroundImage: `url(/vesting-pie-chart.png)`}}
                />
                <div className="flex-1 overflow-x-scroll scrollbar-hide">
                    <table className="min-w-full border-separate border-spacing-y-[16px] border-spacing-x-2">
                        <thead>
                            <tr className="w-full">
                                <td className={`w-[365px] ${hClass}`}>Name</td>
                                <td className={`w-[48px] ${hClass}`}>Total</td>
                                <td className={`w-[56px] ${hClass} text-right`}>Unlocked</td>
                                <td className={`w-[44px] ${hClass} text-right`}>Locked</td>
                            </tr>
                        </thead>
                        <tbody className="">
                            {AllocationData.map((aloc, idx)=>(
                                <tr key={idx}>
                                    <td className={`w-[365px]  ${tClass}`}> 
                                        <LineItem revColor={aloc.color} revType={aloc.name}/>    
                                    </td>
                                    <td className={`w-[48px] ${tClass}`}>
                                        {aloc.total}
                                    </td >
                                    <td className={`w-[56px] ${tClass} text-right`}>
                                        {aloc.unlocked}
                                    </td>
                                    <td className={`w-[44px] ${tClass} text-right`}>
                                        {aloc.Locked}
                                    </td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default VestingAllocation;

export const AllocationData = [
    {
        name: "DAO Treasury",color: "#1E80FF", total: 20, unlocked: 0, Locked: 20
    },
    {
        name: "Team and Advisors",total: 10,color: "#FEB752", unlocked: 0, Locked: 20
    },
    {
        name: "Investors",total: 10,color: "#14C784", unlocked: 0, Locked: 20
    },
    {
        name: "Airdrop",total: 10,color: "#14C784", unlocked: 0, Locked: 20
    },
    {
        name: "Decentralytics Foundation",total: 3,color: "#AF7AFA", unlocked: 0, Locked: 3
    },
    {
        name: "DAO in ecosystem",total: 2,color: "#AF7AFA", unlocked: 1, Locked: 1
    },
]