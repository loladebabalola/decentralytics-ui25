import CardBtn from "./CardBtn"
import ComponentContainer from "./ComponentContainer"


type ExpenseProps = {
    headText: string,
    subText?: string,
    totalPrice?: number,
    totalProposal: number | string,
    barData: DataProps[],
    otherClasses?: string
};

type DataProps = {
    id: number,
    name:string,
    perPrice:number,
    percIncr: number,
    color:string,
 }




const FinExpenseCategory = ({headText, subText, barData, totalPrice, totalProposal, otherClasses}: ExpenseProps) => {
  return (
    <div className="w-[1392px] overflow-x-scroll scrollbar-hide">
        <ComponentContainer hx={`h-auto`} pad="32px" otherClasses={`${otherClasses}`}>
            <div className="w-full h-full flex flex-col gap-[32px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[72px]">
                        <div className="flex flex-col gap-[16px] justify-start">
                            <p className="text-[#84919F] font-medium  text-[14px]/[20px]  leading-none align-[cap] tracking-[-0.3%]">{headText}</p>
                            <p className="text-white text-[22px]/[29px] leading-none font-bold tracking-[-0.6%]">{totalProposal}</p>
                        </div>
                        {subText && totalPrice && 
                            <div className="flex flex-col gap-[16px] justify-start">
                                <p className="text-[#84919F] font-medium  text-[14px]/[20px]  leading-none align-[cap] tracking-[-0.3%]">
                                {subText}
                                </p>
                                <p className="text-white text-[22px]/[29px] leading-none font-bold tracking-[-0.6%]">
                                    {`$${totalPrice}B`} 
                                </p>
                            </div>
                        }   
                    </div>
                    <div className="w-fit flex items-center lg:flex-col xl:flex-row  gap-[12px]">
                        <CardBtn btnName="All ecosystems"/>
                        <CardBtn btnName="All sectors"/>
                    </div>
                </div>
                <div className="w-full flex items-center gap-[8px] h-[40px] rounded-[4px]">
                    {barData.map(bar => (
                        <div key={bar.id} className="rounded-[4px] h-full" style={{width: `${bar.percIncr}%`, backgroundColor: `${bar.color}`}}/>
                    ))}
                </div>
                <div className="w-full grid grid-cols-2 gap-[32px]">
                    {barData.map(( dao => 
                        <div key={dao.id} className="flex items-center justify-between w-full h-[9px]">
                            <div className="flex gap-[4px] items-center w-fit">
                                <span className="w-[8px] h-[8px] rounded-[2px]" style={{backgroundColor: `${dao.color}`}}/>
                                <p className="text-[12px]/[18px] tracking-[-0.25%] align-[top] font-medium text-white">{dao.name}</p>
                            </div>
                            <p className="text-white font-semibold text-[12px]/[18px] tracking-[-0.25%]">{`$${dao.perPrice}`}<span className="text-[#84919F]">{`(${dao.percIncr}%)`}</span></p>
                        </div>
                    ))}
            </div>
            </div>
        </ComponentContainer>
    </div>
  )
}

export default FinExpenseCategory;

