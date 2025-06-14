import Image from "next/image"

const ProposalSearch = () => {
  return (
    <div className="w-full flex items-center gap-[4px] bg-[#151C23]  py-[7px] px-[8px] rounded-[8px] mt-[16px]">
        <Image src="/search-icon.svg" width={0} height={0} className="w-[12px] h-[12px]" alt="search icon"/>
        <input
        type="text"
        placeholder="Search..."
        className="w-full text-[#70808F] text-[14px]/[20px] font-medium tracking-[-0.3%] align-[cap] border-none outline-none focus:border-none focus:outline-none"
        />
    </div>
  )
}

export default ProposalSearch