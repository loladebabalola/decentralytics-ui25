import { DaoMembers } from "../../../utils/data"
import { MembersCardGrid, MembersCardTable } from "./MembersCard"

const DaoMembersList = ({layout}: {layout: "grid" | "list"}) => {
  return (
    <div className="w-full h-auto">
      {layout === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          { DaoMembers.map(member => 
              <MembersCardGrid key={member.id} member={member}/>
            )
          }
        </div>
      ):(
        <div className="w-full">
          <MembersCardTable/>
        </div>
      )}
    </div>
  )
}

export default DaoMembersList