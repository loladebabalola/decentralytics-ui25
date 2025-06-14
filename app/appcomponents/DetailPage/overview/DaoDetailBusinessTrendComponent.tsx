"use client";
import { useState } from 'react';
import ComponentContainer from '../../ComponentContainer';

const DaoDetailBusinessTrendComponent = () => {
    // const dao = useDaoStore(state => state.selectedDao);
    const [activeKey, setActiveKey] = useState("Market cap");
    const businessKeys = ["Market cap", "Transaction volume", "Revenue", "Token holders", "Workers"];
    const handleKeySwitch = (key: string) =>{
        setActiveKey(key)
    }
  return (
    <ComponentContainer pad=''>
        <div>
            <h2 className='font-semibold text-[14px]/[20px] tracking-[-0.3%] align-[cap] text-white'>Business trends</h2>
            <div className='w-full mt-[24px] flex gap-[6px] overflow-x-auto scrollbar-hide'>
                {businessKeys.map((item,idx)=>(
                    <button
                    key={idx}
                    className={`py-[10px] px-[12px] bg-[#151C23] rounded-[10px] cursor-pointer shrink-0
                        font-medium text-[12px]/[18px] align-[cap] tracking-[-0.25%] text-white ${item === activeKey ? `border border-[#2B3640]`:`border-none`} `}
                    onClick={()=> handleKeySwitch(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='w-full h-auto overflow-x-scroll scrollbar-hide cursor-grabbing md:cursor-pointer'>
                <div className='w-[1319.99px] mt-[32px] h-[336px] pr-[24px]  bg-center 2xl:bg-contain bg-cover bg-no-repeat flex items-center' 
                    style={{
                        backgroundImage: `url('/dao-busines-graph-icon-bg.svg')`
                    }}>
                    <div className="w-[1232px] h-[258px] ml-[87.82px] mt-[50px] mb-[28px] border-none bg-cover bg-no-repeat bg-bottom" style={{
                        backgroundImage: `url('/graph-demo.svg')`
                    }}/>
                </div>
            </div>
        </div>
    </ComponentContainer>
  )
}

export default DaoDetailBusinessTrendComponent;
