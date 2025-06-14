"use client"
import Image from "next/image";

const AssetTableHead = () => {
  return (
    <tr className="border-t border-b border-[#19212A]">
        <th className="w-[139.8px] py-[10px] text-left">
            <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Token</p>
        </th>
        <th className="py-[10px] w-[139.8px] text-left">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Quantity</p>
            </div>
        </th>
        <th className="py-[10px] w-[139.8px] text-left">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Price</p>
            </div>
        </th>
        <th className="py-[10px] w-[139.8px] text-left">
            <div className="flex items-center gap-[4px] w-full">
                <Image src="/switch-vertical.png"  width={0} height={0} className="w-[12px] h-[12px]" alt="trend icon"/>
                <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Value</p>
            </div>
        </th>
        <th className="py-[10px]  w-[139.8px] text-left">
            <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] text-[#70808F]">Owner address</p>
        </th>
    </tr>
  )
}

export default AssetTableHead;