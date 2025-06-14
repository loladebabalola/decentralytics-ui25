"use client"
import { OrganizationLists } from "../utils/data";
import { PaginatedListContainer } from "./PaginatedListContainer";
import { DaoList } from "./DaoList";
import ComponentContainer from "./ComponentContainer";

const DaoListContainer = () => {
    return(
        <ComponentContainer pdx="0px" pdy="24px" otherClasses="h-[487px]">
            <PaginatedListContainer 
                cardHeader="DAO Rank" 
                list={OrganizationLists.daos} 
                renderItem={(item, index) => <DaoList dao={item} key={index}/>}
                pageMax={5}
            />
        </ComponentContainer>
    )
}
export default DaoListContainer;