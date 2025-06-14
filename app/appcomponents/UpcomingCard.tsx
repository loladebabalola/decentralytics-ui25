type UpcomingCardProps = {
    avatar: string,
    name:string, 
    ticker: string, 
    isToday: boolean,
    token: string, 
    tokenAmount:string,
    mCapPerc: number,
    tokenMatketValue: number,
    date: string,
    cardWidth: number
}

const UpcomingCard = ({
    avatar,
    name, 
    ticker, 
    isToday,
    token, 
    tokenAmount,
    mCapPerc,
    tokenMatketValue,
    date,
    cardWidth
}:UpcomingCardProps) => {
  return (
    <div 
    className="flex-shrink-0 scroll-snap-start bg-[#11171D] border border-[#2B3640] rounded-[12px] p-[20px] flex flex-col gap-[32px]"
     style={{
        scrollSnapAlign: 'start',
        minWidth: `${cardWidth}px`,
    }}
    > 
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] bg-cover bg-center bg-no-repeat rounded-[50%]" style={{backgroundImage: `url(${avatar})`}}/>
                <span className="flex flex-col gap-[12px]">
                    <h2 className="text-[#1E80FF] text-[14px]/[20px] tracking-[-0.3%] font-bold align-[cap]">
                        {name}
                    </h2>
                    <p className="text-[#84919F] text-[12px]/[18px] align-[cap] font-medium tracking-[-0.25%]">
                    {ticker}
                    </p>
                </span>
            </div>
            {isToday && 
                <button className="bg-[#19212A] py-[4px] px-[12px] text-white font-medium text-[12px]/[18px] rounded-[18px] tracking-[-0.25%] text-center">
                    Today
                </button>
            }
        </div>
        <div className="flex flex-col gap-[20px] w-full">
            <span className="text-[12px]/[18px] tracking-[-0.25%] align-[cap] w-full flex items-center justify-between">
                <p className="font-medium text-[#84919F]">Unlock</p>
                <p className="font-semibold text-white">{`${token} ${tokenAmount}`}</p>
            </span>
            <span className="text-[12px]/[18px] tracking-[-0.25%] align-[cap] w-full flex items-center justify-between">
                <p className="font-medium text-[#84919F]">Value</p>
                <p className="font-semibold text-white">{`${mCapPerc}M. Cap (${(tokenMatketValue / 1000).toFixed(2)}K)`}</p>
            </span>
            <span className="text-[12px]/[18px] tracking-[-0.25%] align-[cap] w-full flex items-center justify-between">
                <p className="font-medium text-[#84919F]">When</p>
                <p className="font-semibold text-white">
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </span>
        </div>
    </div>
  )
}

export default UpcomingCard
// min-w-[250px] lg:min-w-[280px] xl:min-w-[317px]