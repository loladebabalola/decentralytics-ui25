type LineItemProps ={
    revColor?: string,
    revType: string,
    revIn?: string,
    revPerc?: string,
    revTypeColor?:string
}
const LineItem = ({revColor, revType, revTypeColor,revIn, revPerc}: LineItemProps) => {
  return (
   <div className='w-full flex items-center justify-between h-[9px]'>
        <div className='flex items-center gap-[4px] shrink-0'>
            {revColor && <div className={`w-[8px] h-[8px] rounded-[2px]`} style={{backgroundColor: `${revColor}`}}/>}
            <p className={`${revTypeColor ? `text-[${revTypeColor}]` : `text-white`} font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap]`}>{revType}</p>
        </div>
        {revIn && (
            <div className="shrink-0">
                <p className='text-white font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap]'>{revIn} 
                 {revPerc && <span className="text-[#84919F] ml-[2px]">{`(${revPerc})`}</span>}
                </p>
            </div>
        )}
    </div>
  )
}

export default LineItem