import DaoDetailTokenCard from "../DaoDetailTokenCard"

const DaoDetailTokenSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-stretch gap-[24px] mb-[80px] md:justify-between">
      <div className="w-full md:w-[48%] 2xl:w-1/2 h-full md:align-stretch ">
        <DaoDetailTokenCard 
          headerIcon="/coin-icon.svg"
          tokenType="Governance Token"
          deltaIcon="/deltaDown.png"
          graphBg="/gov-token-graph-bg.png"
          graphModel="/gov-token-graph.png"
          totalPrice="$1.95"
          deltaPrice="0.3%"
        />
      </div>
      <div className="w-full md:w-[48%] 2xl:w-1/2 h-full">
        <DaoDetailTokenCard 
          headerIcon="/coin-icon.svg"
          tokenType="Economic Token"
          deltaIcon="/deltaUp.svg"
          graphBg="/economic-token-graph-bg.png"
          graphModel="/economic-token-graph.png"
          totalPrice="$3.21"
          deltaPrice="0.28%"
        />
      </div>
    </div>
  )
}

export default DaoDetailTokenSection