import ComponentContainer from '../ComponentContainer';
import LineItem from '../LineItem';


const DAaoDetailFinRevPerYear = () => {
  return (
    <ComponentContainer pad="32px" >
     <div className='w-full h-auto flex gap-[21px] flex-col'>
        <div className='w-full flex items-center gap-[72px]'>
            <div className='flex flex-col gap-[16px] w-fit '>
                <h3 className='text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium'>Revenue streams</h3>
                <h1 className='text-white text-[22px]/[29px] font-bold align-[cap] tracking-[-0.6%]'>4</h1>
            </div>
            <div className='flex flex-col gap-[16px] w-fit'>
            <h3 className='text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium'>This year</h3>
            <h1 className='text-white text-[22px]/[29px] font-bold align-[cap] tracking-[-0.6%]'>$8.8B</h1>
            </div>
        </div>
        <div className='w-full h-[40px] flex items-center justify-between'>
            <div className='w-[5%] bg-[#1E80FF] h-full rounded-[4px]'/>
            <div className='w-[20%] bg-[#14C784] h-full rounded-[4px]'/>
            <div className='w-[20%] bg-[#14C784] h-full rounded-[4px]'/>
            <div className='w-[20%] bg-[#61D4E5] h-full rounded-[4px]'/>
            <div className='w-[20%] bg-[#FA7AC5] h-full rounded-[4px]'/>
        </div>
        <div className='w-full flex flex-col items-start gap-[24px] md:flex-row md:justify-between h-full'>
            <div className='flex flex-col gap-[16px] w-full md:w-[46%]'>
                <LineItem revColor='#1E80FF' revType='Transaction fees' revIn='$2.2B' revPerc='96.4%'/>
                <LineItem revColor='#FEB752' revType='Staking rewards' revIn='$2.2B' revPerc='96.4%'/>
                <LineItem revColor='#14C784' revType='Protocol fees' revIn='$2.2B' revPerc='96.4%'/>
            </div>
            <div className='flex flex-col gap-[16px] w-full md:w-[46%]'>
                <LineItem revColor='#61D4E5' revType='Yield farming' revIn='$2.2B' revPerc='96.4%'/>
                <LineItem revColor='#FA7AC5' revType='Yield farming' revIn='$2.2B' revPerc='96.4%'/>
            </div>
        </div>
     </div>
    </ComponentContainer>
  )
}

export default DAaoDetailFinRevPerYear