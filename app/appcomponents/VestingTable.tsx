import React from 'react'
import { tableClass, VestingScheduleData } from './DetailPage/vesting/VestingScheduleSection'
import LineItem from './LineItem'
import Image from 'next/image';


const VestingTable = () => {
  return (
        <table className="w-full h-full border-separate border-spacing-y-[32px]">
            <thead>
            <tr className="w-full">
                <td className={`${tableClass} w-[50%]`}>Round</td>
                <td className={`${tableClass} w-[50%] `}>
                <div className="flex items-center gap-[4px] justify-end">
                    <p className={tableClass}>TGE unlock</p>
                    <Image src="/info-icon.svg" width={0} height={0} className="w-[12px] h-[12px]" alt="info icon"/>
                </div>
                </td>
            </tr>
            </thead>
            <tbody>
            {VestingScheduleData.map(item => (
                <tr key={item.id} className="">
                <td className={`w-[50%]`}>
                    <div className="flex flex-col gap-[12px] w-full">
                    <span className="flex items-center justify-between">
                        <LineItem revColor={item.color} revType={item.category} />
                        {item.icon && <Image src={item.icon} width={0} height={0} className="w-[16px] h-[16px]" alt="caret down icon"/>}
                    </span>
                    <p className={tableClass}>{item.month} {item.totalPrice}<span className="text-[#84919F]">{item.percentage}</span></p>
                    </div>
                </td>
                <td className={`${tableClass} w-[50%] text-right`}>
                    {`${item.value}%`}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default VestingTable