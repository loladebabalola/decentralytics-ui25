import RevenueCard from './RevenueCard';
import RevenueOverTimeCard from './RevenueOverTimeCard';



const AssetsCards = () => {
  return (
    <div className='flex flex-col h-full items-center gap-[24px] w-full '>
     <div className='h-auto xl:h-[301px] w-full'>
        <RevenueCard
        daoNames={RevenueData}
        revPrice={RevenueData.reduce((acc,item)=> acc + item.perPrice , 0)}
        revenueHead="Total revenue generated this year"
      />
     </div>
     <div className="h-[494px] w-full ">
        <RevenueOverTimeCard 
          revCardTitle='Revenue over time'
          chartIcon='/chart-icon.svg'
          graphBg='/rev-graph-bg.png'
          bgWidth={699.99}
          bgHeight={369}
          graphImg='/rev-graph.png'
          graphHeight={283.34}
          graphWidth={666.11}
          gap={32}
          classForGraph='ml-[33.9px] mt-[54.91px] mb-[30.75px]'
        />
     </div>
    </div>
  )
}

export default AssetsCards;

const RevenueData = [
  {id: 1, name: "Dao name", perPrice: 2.2 , percIncr: 20, color: "#1E80FF" },
  {id: 2,name: "Dao name", perPrice: 2.2 , percIncr: 20, color: "#FEB752"},
  {id: 3, name: "Dao name", perPrice: 2.2 , percIncr: 20, color: "#14C784"},
  {id: 4, name: "Dao name", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 5, name: "Dao name", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
];

// id: number;
//     color: string;
//     width: number;
//     name: string;
//     perPrice: number;
//     percIncr: number;