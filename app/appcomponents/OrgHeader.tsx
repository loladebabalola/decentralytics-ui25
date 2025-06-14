import { ArrowLeft, ArrowRight } from 'lucide-react'

const OrgHeader = () => {
  return (
    <div className="flex items-center justify-between">
         <h1 className="font-semibold text-[16px]/[24px] tracking-[-0.5%] align-[cap] text-white">Organizations</h1>
        <div className="flex w-fit h-auto gap-1">
        <button disabled className="w-auto h-auto rounded-[50%] border border-[#70808F]">
            <ArrowLeft className="w-[20px] h-[20px] text-white"/>
        </button>
        <button className="h-auto w-auto rounded-[50%] border border-[#70808F]">
            <ArrowRight className="w-[20px] h-[20px] text-white"/>
        </button>
        </div>
    </div>
  )
}

export default OrgHeader;