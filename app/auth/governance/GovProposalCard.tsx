import FinExpenseCategory from "../../appcomponents/FinExpenseCategory"
import { GovAllProposals } from "@/app/utils/data"
const GovProposalCard = () => {
    return (
        <div className="w-full overflow-x-scroll scrollbar-hide">
            <FinExpenseCategory
                headText="All proposals"
                totalProposal={`120K`}
                barData={GovAllProposals}
            />
        </div>
    )
};
export default GovProposalCard;