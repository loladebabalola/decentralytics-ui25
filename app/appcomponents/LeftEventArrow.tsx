type LeftArrowProps = {
  date: string;
  daysRemaining: string
}

const LeftEventArrow = ({date, daysRemaining}: LeftArrowProps) => {
  return (
    <div className="flex w-full justify-between items-center">
        <div className="w-[223.34px] h-[80px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/curved-rectangle.svg)`}}
        >
          <div className="w-full h-full py-[25px] border-l-[8px] rounded-[12px] border-blue-600 pl-[28px]">
              <h1 className="font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white">{date}</h1>
              <p className="font-semibold text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-[#84919F]">{daysRemaining}</p>
          </div>
        </div>
        <div className="w-[12px] h-[12px] rounded-[50%] bg-blue-900 mr-[-5px]" />
    </div>   
  )
}

export default LeftEventArrow