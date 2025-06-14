import CardBtn from "@/app/appcomponents/CardBtn"
import ComponentContainer from "@/app/appcomponents/ComponentContainer"


type GovTokenCardProps = {
    cardHeading: string,
    graphBg: string,
    graphImg: string,
}

export const GovTokenCard = ({cardHeading, graphBg, graphImg}: GovTokenCardProps) => {
    return (
       <ComponentContainer pad="32px" direction="vertical" otherClasses="w-full lg:w-[48%] xl:w-1/2"> 
            <div className="flex justify-between items-center">
                <h1 className="text-white text-[18px]/[26px] tracking-[-0.5%] font-bold align-[cap]">{cardHeading}</h1>
                <div className="flex flex-col justify-center w-[40%] lg:flex-row sm:items-center sm:w-[50%] gap-[8px] w-fit">
                    <CardBtn  btnName="All categories"/>
                    <CardBtn  btnName="All sectors"/>
                </div>
            </div>
            <div className="w-full overflow-x-scroll scrollbar-hide">
                <div className="w-full border border-transparent" style={{width: "620px",
                    height: "336px", backgroundImage: `url(${graphBg})`, 
                    backgroundSize: "contain", backgroundPosition: "bottom bottom", 
                    backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="border w-full border-transparent" style=
                        {{width: "579.97px" ,height:"258px",
                        backgroundImage: `url(${graphImg})`, backgroundSize: "contain",
                        backgroundPosition: "bottom",marginTop: "50px", 
                        marginLeft: "40.19px", marginBottom: "28px",
                        backgroundRepeat: "no-repeat"}}
                    />

                </div>
            </div>
       </ComponentContainer>
    )
}