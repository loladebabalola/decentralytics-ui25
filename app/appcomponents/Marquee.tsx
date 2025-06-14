"use client";
import { useEffect, useState } from "react";
import { plusJakarta } from "../utils/font";

export interface DaoMarqueeItem {
  name: string;
  priceUsd: number;
  changePercent: number;
  isPositive: boolean;
}

// Fake static data (for now)
const dummyData: DaoMarqueeItem[] = [
  { name: "Optimism", priceUsd: 12.45, changePercent: 3.5, isPositive: true },
  { name: "Uniswap", priceUsd: 8.12, changePercent: -2.1, isPositive: false },
  { name: "DAO Gamma", priceUsd: 20.77, changePercent: 0.4, isPositive: true },
  { name: "DAO Delta", priceUsd: 15.34, changePercent: -1.7, isPositive: false },
  { name: "DAO Sigma", priceUsd: 4.23, changePercent: 5.2, isPositive: true },
];

export default function Marquee() {
  const [daoData, setDaoData] = useState<DaoMarqueeItem[]>([]);

  useEffect(() => {
    // Later: Replace with real API call
    setDaoData(dummyData);
  }, []);

  return (
    <div className="relative overflow-hidden text-white bg-[#060D13]">
      <div className="inline-flex animate-marquee hover:pause-marquee">
        {Array.from({ length: 2 }).map((_, dupIdx) =>
          daoData.map((dao, idx) => (
            <div key={`${dupIdx}-${idx}`} 
            className={`flex items-center space-x-2 border-l border-r border-[#222B35] p-2 ${plusJakarta.className} font-medium text-[12px] shrink-0`} >
              <span className="text-[#70808F]">{dao.name}</span>
              <span className="text-white">${dao.priceUsd.toFixed(2)}</span>
              <span className={dao.isPositive ? "text-green-400 flex items-center" : "text-red-400 flex items-center"}>
                {dao.isPositive ? "▲" : "▼"} {Math.abs(dao.changePercent)}%
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
