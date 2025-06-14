"use client";

const FoundersCard = ({founder_name, founder_img}: {founder_name:string, founder_img: string}) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col xl:flex-row items-center h-auto gap-[8px] xl:gap-[16px] relative ">
        <div 
                className={`bg-no-repeat bg-center md:bg-[bottom_center] bg-cover aspect-square w-full xl:w-[290px]`} 
                style={{backgroundImage: `url(${founder_img})`}}
        >
        </div>
        <div className="w-full text-center md:text-left md:w-full xl:w-1/2 h-auto">
            <h3 className="font-semibold text-[16px]/[24px] mb-[24px] align-[cap] tracking-[-0.5%] text-[#84919F]">About {founder_name}</h3>
            <div className="w-full flex flex-col h-full"> 
                <p className="pb-3 font-medium text-[12px]/[20px] md:text-[9px]/[13px] lg:text-[14px]/[20px] align-[cap] tracking-[-0.3%] text-white">
                    {founder_name} is the visionary founder of Decentralytics DAO,
                    a decentralized autonomous organization dedicated to 
                    transforming digital governance and community-driven initiatives.
                </p>
                <p className="font-medium text-[12px]/[20px] md:text-[9px]/[13px] lg:text-[14px]/[20px] align-[cap] tracking-[-0.3%] text-white">
                    Born in London, she graduated with honors in Computer Science from the University of Cambridge. 
                    Elizabeth&#39;s passion for blockchain technology led her to leave her corporate job as a software engineer to immerse herself in the blockchain community. 
                    In 2021, she founded Decentralytics DAO with the aim of empowering individuals and communitie
                </p>
            </div>
        </div>
    </div>
  )
}

export default FoundersCard