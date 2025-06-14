import Image from "next/image";
import sendIcon from "@/public/message-envelope.svg";

const ContactSection =  () => {
    
    return(
        <div className="w-full px-[16px] multi-gradient-footer md:md-multi-gradient-footer border-transparent mt-[72px] md:mt-[122px]">
            <div className="flex flex-col
             md:flex-row md:justify-between md:items-start lg:w-[929px] md:mx-auto md:mt-[126px]"
            >
                <div className="w-full h-auto flex flex-col text-center md:text-left">
                    <span className="bg-[#90F4CE1A]/[80%] w-fit mx-auto md:mx-0 text-[#14C784] font-semibold text-[12px] leading-[18px] tracking-[-0.3%] p-[10px] rounded-[22px]">
                    WANT EARLY ACCESS?
                    </span>
                    <h1 className="text-white text-[26px] align-[cap] leading-[37px] tracking-[-0.7%] font-semibold mt-[24px]">
                        Drop us a message
                    </h1>
                    <p className="text-[#84919F] text-[14px] leading-[20px] mt-[20px] tracking-[-0.3%] font-medium align-[cap]">
                        For patnerships and early access
                    </p>
                    <p className="hidden md:block text-[#84919F] text-center md:text-left text-[14px] leading-[20px] tracking-[-0.3%] font-medium align-[cap] md:mt-[194px]">
                        Send us an email on <span className="text-white underline">sales@decentralytics.com</span>
                    </p>
                </div>
                <div className="w-full h-auto flex flex-col gap-[12px] mt-[40px] md:mt-0">
                    <input 
                    type="email"
                    placeholder="Email" 
                    className="py-[22px] px-[12px] rounded-[8px] bg-[#151C23] text-white
                    placeholder:text-[#84919F] placeholder:text-[14px] 
                    placeholder:leading-[20px] placeholder:tracking-[-0.3%] 
                    placeholder:font-medium outline-none"
                    />
                    <input 
                    type="text" 
                    placeholder="Telegram handle (optional)" 
                    className="py-[22px] px-[12px] rounded-[8px] bg-[#151C23] text-white
                    placeholder:text-[#84919F] placeholder:text-[14px] placeholder:leading-[20px] 
                    placeholder:tracking-[-0.3%] placeholder:font-medium outline-none"
                    />
                    <textarea 
                    placeholder="Enter your message here..." 
                    rows={5}
                    className="py-[22px] px-[12px] rounded-[8px] bg-[#151C23] text-white
                    placeholder:text-[#84919F] placeholder:text-[14px] placeholder:leading-[20px] 
                    placeholder:tracking-[-0.3%] placeholder:font-medium outline-none"
                    />
                    <button className="w-full flex items-center justify-center mt-[8px] gap-[10px]
                    p-[12px] rounded-[8px] bg-[#1E80FF] text-white text-[14px] 
                    leading-[20px] tracking-[-0.3%] font-semibold align-[cap]"
                    >
                        Send message
                        <Image src={sendIcon} width={15} height={12} alt="send" />
                    </button>
                    <p className="md:hidden text-[#84919F] text-center text-[14px] leading-[20px] tracking-[-0.3%] font-medium align-[cap]">
                        Send us an email on <span className="text-white underline">sales@decentralytics.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ContactSection;