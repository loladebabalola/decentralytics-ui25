import Image from "next/image"

const MemberTableHead = () => {
 return (
    <thead>
        <tr className="mt-[12px] border-t border-b border-[#19212A]">
            <th className="w-[64px] py-[10px]">
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">#</p>
            </th>
            <th className="py-[10px] w-[160.43px]">
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Name</p>
            </th>
            <th className="py-[10px] w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Last active</p>
                </div>
            </th>
            <th className="py-[10px]  w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Voting power</p>
                </div>
            </th>
            <th className="py-[10px]  w-[157px] text-left">
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">% ownership</p>
            </th>
            <th className="py-[10px]  w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Votes</p>
                </div>
            </th>
            <th className="py-[10px] w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Last 5 proposals</p>
                </div>
            </th>
            <th className="py-[10px] w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Proposals</p>
                </div>
            </th>
            <th className="py-[10px] w-[160.43px]">
                <div className="flex items-center gap-[4px] w-full">
                    <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                    <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Other Dao</p>
                </div>
            </th>
        </tr>
    </thead>
   )
}

export default MemberTableHead