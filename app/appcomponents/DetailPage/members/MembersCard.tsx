import Image from "next/image"
import ComponentContainer from "../../ComponentContainer"
import LineItem from "../../LineItem"
import { DAOMember } from "../../../utils/interface";
import MemberTableHead from "../../MemberTableHead";
import MemberTableBody from "../../MemberTableBody";
import { DaoMembers } from "../../../utils/data";


export const MembersCardGrid = ({member} : {member: DAOMember}) => {
  const circles = member.last5Proposals.map(status => status === "approved");
  return (
    <ComponentContainer pad="20px">
      <div className="w-full h-auto flex flex-col gap-[32px]">
        <div className="flex items-center gap-[12px]">
          <div 
          className="w-[48px] h-[48px] rounded-[50%] bg-cover bg-center" 
          style={{backgroundImage: `url(${member.avatar})`}}
          />
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-bold text-[14px]/[20px] tracking-[-0.3%] text-white align-[cap]">{member.address}</h1>
            <p className="text-[#84919F] text-[12px]/[18px] tracking-[-0.25%] font-medium">{`Last active ${member.lastActive}`}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <LineItem revType="Voting power" revIn={String(member.votingPower)}/>
          <LineItem revType="Percentage ownership" revIn={`${member.percentageOwnership}%`}/>
          <LineItem revType="Proposal" revIn={String(member.proposals)}/>
          <LineItem revType="Votes" revIn={`${member.votes.cast} of ${member.votes.total}`} revPerc={`(${member.votes.percentage})`}/>
          <div className="flex justify-between items-center">
            <p className="text-[#84919F] text-[12px]/[18px] tracking-[-0.25%] font-medium align-[cap]">Last 5 proposals</p>
            <div className="flex gap-[4px] w-fit">
              {
                circles.map((cb,idx) => (
                  <div key={idx} className="w-[12px] h-[12px] rounded-[50%] bg-[#11171D] border border-[#2B3640] bg-center bg-cover bg-no-repeat"
                  style={{backgroundImage:`${cb ? `url(/check-icon.svg)` : `none`}`}}/>
                ))
              } 
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-[#84919F] text-[12px]/[18px] tracking-[-0.25%] font-medium align-[cap]">Other DAOs - <span className="text-white">{member.otherDAOsCount}</span></p>
            <span className="text-[#1E80FF]">See all</span>
          </div>
          <div className="flex items-center gap-[12px] border-t border-[#151C23] pt-[12px] mt-[12px]">
            {
              member.otherDAOs.map((item, idx)=>
                <Image key={idx} src={item.icon} width={0} height={0} className="w-[39px] h-[39px]" alt={`${item.name}'s icon`}/>
              )
            }
          </div>
        </div>
      </div>
    </ComponentContainer>
  )
}


export const MembersCardTable = () => {
  return(
    <ComponentContainer pdy="20px" pdx="24px">
      <div className="border-t border-b border-[#19212A] w-full h-auto overflow-x-scroll scrollbar-hide">
        <table className="w-[1344px]" >
          <MemberTableHead />
          <MemberTableBody members={DaoMembers}/>
        </table>
      </div>
    </ComponentContainer>
  )
}