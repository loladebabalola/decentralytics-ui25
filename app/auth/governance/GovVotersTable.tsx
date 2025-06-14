import ComponentContainer from "@/app/appcomponents/ComponentContainer";
import GovVotersTableHead from "./GovVotersTableHead";
import GovVotersTableBody from "./GovVotersTableBody";
import { DaoMembers } from "@/app/utils/data";      
const GovVotersTable = () => {
    return (
        <ComponentContainer pdy="20px" pdx="24px">
      <div className="border-t border-b border-[#19212A] w-full h-auto overflow-x-scroll scrollbar-hide">
        <table className="w-[1344px]" >
          <GovVotersTableHead />
          <GovVotersTableBody members={DaoMembers}/>
        </table>
      </div>
    </ComponentContainer>
    )
}

export default GovVotersTable;