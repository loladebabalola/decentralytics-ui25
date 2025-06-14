"use client";
import Image from "next/image";
import {OrganizationLists } from "../utils/data";
import {useState, useTransition } from "react";
import OrgHeader from "./OrgHeader";
import OrgTableHeaders from "./OrgTableHeaders";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
const OrganizationDashboardPanel = () => {
  const [showTab, setShowTab] = useState<string>("All");
  const tableClass = "text-white text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]";
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const filteredDaos = showTab === "All"
  ? OrganizationLists.daos
  : OrganizationLists.daos.filter(data => data.category === showTab);

  const handleTabSwitch = (activeTab: string) => {
    setShowTab(activeTab);

  };
  const handleTransition = (name: string) => {
     startTransition(() => {
      router.push(`/auth/dao/dao-detail/${name}/`);
    });
  };
  return (
    <section className="w-full p-[20px] bg-[#11171D] rounded-[12px]">
      <div className="w-full h-auto">
        <OrgHeader/>
        <div className="mt-[24px] w-full mb-[12px]">
           {/* {filter keys for Organization Panel} */}
           <div className="flex gap-[8px] flex-wrap">
            {OrganizationLists.filters.map((filter, idx) =>(
              <button
              key={idx}
              className={`flex bg-[#151C23] w-fit gap-[4px] rounded-[18px] pl-[10px] pr-[12px] py-[6px] cursor-pointer`}
              onClick={()=> handleTabSwitch(filter.name)}
              >
                {filter.image !== "" ?
                 ( <Image src={filter.image} width={18} height={18} alt={`${filter.name}'s icon`}/>)
                  : (<></>)
                }
                <p className="text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%] text-white">{filter.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          {isPending && <div className="w-full h-full flex justify-center items-center">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          }
          {!isPending && (
          <table className="w-[1344px]">
            <thead>
              <OrgTableHeaders/>
            </thead>
            <tbody>
              {filteredDaos.length === 0 && <tr>
                <td className="w-[250px] mx-auto h-full flex justify-center items-center ">
                  <p className="text-white text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]">
                  No data found for the selected category
                  </p>
                </td>
              </tr>}
              {filteredDaos.map((dao, idx) => (
                <tr key={idx} className="hover:bg-[#151C23] cursor-pointer" onClick={()=> handleTransition(dao.dao_name)}>
                  <td className="w-[115.29px] py-[20px] text-white text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]">
                   <p className={tableClass}>{dao.rank}</p>
                  </td>
                  <td className="w-[174px] py-[20px]">
                    <div className="flex items-center gap-[4px] w-full">
                      <Image src={dao.dao_logo} width={0} height={0} className="w-[24px] h-[24px]" alt={`${dao.dao_name}'s logo`}/>
                      <p className={tableClass}>{dao.dao_name}</p> 
                    </div>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    <p className={tableClass}>{dao.treasury_value}</p>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    {dao.change_24h.startsWith("-") ?
                      (
                        <div className="flex items-center justify-start gap-[4px] w-full">
                          <Image src="/deltaDown.png" width={0} height={0} className="w-[11.67px] h-[6.67px]" alt={`trend logo`} />
                          <p className="text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%] text-[#F54842]">{dao.change_24h}</p>
                        </div>
                      ) :(
                        <div className="flex items-center justify-start gap-[4px] w-full">
                          <Image src="/deltaUp.svg" width={0} height={0} className="w-[11.67px] h-[6.67px]" alt={`trend logo`} />
                          <p className="text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%] text-[#14C784]">{dao.change_24h}</p>
                        </div>
                      )
                    }
                  </td>
                  <td className="w-[202px] py-[20px]">
                    <div className="flex items-center gap-[6px] w-full justify-start">
                      {dao.top_tokens.map((im,idx)=> <Image src={im} key={idx} width={0} height={0} className="w-[24px] h-[24px]" alt="token icon"/>)}
                    </div>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    <Image src={dao.dao_logo} width={0} height={0} className="w-[24px] h-[24px]" alt={`${dao.native_chain} logo`}/>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    <p className={tableClass}>{dao.token_holders}</p>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    <p className={tableClass}>{dao.proposals}</p>
                  </td>
                  <td className="w-[169px] py-[20px]">
                    <p className={tableClass}>{dao.active_participants}</p>
                  </td>
                  <td className="w-[115.29px] py-[20px]">
                    <p className={tableClass}>{dao.votes}</p>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  )
}
export default OrganizationDashboardPanel;