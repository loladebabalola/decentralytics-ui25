import Image from "next/image"


const CardBtn = ({btnName}:{btnName: string}) => {
  return (
   <button className="flex items-center justify-center gap-[4px] py-[10px] px-[12px] 
   bg-[#151C23] text-white font-medium text-[12px]/[18px] tracking-[-0.25%] rounded-[10px]"
   >
      {btnName}
      <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[18px] h-[18px]" alt="caret icon"/>
   </button>
  )
}

export default CardBtn