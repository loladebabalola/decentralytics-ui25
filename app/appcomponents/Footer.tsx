import Image from "next/image"
import Link from "next/link";


const Footer = () => {
  return (
   <footer className="mt-[56px] w-full h-auto px-[24px] pb-[171px]">
        <div className="w-full">
            <Image src="/combined-logo.svg" className="mb-[20px] w-auto h-auto" width={174} height={24} alt="decentralytics logo"/>
            <div className="flex flex-col space-y-[24px] md:flex-row md:justify-between pb-[56px] border-b border-[#151C23]">
                <div className="w-full md:max-w-[330px] text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%] text-[#84919F]">
                    <p className="mb-3">{`Decentralytics provides a fundamental analysis of the Decentralized Autonomous Organizations (DAOs)`}</p>
                    <p> addition to tracking growth and financials, Decentralytics tracks community growth, governance and major DAO events. </p>
                </div>
                <div className="flex gap-3 w-full md:max-w-1/3 justify-center">
                    <div className="w-full flex flex-col items-start">
                        <h3 className="font-semibold mb-[20px] text-[12px]/[18px] align-[cap] tracking-[-0.25%] text-[#84919F]">Site map</h3>
                        <div className="w-full flex flex-col items-start gap-[24px]">
                            {FooterData.siteMap.map((footer,idx)=>(
                                <Link className="text-white font-normal text-[12px]/[18px] align-[cap] tracking-[-0.25%]" key={idx} href={footer.href}>
                                    {footer.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <h3 className="font-semibold mb-[20px] text-[12px]/[18px] align-[cap] tracking-[-0.25%] text-[#84919F]">Legal</h3>
                        <div className="w-full flex flex-col items-start gap-[24px]">
                            {FooterData.Legal.map((footer,idx)=>(
                                <Link className="text-white font-normal text-[12px]/[18px] align-[cap] tracking-[-0.25%]" key={idx} href={footer.href}>
                                    {footer.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <h3 className="font-semibold mb-[20px] text-[12px]/[18px] align-[cap] tracking-[-0.25%] text-[#84919F]">Contact</h3>
                         <div className="w-full flex flex-col items-start gap-[24px]">
                            {FooterData.contact.map((footer,idx)=>(
                                <Link className="text-white font-normal text-[12px]/[18px] align-[cap] tracking-[-0.25%]" key={idx} href={footer.href}>
                                    {footer.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-1/4 flex justify-center md:justify-end items-start">
                    <p className="font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-[#84919F]">&copy; 2025 Decentralytics. All rights Reserved</p>
                </div>
            </div>
        </div>
        <div className="w-full mt-[56px]">
            <p className="text-[#84919F] text-[12px]/[18px] align-[cap] tracking-[-0.25%] font-medium">
               <span className="font-semibold text-white underline">IMPORTANT DISCLAIMER: </span>
               All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only,
                procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. 
                No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion.
                You should conduct your own research, review, analyse and verify our content before relying on them. No content on our Site is meant to be a solicitation or offer.
            </p>
        </div>
   </footer>
  )
}

export default Footer;

export const FooterData = {
    siteMap: [
        {name:"Dashboard", href: "/"},
        {name:"Finance", href: "/finance"},
        {name:"Governance", href: "/gov"},
        {name:"Resources", href: "/resources"}
    ],
    Legal: [
        {name: "Terms of service", href: "/tos"},
        {name: "Privacy Policy", href: "/privacy-policy"},
        {name: "Support", href: "/support"},
    ],
    contact:[
        {name: "X-(Twitter)", href: "/"},
        {name: "LinkedIn", href: "/"},
        {name: "Instagram", href: "/"},
        {name: "Email", href: "/"},
    ]
}