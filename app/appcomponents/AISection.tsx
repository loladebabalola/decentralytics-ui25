import Image from "next/image";
import aiImageTwo from "@/public/landing-proposal.webp"
import DAOTrifectaList from "./DAOTrifectaList";

const AISection = () => {
    return (
      <div className="w-full">
        
        <div className="w-full h-auto 
          flex flex-col gap-[62px] 
          md:flex-row md:items-center mt-[62px]"
        >
          <div className="w-full  px-[16px] h-auto text-center md:text-left">
            <h1 className=" flex flex-col items-center md:items-start gap-1 text-white font-bold text-[26px] leading-[37px] tracking-[-0.7%] align-[cap]">
              Seamlessly integrated with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04086] via-[#F04086] to-[#B166EE]">
                Artificial Intelligence
              </span>
            </h1>
              <p className="text-[#84919F] text-[14px] leading-[20px] tracking-[-0.3%] font-medium">
                We have incorporated intelligence models to provide predictive
                and forecasting to our service offerings.
              </p>
          </div>
          <div className="w-full pl-[21px] min-h-[286px] min-w-[353px] max-w-[541px]
            flex items-center justify-end" 
            >
              <Image 
              src={aiImageTwo}  
              alt="AI Section" 
              width={541}
              height={394}
              priority
              quality={75}
              sizes="(max-width: 768px) 353px, 541px"
              className="w-full h-auto object-cover object-left"
              style={{
                  minHeight: '286px',
                  maxHeight: '394px'
              }}
              />
          </div>
        </div>
        <DAOTrifectaList/>
      </div>
    )
}

export default AISection