"use client";
import { useDaoStore } from "@/app/utils/stores/daoStore";
import { useEffect } from "react";
import DecentralyticsScreen from "../DecentralyticsScreen";
import DecentralyticsDashContent from "./DecentralyticsDashContent";
import { DaoData } from "@/app/utils/interface";

type DaoDetailProps = {
  selectedDao: DaoData;
}

const DaoDetailComponent = ({selectedDao}: DaoDetailProps) => {
  const setSelectedDao = useDaoStore(state => state.setSelectedDao)
  useEffect(() => {
    useDaoStore.getState().setSelectedDao(selectedDao)
  }, [setSelectedDao, selectedDao])
  
  return (
    <div className="w-full px-[20px]  space-y-[40px] h-auto">
      <DecentralyticsScreen selectedDao={selectedDao} />
      <DecentralyticsDashContent/>
    </div>
  )
}

export default DaoDetailComponent