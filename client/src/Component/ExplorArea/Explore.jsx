import { useEffect, useState } from "react";
import InnerTitle from "../../UI/InnerTitle"
import { RiWomenLine } from "react-icons/ri";
import { IoIosMale } from "react-icons/io";
import { FaChild } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { FachingData } from "../../UI/FaceData";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Explore = () => {
    const [explor,setExplor] = useState(1)
    // explor data faching
   const [explorData,setExplorData] = useState([])
    useEffect(()=>{
        const incomingData = async()=>{
            const response = await FachingData("http://localhost:3000/explor")
            const result = setExplorData(response)
            return result
          }
        incomingData()
    },[])
   
    
  return (
    <div className="bg-[#f7f7f9] my-10 rounded-3xl">
        <div className="content mx-10 py-10">
             <div className="title py-10 text-center">
                 <InnerTitle title="Start exploring." className="text-[36px]"/> 
             </div>
             <div className="button-area">
                <div className="conten bg-white drop-shadow-xl max-w-3xl mx-auto rounded-full">
                   <div className="content flex justify-between">
                        <div  onClick={()=>setExplor(1)} className={` ${explor === 1 && "bg-black text-white" } text-xs md:text-base  womon cursor-pointer inline-flex items-center gap-1 md:gap-2 text-black   rounded-full md:py-3 py-1 md:px-6 `}>
                            < RiWomenLine className=" text-xl mt-[2px]" />
                            <p className=" font-sans font-semibold">Women</p> 
                        </div>
                        <div  onClick={()=>setExplor(2)} className={` ${explor === 2 && "bg-black text-white" } text-xs md:text-base  womon cursor-pointer inline-flex items-center gap-1 md:gap-2 text-black   rounded-full md:py-3 py-1 md:px-6 `}>
                            < IoIosMale className=" text-xl mt-[2px]" />
                            <p className=" font-sans font-semibold">Man</p> 
                        </div>
                        <div  onClick={()=>setExplor(3)} className={` ${explor === 3 && "bg-black text-white" } text-xs md:text-base  womon cursor-pointer inline-flex items-center gap-1 md:gap-2 text-black   rounded-full md:py-3 py-1 md:px-6 `}>
                            < FaChild className=" text-xl mt-[2px]" />
                            <p className=" font-sans font-semibold">Kids</p> 
                        </div>
                        <div  onClick={()=>setExplor(4)} className={` ${explor === 4 && "bg-black text-white" } text-xs md:text-base  womon cursor-pointer inline-flex items-center gap-1 md:gap-2 text-black   rounded-full md:py-3 py-1 md:px-6 `}>
                            < MdOutlineSportsBasketball className=" text-xl mt-[2px]" />
                            <p className=" font-sans font-semibold">Sports</p> 
                        </div>
                        <div  onClick={()=>setExplor(5)} className={` ${explor === 5 && "bg-black text-white" } text-xs md:text-base  womon cursor-pointer inline-flex items-center gap-1 md:gap-2 text-black   rounded-full md:py-3 py-1 md:px-6 `}>
                            < GiJeweledChalice className=" text-xl mt-[2px]" />
                            <p className=" font-sans font-semibold">Beuty</p> 
                        </div>
                        
                   </div>
                </div>
             </div>
             <div className="main">
                 <div className="content grid grid-cols-1 md:grid-cols-3 gap-6 my-12 ">
                    {
                        explorData.map(item=>
                            <div key={item?.downImage} className="main rounded-3xl overflow-hidden hover:shadow-2xl group">
                                <div className="content">
                                  <div className="content relative bg-red-500 rounded-3xl">
                                        <div className="image">
                                            <img className="h-[320px] w-full" src={item?.product} alt="img" />
                                        </div>
                                       <div className="content w-full  absolute top-0">
                                            <div className="items m-8 flex flex-col gap-6 ">
                                                <div className="image flex justify-between w-full items-center">
                                                        <div className="image bg-[#fff7ed] rounded-full">
                                                            <img className=" h-20 w-20" src={item?.downImage} alt="img" />
                                                        </div>
                                                        <div className="text">
                                                            <p className=" font-sans text-[14px] font-semibold">{item?.produtItem} Products</p>
                                                        </div>
                                                </div> 
                                                <div className="middle">
                                                    <p className=" font-sans text-[16px] font-semibold text-[#708ca8]">Manufactur</p>
                                                    <h1 className=" text-[30px] font-semibold font-sans">{item?.name}</h1>
                                                </div>
                                                <div className="link group-hover:text-[#3574d2] duration-300">
                                                    <Link className=" flex items-center gap-2 font-sans text-[16px]" to={`product/${item?.id}`}>See Collection <FaArrowRightLong className="mt-[3px]" /> </Link>
                                                </div>
                                            </div>
                                       </div> 
                                  </div>
                                </div>
                            </div>
                        )
                    }
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Explore