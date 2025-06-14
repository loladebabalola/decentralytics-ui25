import DaoDetailComponent from "@/app/appcomponents/DetailPage/DaoDetailComponent";
import { OrganizationLists } from "@/app/utils/data";
import { DaoData } from "@/app/utils/interface";


export default async function DaoDetailServer({params}:{params: Promise<{name: string}>})  {
  const resolvedParams = await params;
  // console.log("resolved params", resolvedParams);
  if(!resolvedParams) throw new Error("DAO not found")
  const selectedDao:DaoData = OrganizationLists.daos.find(
  dao => dao.dao_name === resolvedParams.name
  )!;
  
  // console.log(selectedDao);
  
  return (
    <DaoDetailComponent selectedDao = {selectedDao}/>
  )
};