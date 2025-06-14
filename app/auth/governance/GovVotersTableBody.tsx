import Image from "next/image";
import { DAOMember } from "@/app/utils/interface";

const GovVotersTableBody = ({members}:{members: DAOMember[]}) => {
  const tableClass = "text-white text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]";
  // const circles = members.last5Proposals.map(status => status === "approved");
  return (
    <tbody>
      {members.map(mem => {
        const circles = mem.last5Proposals.map(status => status === "approved");
        const MAX_VISIBLE_DAOS = 4;
        return(
        <tr key={mem.id} className="hover:bg-[#151C23] border-b border-[#19212A] cursor-pointer">
          <td className="w-[64px] py-[10px]">
            <p className={tableClass}>{mem.id}</p> 
          </td>
          <td className="w-[160.43px] py-[10px]">
            <div className="flex items-center gap-[4px] w-full">
              <Image src={mem.avatar} width={0} height={0} className="w-[24px] h-[24px]" alt={`${mem.avatar}'s logo`}/>
              <p className={tableClass}>{mem.address}</p> 
            </div>
          </td>
          <td className="w-[160.43px] py-[10px]">
            <p className={tableClass}>{mem.lastActive}</p> 
          </td>
          <td className="w-[160.43px] py-[10px]">
            <p className={tableClass}>{mem.votingPower}</p> 
          </td>
          <td className="w-[157px] py-[10px]">
            <p className={tableClass}>{mem.percentageOwnership}</p> 
          </td>
          <td className="w-[160.43px] py-[10px] text-left flex flex-col">
            <p className={tableClass}>{`${mem.votes.cast} of ${mem.votes.total}`}</p>
            <p className={`text-[#84919F] text-[14px]/[20px] align-[cap] font-medium tracking-[-0.3%]`}>{`${mem.votes.percentage}%`} </p> 
          </td>
          <td className="w-[160.43px] py-[10px]">
            <div className="flex gap-[8px] items-center justify-start w-full">
              {circles.map((isApproved, idx) => 
                <div 
                key={idx} className={`w-[12px] h-[12px] bg-center bg-cover bg-no-repeat border border-[#2B3640] rounded-[50%]`} 
                style={{backgroundImage:`${isApproved ? `url(/check-icon.svg)` : `none`}`}}
                />
              )}
            </div>
          </td>
          <td className="w-[160.43px] py-[10px]">
            <div className="flex items-center gap-[6px]">
              {mem.otherDAOs.slice(0, MAX_VISIBLE_DAOS).map(od=> 
                <Image key={od.name} src={od.icon} width={0} height={0} className="w-[24px] h-[24px]" alt={`${od.name}'s token icon`}/>
              )}
              {mem.otherDAOs.length > MAX_VISIBLE_DAOS && <span className="w-[24px] h-[24px] bg-[#19212A] rounded-[50%] text-[11px]/[17px] align-[cap] tracking-[-0.22%] font-medium flex items-center justify-center text-white">{`+${mem.otherDAOs.length - MAX_VISIBLE_DAOS}`}</span>}

            </div>
          </td>
        </tr>
        )
      })}
    </tbody>
  )
}

export default GovVotersTableBody