"use client";
import { useDaoStore } from "../utils/stores/daoStore";
import DayAndVol from "./DayAndVol"
import InvestedFunds from "./InvestedFunds"
import TreasuryInfo from "./TreasuryInfo"

const TotalTreasury = () => {
  const dao = useDaoStore(state => state.selectedDao);
  
  return (
    <div className="w-full md:w-2/5 h-full">
      <TreasuryInfo treasury_value={dao?.treasury_value}/>
      <DayAndVol/>
      <InvestedFunds/>
    </div>
  )
}

export default TotalTreasury