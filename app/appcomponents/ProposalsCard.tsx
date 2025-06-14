import Image from "next/image";
import ComponentContainer from "./ComponentContainer"

type ProposalCardProps = {
  propName: string,
  propTags: string[],
  propDetail: string,
  propImage: string,
  status: string,
  createdAt: string,
  voteFor: VoteData;
  against: VoteData;
  abstain: VoteData;
  total: number;
  result: string;
  stage:string
}
type VoteBarProps = {
  label: string,
  count: number,
  percentage: number,
  color: string
}
type VoteData = {
  count: number;
  percentage: number;
};




const VoteBar = ({ label, count, percentage, color }: VoteBarProps) => (
  <div className="mb-2 bg-[#19212A] w-full h-[36px] rounded-[4px] flex items-center">
    <div className="overflow-x-visible h-full flex items-center py-[13px] px-[8px]" style={{ width: `${percentage}%`, backgroundColor: color, borderRadius: '4px' }}>
      <p className="text-[12px]/[18px] font-semibold tracking-[-0.25%] align-[cap] text-white shrink-0">{`${label} ${count} (${percentage}% of total votes)`}</p>
    </div>
  </div>
);


const ProposalsCard = ({
  propName,
  propTags,
  propDetail,
  propImage,
  createdAt,
  status,
  abstain,
  against,
  voteFor,
  total,
  result,
  stage
  }: ProposalCardProps) => {
  return (
    <ComponentContainer bg="bg-[#151C23]" >
      <div className="w-full flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[4px] sm:flex-row sm:items-center ">
          <div className="flex items-center gap-[12px] w-[50%] xl:w-[70%]">
            <Image src={`${propImage}`} width={0} height={0} className="w-[40px] h-[40px]" alt={`coin icon`}/>
            <div className="flex flex-col">
              <p className="text-[16px]/[24px] align-[cap] tracking-[-0.5%] font-medium text-white">By<span className="text-[#1E80FF]">{propName}</span></p>
              <p className="text-[#84919F] text-[14px]/[20px] font-medium tracking-[-0.3%] align-[cap]">{`Proposal ${status} ${createdAt}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:justify-end xl:w-[30%] flex items-center gap-[8px]">
            {propTags.map((tag, idx)=>(
              <button key={idx} className="text-white text-[12px]/[18px] tracking-[-0.25%] align-[cap] font-medium rounded-[18px] py-[4px] px-[12px] bg-[#19212A] shrink-0">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <p className="text-[#84919F] font-medium tracking-[-0.25%] text-[12px]/[18px] align-[cap]">{propDetail}</p>
      </div>
      <div className="h-auto w-full mt-[24px] mb-[40px]">
        <VoteBar label="For" count={voteFor.count}  percentage={voteFor.percentage} color="#1E80FF"/>
        <VoteBar label="Against" count={against.count}  percentage={against.percentage} color="#1E80FF"/>
        <VoteBar label="Abstain" count={abstain.count}  percentage={abstain.percentage} color="#1E80FF"/>
      </div>
      <div className="flex items-center flex-wrap md:flex-nowrap">
        <div className="w-[33.33%] flex flex-col text-left text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] font-medium align-[cap] gagp-[12px]">
          <h3>Total votes</h3>
          <h2 className="font-semibold text-white">{total}</h2>
        </div>
        <div className="w-[33.33%] flex flex-col text-left text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] font-medium align-[cap] gagp-[12px]">
          <span className="flex items-center shrink-0 gap-[4px]">
            <h3>Likely result</h3>
            <Image src="/info-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt="info icon" />
          </span>
          <h2 className="font-semibold text-white">{result}</h2>
        </div>
        <div className="w-[33.33%] flex flex-col text-left text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] font-medium align-[cap] gagp-[12px]">
          <h3>Stage</h3>
          <span className="flex items-center gap-[4px]">
            {stage === "Completed" ? 
              <div className="w-[8px] h-[8px] rounded-[4px] bg-[#14C784]"/> : 
              stage === "Queued" ? 
              <div className="w-[8px] h-[8px] rounded-[4px] bg-[#FEB752]"/> : 
              stage === "Preliminary discussion" ? 
              <div className="w-[8px] h-[8px] rounded-[4px] bg-[#2DC0CB]"/> :
              <div className="w-[8px] h-[8px] rounded-[4px] bg-[#AF7AFA]"/>
            }
            <h2 className="font-semibold text-white">{stage}</h2>
          </span>
        </div>
      </div>
    </ComponentContainer>
  )
}
export default ProposalsCard;