import ComponentContainer from "./ComponentContainer";
import ComprehensiveImage from "../../public/comprehensiveImage.webp"
import Image from "next/image";

const ComprehensiveSection = () => {
    return (
        <div className="px-[16px] w-full">
            <ComponentContainer 
            pdx="32px" pdy="0px" 
            direction="vertical" 
            otherClasses="mt-[24px]
            bg-gradient-to-b from-[#11171D] to-[#060D13] pt-[48px]
            ">
                <div className="w-full flex flex-col gap-[20px] md:w-[534px]">
                    <h1 className="font-bold text-[26px] leading-[37px] tracking-[-0.7%] text-white">
                        Comprehensive DAO data
                    </h1>
                    <p className=" font-medium text-[16px] leading-[24px] tracking-[-0.7%] text-[#84919F] align-[cap]">
                        Thoroughly explore individual DAOs, understanding financial,
                        governance, technical and activity based events within each DAO
                    </p>
                </div>
                <div className="w-full flex justify-center mt-[32px]">
                    <div className="relative w-full min-w-[300px] max-w-[1082px]">
                        <Image 
                            src={ComprehensiveImage} 
                            alt="Comprehensive DAO data visualization dashboard" 
                            width={1082}
                            height={311}
                            priority
                            sizes="(max-width: 768px) 311px, (max-width: 1200px) 100vw, 1082px"
                            className="w-full h-auto object-contain"
                            style={{
                                minHeight: '80px',
                                maxHeight: '311px'
                            }}
                        />
                    </div>
                </div>
            </ComponentContainer>
        </div>
    )
}

export default ComprehensiveSection;