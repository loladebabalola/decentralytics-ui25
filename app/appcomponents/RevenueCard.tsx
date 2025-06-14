import CardBtn from "./CardBtn";
import ComponentContainer from "./ComponentContainer";

type RevenueCardProps ={
    cardHeight?: number | string;
    revenueHead: string;
    revPrice: number;
    daoNames: revBar[];
}


type revBar = {
    id: number;
    color: string;
    name: string;
    perPrice: number;
    percIncr: number;
}

const RevenueCard = ({revenueHead,revPrice,daoNames, cardHeight}: RevenueCardProps) => {
  return (
    <ComponentContainer pad="32px" hx={`h-[${cardHeight}px]`}>
        <div className={`w-full h-full flex flex-col gap-[32px]`}>
            <div className="flex items-center w-full justify-between">
                <div className="flex flex-col gap-[16px]">
                    <h2 className="text-[#84919F] font-medium text-[14px]/[20px] tracking-[-0.3%] h-[9px]">{revenueHead}</h2>
                    <p className="text-white font-bold align-[cap] text-[22px]/[29px] leading-none h-[16px]">{`$${revPrice}B`}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                    <CardBtn btnName="All ecosystems"/>
                    <CardBtn btnName="All sectors"/>
                </div>
            </div>
            <div className="flex items-center h-[40px] gap-[8px]">
                {daoNames.map( br => (
                    <div key={br.id} className={`bg-[${br.color}] h-full rounded-[4px]`} style={{width: `${br.percIncr}%`}} />
                ))}
            </div>
            <div className="w-full flex flex-wrap items-stretch gap-[32px]">
                {daoNames.map(( dao => 
                    <div key={dao.id} className="flex items-center justify-between w-[326px] h-[9px]">
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
  )
};

export default RevenueCard