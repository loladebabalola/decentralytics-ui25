import Image from "next/image";
import { AssetsTokenList } from "../utils/data"
import AssetTableHead from "./AssetTableHead"
import ComponentContainer from "./ComponentContainer"


const AssetsTable = () => {
    const tableClass = "text-white text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]";
    function truncateAddress(address: string, start = 4, end = 6): string {
        if (!address) return '';
        return `${address.slice(0, start)}...${address.slice(-end)}`;
    }

  return(
    <ComponentContainer>
        <div className="w-full h-auto overflow-x-scroll scrollbar-hide"> 
            <span>
                <h1 className="w-full h-auto font-semibold text-[16px]/[24px] tracking-[0.5%] align-[cap] text-white">Assets</h1>
            </span>
            <table className="mt-[24px] mb-[24px] min-w-[699px] md:w-full">
                <thead>
                    <AssetTableHead/>
                </thead>
                <tbody>
                    {AssetsTokenList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#151C23] border-t border-[#19212A] cursor-pointer" >
                        <td className="w-[139.8px] py-[10px]">
                            <div className="flex items-center gap-[4px] w-full">
                                <Image src={item.logo} width={0} height={0} className="w-[24px] h-[24px]" alt={`${item.token}'s logo`}/>
                                <p className={tableClass}>{item.token}</p> 
                            </div>
                        </td>
                        <td className="w-[139.8px] py-[10px]">
                        <p className={tableClass}>{item.quantity}</p>
                        </td>
                        <td className="w-[139.8px] py-[10px]">
                         <p className={tableClass}>{item.price}</p>
                        </td>
                        <td className="w-[139.8px] py-[10px]">
                        {item.changeDirection === "down" ?
                            (
                            <div className="flex flex-col w-full">
                                <p className={tableClass}>{item.value}</p>
                                <span className="flex items-center gap-1">
                                    <Image src="/deltaDown.png" width={0} height={0} className="w-[11.67px] h-[6.67px]" alt={`trend logo`} />
                                    <p className="text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%] text-[#F54842]">{item.change24h}<span className={`text-[#84919F] ml-[2px]`}>24h</span></p>
                                </span>
                            </div>
                            ) :(
                            <div className="flex flex-col w-full">
                                <p className={tableClass}>{item.value}</p>
                                <span className="flex items-center gap-1">
                                    <Image src="/deltaUp.svg" width={0} height={0} className="w-[11.67px] h-[6.67px]" alt={`trend logo`} />
                                    <p className="text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%] text-[#14C784]">{item.change24h}<span className={`text-[#84919F] ml-[2px]`}>24h</span></p>
                                </span>
                            </div>
                            )
                        }
                        </td>
                        <td className="w-[139.8px] py-[10px]">
                            <p className={tableClass}>
                                {item.owners.length > 1 ? (
                                <>
                                    <span>{truncateAddress(item.owners[0])}</span>
                                    <span className="text-muted py-[6px] px-[8px]">+{item.owners.length - 1}</span>
                                </>
                                ) : (
                                    <span>{truncateAddress(item.owners[0])}</span>
                                )}

                            </p>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </ComponentContainer>
  )
}

export default AssetsTable