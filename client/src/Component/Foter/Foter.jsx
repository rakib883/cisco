import { FaFacebook } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { SiTelegram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import FoterTitle from "../../UI/FoterTitle";


const Foter = () => {
  return (
    <div className="mt-30">
        <div className="w-full h-[1px] bg-gray-300 my-10"> </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 mx-8 gap-4">
           <div className="icon">
              <div className="image ">
                 <img className="h-[40px] " src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
              </div>
              <div className="text my-6  flex flex-col gap-4">
                 <div className="items flex gap-1 items-center cursor-pointer hover:text-gray-500">
                   <FaFacebook className=" text-[20px] text-[#4676ed]" /> <p className=" font-sans text-[16px] font-semibold">Facebook</p>
                 </div>
                 <div className="items flex gap-1 items-center cursor-pointer hover:text-gray-500">
                   <TbBrandYoutubeFilled className=" text-[20px] text-[#da0000]" /> <p className=" font-sans text-[16px] font-semibold">Youtube</p>
                 </div>
                 <div className="items flex gap-1 items-center cursor-pointer hover:text-gray-500">
                   <SiTelegram className=" text-[20px] text-[#33abe0]" /> <p className=" font-sans text-[16px] font-semibold">Telegram</p>
                 </div>
                 <div className="items flex gap-1 items-center cursor-pointer hover:text-gray-500">
                   <AiFillTwitterCircle className=" text-[22px] text-[#5a99ec]" /> <p className=" font-sans text-[16px] font-semibold">Twiter</p>
                 </div>
              </div>
           </div>
           <div className="icon">
              <div className="title">
                 <FoterTitle title="Getting started"/>
              </div>
              <div className="prafgr my-4 flex flex-col gap-4">
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Release Notes</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Upgrade Guide</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Browser Support</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Dark Mode</p>
                    </div>
              </div>
           </div>
           <div className="icon">
           <div className="title">
                 <FoterTitle title="Explore"/>
              </div>
              <div className="prafgr my-4 flex flex-col gap-4">
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Prototyping</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Design systems</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Pricing</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Security</p>
                    </div>
              </div>
           </div>
           <div className="icon">
           <div className="title">
                 <FoterTitle title="Resources"/>
              </div>
              <div className="prafgr my-4 flex flex-col gap-4">
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Best practices</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Support</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Developers</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Learn design</p>
                    </div>
              </div>
           </div>
           <div className="icon">
           <div className="title">
                 <FoterTitle title="Community"/>
              </div>
              <div className="prafgr my-4 flex flex-col gap-4">
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Discussion Forums</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Code of Conduct</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">Contributing</p>
                    </div>
                    <div className="pragraph ">
                        <p className=" font-sans text-[14px] font-medium cursor-pointer hover:text-gray-500 duration-300">API Reference</p>
                    </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Foter