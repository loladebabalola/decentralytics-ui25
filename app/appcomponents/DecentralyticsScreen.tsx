import Image from "next/image";
import verifiedIcon from "../../public/verified-icon.svg";
import Link from "next/link";
import { DaoData } from "../utils/interface";
import { OrganizationLists } from "../utils/data";



const DecentralyticsScreen = ({selectedDao}:{selectedDao: DaoData}) => {
    function getCategoryIcon(category: string) {
        return (
            OrganizationLists.filters.find(filter => filter.name === category)?.image ??
            "/infra.png"
        );
    }
    const screenSubs = [
        {name: `${selectedDao.category}`, icon: getCategoryIcon(`${selectedDao.category}`), href: ""},
        {name: `${selectedDao.native_chain}`, icon: "", href: ""},
        {name: "website", icon: "/website-link-icon.svg", href: "/auth/dashboard"}
    ];
    const screenData = [
        {name: "Rank", icon:"" ,value: `${selectedDao.rank}`},
        {name: "Treasury",icon: "", value:`${selectedDao.treasury_value}` },
        {name: "Token holders",icon: "/info-icon.svg", value:`${selectedDao.token_holders}`},
        {name: "Voters",icon: "", value: `${selectedDao.votes}`},
        {name: "Proposals",icon: "", value:`${selectedDao.proposals}` },
        {name: "Discord",icon: "", value:"190K" },
        {name: "Risk Level",icon: "/info-icon.svg", value:"Low" },
    ]
    const screenIcons = [
        {name: "discord", icon: "/discord-icon.svg"},
        {name: "github", icon: "/github-icon.svg"},
        {name: "twitter", icon: "/twitter-icon.svg"}
    ]
  return (
   <section className="w-full border border-[#222B35] mt-[32px] rounded-[8px]">
        <div className="w-full p-[20px]">
            <div className={`w-[64px] h-[64px] bg-[${selectedDao.bgColor}]/[40%] rounded-[50%] flex justify-center items-center`}>
                <Image
                    src={selectedDao.dao_logo}
                    width={0}
                    height={0}
                    alt="decentralytics avatar"
                    className="w-[39.35px] h-[39.37px]"
                />
            </div>
            <div>
                <div className="flex items-center gap-1 w-full">
                    <p className="text-white text-[22px]/[29px] font-bold align-[cap] tracking-[-0.6%]">{selectedDao.dao_name}</p>
                    <Image
                        src={verifiedIcon}
                        width={0}
                        height={0}
                        alt="verified icon"
                        className="w-[16.67px] h-[16.67px]"
                    />
                </div>
                <div className="w-full mt-[16px]">
                    <div className="flex gap-[4px] w-fit">
                        {screenSubs.map((item, idx)=> (
                            <Link 
                            key={idx}
                            href={item.href ? item.href : ""}
                            className={idx !== 2 ? `text-white bg-[#151C23] font-semibold text-[12px]/[18px] tracking-[-0.25%] align-[cap] py-[4px] px-[10px] flex items-center gap-[4px] rounded-[18px]`:
                                `text-[#1E80FF] bg-[#529DFF14] font-semibold text-[12px]/[18px] tracking-[-0.25%] align-[cap] py-[4px] px-[10px] flex items-center gap-[4px] rounded-[18px]`}>
                                {item.icon !== "" &&
                                 <Image src={item.icon} width={0} height={0} className="w-[16px] h-[18px]" alt={`${item.name}'s icon`}/>
                                }
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mt-[24px]">
                <div className="w-full sm:w-1/3">
                    <p className="text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%] text-[#84919F]">
                        Maker is a pioneer financial DAO based on its $US-pegged Dai stablecoin, which has become a crypto pillar. Backing numerous crypto projects, Maker presents an especially dynamic development graph and vibrant community governance.
                    </p>
                </div>
                <div className="flex gap-[16px] items-center mt-2 w-fit">
                    {screenIcons.map((icon, idx) => <Image key={idx} src={icon.icon} className="w-[17.5px] h-[20px]" width={0} height={0} alt={`${icon.name}'s icon`}/>)}
                </div>
            </div>
        </div>
        <div className="w-full border-t border-b border-[#222B35]">
            <div
             className="mt-[20px] mb-[32px] w-full grid grid-cols-3 space-y-[10px] place-items-center md:grid-cols-4 md:w-full lg:flex sm:items-center group lg:w-fit ">
                {screenData.map((item, idx)=>(
                    <div 
                    key={idx}
                    className="w-full lg:w-fit px-[10px] sm:px-[32px] flex flex-col justify-center items-center gap-[16px] border-r border-[#222B35] last:border-none first:pl-[20px] first:pr-[32px]">
                        <div className="flex justify-center items-center w-fit gap-[8px]">
                            <p className="text-[#84919F] text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]">{item.name}</p>
                            {item.icon && <Image src={item.icon} width={0} height={0} className="w-[12px] h-[12px]" alt={`${item.name} info icon`}/>}
                        </div>
                        <p className="font-bold text-[22px]/[29px] tracking-[-0.6px] align-[cap] text-white">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
   </section>
  )
}

export default DecentralyticsScreen;

//  const screenIcons = [
//     {name: "discord", icon: "/discord-icon.svg"},
//     {name: "github", icon: "/github-icon.svg"},
//     {name: "twitter", icon: "/twitter-icon.svg"}
// ]
//  const screenSubs = [
//     {name: `${category}`, icon: "/infra.png", href: ""},
//     {name: "Ethereum", icon: "", href: ""},
//     {name: "website", icon: "/website-link-icon.svg", href: "/auth/dashboard"}
// ]

//  const screenData = [
//     {name: "Rank", icon:"" ,value: "2"},
//     {name: "Treasury",icon: "", value:"$34.6B" },
//     {name: "Token holders",icon: "/info-icon.svg", value:"$34.6B" },
//     {name: "Voters",icon: "", value:"86K" },
//     {name: "Proposals",icon: "", value:"187" },
//     {name: "Discord",icon: "", value:"190K" },
//     {name: "Risk Level",icon: "/info-icon.svg", value:"Low" },
// ]