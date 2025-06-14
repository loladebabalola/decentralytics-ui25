import Image from "next/image"



const OrgTableHeaders = () => {
  return (
    <tr className="mt-[12px] border-t border-b border-[#19212A]">
        <th className="w-[115.29px] py-[10px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Rank</p>
            </div>
        </th>
        <th className="py-[10px]   w-[174px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">DAO name</p>
            </div>
        </th>
        <th className="py-[10px]   w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Treasury size</p>
            </div>
        </th>
        <th className="py-[10px] w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Last 24 hrs</p>
            </div>
        </th>
        <th className="py-[10px]  w-[202px] text-left">
            <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Top treasury tokens</p>
        </th>
        <th className="py-[10px]   w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Native chain</p>
            </div>
        </th>
        <th className="py-[10px]   w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Token holders</p>
            </div>
        </th>
        <th className="py-[10px]   w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Proposals</p>
            </div>
        </th>
        <th className="py-[10px]   w-[169px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Active participants</p>
            </div>
        </th>
        <th className="py-[10px]   w-[115.29px]">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Votes</p>
            </div>
        </th>
    </tr>
  )
}

export default OrgTableHeaders