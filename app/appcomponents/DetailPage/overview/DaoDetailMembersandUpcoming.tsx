import DaoDetailMembers from "../DaoDetailMembers"
import DaoDetailUpcoming from "../DaoDetailUpcoming"



const DaoDetailMembersandUpcoming = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-stretch h-full xl:min-h-[288px] gap-[16px]  relative">
        <div className="w-full md:w-[60%]">
          <DaoDetailMembers/>
        </div>
        <div className="w-full md:w-[40%]">
          <DaoDetailUpcoming/>
        </div>
    </div>
  )
}

export default DaoDetailMembersandUpcoming