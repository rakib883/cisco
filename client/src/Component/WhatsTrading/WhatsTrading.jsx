import { useEffect, useState } from "react"
import InnerTitle from "../../UI/InnerTitle"
import { LuFilter } from "react-icons/lu";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Seperator from "../../UI/Seperator";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { IoResize } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdColorFill } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RangeSlider } from 'rsuite';
import "./what.css"
import { motion } from 'framer-motion';
import { FachingData } from './../../UI/FaceData';
import ProductList from "../../UI/ProductList";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";









const WhatsTrading = () => {






  // prize range area start
  const [prizeRange,setPrizeRange] = useState([20,30])
  const [innerContent,setInnercontent] = useState()
  
  // keywork remove area
  const [removeItem,setRemoveItem] = useState()
  const [inSale,setOnsale] = useState()
//  ternding data faching area staart
const [productData,setProductData] = useState([])
useEffect(()=>{
  const incomingData = async()=>{
      try{
        const response = await FachingData("https://cisco-sigma.vercel.app/trending-product")
        setProductData(response)
      }catch(error){
        console.log(error)
      }
  }
  incomingData()
},[])



// trending data catagory filter area start
 const [catagoryData,setCatagoryData] = useState("")
    const catagoryHandeler = async()=>{
        if(catagoryData){
            try{
              const response = await fetch(`https://cisco-sigma.vercel.app/${catagoryData.link}`)
              const result = await response.json()
              if( result && result.length > 0){
                setProductData(result)
              }
              setInnercontent(0)
              setFilter(false)
          }catch(error){
          console.log(error)
          setInnercontent(0)
          }
        }

    }
  // prize range area start
   



  // color area start 
  const [color,setColor] = useState("")
    const colorFilter = async()=>{
      try{
          const response = await FachingData(`https://cisco-sigma.vercel.app/color/filter/${color}`)
          if(response.length > 0){
            setProductData(response)
          }
          setInnercontent(0)
          setFilter(false)
      }catch(error){
        setInnercontent(0)
        console.log(error)
      }
    }


    // size area start
  const [size,setSize] = useState("")
  const sizeFilterHandeler =async()=>{
      try{
         const response = await FachingData(`https://cisco-sigma.vercel.app/product/color/${size}`)
         if(response.length > 0){
          setProductData(response)
         }
         setInnercontent(0)
         setFilter(false)
      }catch(error){
        setInnercontent(0)
       console.log(error)
      }
  }

  const buttonQuantity = useSelector((quantity)=>quantity?.myStore?.CartData) 
//  mobile folter area start
const [filter,setFilter] = useState(false)
const filterHandeler =()=>{
  setFilter(!filter)
}
// mobile filter area start

// dweskto[ filter area start]
const [hoverStyle,setHover] = useState(1)


  return (
    <div>
      
         {/* mobil filter area start */}
          <div className="content">
            <div className={`${filter === false ? "hidden" : "block"} bg-white no-scrollbar    top-0 z-50 overflow-auto  w-full min-h-screen  fixed `}>
              <div className="main-content ">
                <div className="content bg-gray-200 sticky top-0">
                  <div className="header flex items-center justify-between mx-8  border-b-2  py-2 ">
                      <div onClick={()=>setFilter(false)} className="cross cursor-pointer">
                        <RxCross2 className=" text-xl" />
                      </div>
                      <div className="head"><p className=" font-semibold">Product filter</p></div>
                      <div className="bla"></div>
                  </div>
                </div>
                  {/* main content */}
                 <div className="item h-[2000px]">
                     {/* catagory area start */}
                      <div className=" my-8 catagory">
                         <div className="inner-area bg-white z-50  overflow-hidden   mt-6  w-[300px]">
                            <div className="content mx-6">
                                <div className="title cursor-pointer">
                                  <h1 onClick={()=>{setCatagoryData({link:"trending-product",id:8}),filterHandeler}} className=" flex gap-4 items-center">
                                      <input onChange={(e)=>e.target.value} checked={catagoryData.id === 8} className="customBorder" type="checkbox" /> 
                                      <p className="text-[16px]  font-sans text-[#4b515f]">All Categories</p>
                                  </h1>
                                </div>
                                <div className="border-item bg-[#eff0f2] w-full h-[.5px] mb-2"></div>
                                <div className="content">
                                  <div className="item">
                                        <h1 onClick={()=>setCatagoryData({link:"LeatherWallet",id:6})} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} checked={catagoryData.id === 6} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#464b5a]">Leather Wallet</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"shoes",id:1})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 1} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Shoes</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"Smartwatch",id:2})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 2} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Smartwatch</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"back",id:3})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 3} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Travel bags</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"laptopsalvees",id:4})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 4} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Laptop salvees</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"tshirt",id:5})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 5} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Tshirt</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"pant",id:7})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 7} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Pant</p>
                                        </h1>
                                  </div>
                                </div>
                            </div>
                            <div className="submit  py-2 mt-4">
                                  <div className="button-area mx-6 flex justify-between ">
                                    <button onClick={()=>setFilter(false)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                        Clear
                                    </button>
                                    <button onClick={catagoryHandeler} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                        Apply
                                    </button>
                                  </div>
                            </div>
                          </div>
                      </div> 
                      {/* div.color-area start */}
                      <div className="color">
                            <div className="inner-area  bg-white z-50  mt-6  w-[300px]">
                              <div className="content mx-6">
                                   <div className="content py-6">
                                   <h1 onClick={()=>{setCatagoryData({link:"trending-product",id:8}),filterHandeler}} className=" flex gap-4 items-center">
                                      <input onChange={(e)=>e.target.value} checked={catagoryData.id === 8} className="customBorder" type="checkbox" /> 
                                      <p className="text-[16px]  font-sans text-[#4b515f]">All Color</p>
                                  </h1>
                                    <div className="item">
                                          <h1 onClick={()=>setColor("White")} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                              <input onChange={(e)=>setColor(e.target.value)} value="White" checked={color === "White"} className="customBorder cursor-pointer" type="checkbox" /> 
                                              <p className="text-[16px] font-sans text-[#464b5a]">White</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Beige")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Beige" checked={color === "Beige"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Beige</p>
                                          </h1>
                                          <h1  onClick={()=>setColor("Blue")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Blue" checked={color === "Blue"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Blue</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Black")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Black" checked={color === "Black"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Black</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Gray")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>setColor(e.target.value)} value="Gray" checked={color === "Gray"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Gray</p>
                                          </h1>
                                    </div>
                                  </div>
                              </div>
                              <div className="submit  py-4 mt-4">
                                    <div className="button-area mx-6 flex justify-between ">
                                      <button onClick={()=>setFilter(false)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                          Clear
                                      </button>
                                      <button onClick={colorFilter} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                          Apply
                                      </button>
                                    </div>
                              </div>
                            </div>
                      </div>
                      {/* size area start */}
                       <div className="size-area">
                         <div className="inner-area  overflow-hidden mx-2  mt-6 rounded-xl w-[300px]">
                              <div className="content mx-6">
                                  <div className="content py-6">
                                    <h1 onClick={()=>{setCatagoryData({link:"trending-product",id:8}),filterHandeler}} className=" flex gap-4 items-center">
                                        <input onChange={(e)=>e.target.value} checked={catagoryData.id === 8} className="customBorder" type="checkbox" /> 
                                        <p className="text-[16px]  font-sans text-[#4b515f]">All Size</p>
                                    </h1>
                                    <div className="item">
                                          <h1 onClick={()=>setSize("XXS")} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                              <input onChange={(e)=>e.target.value} value="XXS" checked={size === "XXS"} className="customBorder cursor-pointer" type="checkbox" /> 
                                              <p className="text-[16px] font-sans text-[#464b5a]">XXS</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("XS")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>e.target.value} value="XS" checked={size === "XS"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">XS</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("S")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>e.target.value} value="S" checked={size === "S"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">S</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("M")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} value="M" checked={size === "M"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">M</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("L")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} value="L" checked={size === "L"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">L</p>
                                          </h1>
                                    </div>
                                  </div>
                              </div>
                              <div className="submit  py-4 mt-4">
                                    <div className="button-area mx-6 flex justify-between ">
                                      <button onClick={()=>setFilter(false)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                          Clear
                                      </button>
                                      <button onClick={sizeFilterHandeler} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                          Apply
                                      </button>
                                    </div>
                              </div>
                        </div>
                       </div>
                      <div className="item h-[1700px]"></div>
                 </div>
                 {/* main content */}
                 <div className="header bg-gray-300 flex justify-center items-center font-semibold fixed w-full bottom-0 py-2">
                    <p>Product filter</p>
                 </div>
              </div>
            </div>
        </div> 
        {/* mobile area end */}


        <div className="content xs:mx-2 lg:mx-10 mt-[50px]">
            <div className="title">
               <div className="top my-8">
                 <InnerTitle title="What's trending now" className=""/>
                  <p className="text-[18px] font-sans text-[#718094]">Discover the most trending products in Ciseco.</p>
               </div>
            </div>
            <div className="menu">
              <div className=" grid  md:flex items-center">
                  <div className="   justify-center md:justify-start md:flex  md:gap-4">
                    <div onClick={()=>setHover(1)} className="menu-item cursor-pointer">
                       <p className={`${hoverStyle === 1 ? "bg-black text-white" : "text-[#66748b] hover:bg-slate-100  " }  font-semibold px-6 py-2 rounded-full`}>All</p>
                    </div>
                    <div onClick={()=>setHover(2)} className="menu-item cursor-pointer">
                       <p className={`${hoverStyle === 2 ? "bg-black text-white" : "text-[#66748b] hover:bg-slate-100  " }  font-semibold px-6 py-2 rounded-full`}>Women</p>
                    </div>
                    <div onClick={()=>setHover(3)} className="menu-item cursor-pointer">
                       <p className={`${hoverStyle === 3 ? "bg-black text-white" : "text-[#66748b] hover:bg-slate-100  " }  font-semibold px-6 py-2 rounded-full`}>Man</p>
                    </div>
                    <div onClick={()=>setHover(4)} className="menu-item cursor-pointer">
                       <p className={`${hoverStyle === 4 ? "bg-black text-white" : "text-[#66748b] hover:bg-slate-100  " }  font-semibold px-6 py-2 rounded-full`}>Kids</p>
                    </div>
                    <div onClick={()=>setHover(5)} className="menu-item cursor-pointer">
                       <p className={`${hoverStyle === 5 ? "bg-black text-white" : "text-[#66748b] hover:bg-slate-100  " }  font-semibold px-6 py-2 rounded-full`}>Jewels</p>
                    </div>
                  </div>
                  <div onClick={filterHandeler} className="md:hidden my-4 md:my-0 w-full flex bg-black md:bg-[#ffffff] rounded-full  justify-center md:justify-end">
                    <button className=" flex  items-center gap-2 bg-black text-white px-6 py-2 rounded-full">
                      <LuFilter className=" text-xl" /> <p className=" font-sans font-semibold ">Filter</p> <MdOutlineKeyboardArrowUp className="ml-4 text-2xl mt-[3px]" />
                    </button>
                  </div>
              </div>
            </div>


            <div className="">
               <Seperator/>
            </div>
            {/* keywork area start */}
            <div className=" hidden md:block">
               <div className="content flex items-center justify-between">
                 <div className="items flex gap-4">
                  {/* prize range are start */}
                   <div className={` ${inSale === 1 ? " hidden" : " block"} parent relative`}>

                      <button onClick={()=>setInnercontent(1)} className=" flex items-center font-sans gap-4 border border-[#79ccf2] rounded-full bg-sky-200 px-4 py-2">
                        <HiOutlineCurrencyDollar className=" text-lg" /> <p>500$-1000$</p> <HiMiniXMark onClick={()=>setOnsale(1)} className=" text-lg text-white bg-[#79ccf2] rounded-full" />
                      </button>
                      {
                        innerContent === 1 &&
                      <motion.div 
                        initial={{y:100,opacity:0}}
                        animate={{y:-10,opacity:1}}
                        transition={{duration:.5,y:{type:"spring"}}}
                        className="inner-content shadow-xl z-50 absolute w-[350px] border bg-white mt-6 rounded-xl">
                          <div className="content m-6">
                             <h1 className="my-2 text-[16px] font-semibold font-sans">Prize Range</h1>
                             <div className="prize-range">
                               <RangeSlider max={50} min={20} className="" value={prizeRange} onChange={(value) => setPrizeRange(value)} />
                             </div>
                             <div className="prize-display flex justify-between my-4">
                                <div className="max">
                                  <p className=" font-sans font-semibold mx-2">Min price</p>
                                   <div className="prize text-[16px] flex items-center w-[100px] justify-between rounded-full px-[8px] py-[4px] my-2  border-2">
                                      <p className="">{prizeRange[0]}</p>
                                      <p className=" mt-[-3px]">$</p>
                                   </div>
                                </div>
                                <div className="min">
                                  <p className=" font-sans font-semibold mx-2">Max price</p>
                                  <div className="prize text-[16px] flex items-center w-[100px] justify-between rounded-full px-[8px] py-[4px] my-2  border-2">
                                      <p className="">{prizeRange[1]}</p>
                                      <p className="mt-[-3px]">$</p>
                                   </div>
                                </div>
                             </div>
                             <div className="submit-area mt-8 flex justify-between">
                               <div className="clear">
                                   <button onClick={()=>setInnercontent(0)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                       Clear
                                   </button>
                               </div>
                               <div className="apply">
                                   <button className=" bg-black text-white border text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                       Apply
                                   </button>
                               </div>
                             </div>
                          </div>
                      </motion.div>
                      }
                   </div>
                   {/* prize range are end */}



                   {/* catagory area start */}
                    <div className="catagory relative">
                        <button onClick={()=>setInnercontent(2)} className="  text-[#66748b] font-sans flex items-center gap-4 border  rounded-full  hover:border-gray-400 px-4 py-2">
                          <BiSolidCategoryAlt className=" text-lg" /> <p>Categories</p> <MdKeyboardArrowDown  className=" text-lg mt-[3px] rounded-full" />
                        </button>
                        {
                           innerContent === 2 &&
                          <motion.div 
                           initial={{y:100,opacity:0}}
                           animate={{y:-10,opacity:1}}
                           transition={{duration:.5,y:{type:"spring"}}}
                          className="inner-area bg-white z-50 absolute shadow-xl overflow-hidden border  mt-6 rounded-xl w-[300px]">
                            <div className="content mx-6">
                                <div className="title cursor-pointer">
                                  <h1 onClick={()=>setCatagoryData({link:"trending-product",id:8})} className=" flex gap-4 items-center">
                                      <input onChange={(e)=>e.target.value} checked={catagoryData.id === 8} className="customBorder" type="checkbox" /> 
                                      <p className="text-[16px]  font-sans text-[#4b515f]">All Categories</p>
                                  </h1>
                                </div>
                                <div className="border-item bg-[#eff0f2] w-full h-[.5px] mb-2"></div>
                                <div className="content">
                                  <div className="item">
                                        <h1 onClick={()=>setCatagoryData({link:"LeatherWallet",id:6})} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} checked={catagoryData.id === 6} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#464b5a]">Leather Wallet</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"shoes",id:1})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 1} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Shoes</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"Smartwatch",id:2})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 2} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Smartwatch</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"back",id:3})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 3} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Travel bags</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"laptopsalvees",id:4})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 4} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Laptop salvees</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"tshirt",id:5})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 5} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Tshirt</p>
                                        </h1>
                                        <h1 onClick={()=>setCatagoryData({link:"pant",id:7})}  className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                          <input onChange={(e)=>e.target.value} checked={catagoryData.id === 7} className="customBorder cursor-pointer" type="checkbox" /> 
                                          <p className="text-[16px] font-sans text-[#4b515f]">Pant</p>
                                        </h1>
                                  </div>
                                </div>
                            </div>
                            <div className="submit bg-[#f9fafb] py-2 mt-4">
                                  <div className="button-area mx-6 flex justify-between ">
                                    <button onClick={()=>setInnercontent(0)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                        Clear
                                    </button>
                                    <button onClick={catagoryHandeler} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                        Apply
                                    </button>
                                  </div>
                            </div>
                          </motion.div>
                        }
                     </div>    
                   {/* catagory area end */}
                   {/* color area start */}
                     <div className="content relative">
                        <button onClick={()=>setInnercontent(3)} className=" text-[#66748b] font-sans  flex items-center gap-2  border  rounded-full  hover:border-gray-400 px-4 py-2">
                          <IoMdColorFill className=" text-lg" /> <p>Color</p> <MdKeyboardArrowDown className=" text-lg mt-[3px]  rounded-full" />
                        </button>
                        {
                             innerContent === 3 &&
                            <motion.div 
                            initial={{y:100,opacity:0}}
                            animate={{y:-10,opacity:1}}
                            transition={{duration:.5,y:{type:"spring"}}}
                            className="inner-area absolute bg-white z-50 shadow-xl overflow-hidden border  mt-6 rounded-xl w-[300px]">
                              <div className="content mx-6">
                                   <div className="content py-6">
                                    <div className="item">
                                          <h1 onClick={()=>setColor("White")} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                              <input onChange={(e)=>setColor(e.target.value)} value="White" checked={color === "White"} className="customBorder cursor-pointer" type="checkbox" /> 
                                              <p className="text-[16px] font-sans text-[#464b5a]">White</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Beige")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Beige" checked={color === "Beige"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Beige</p>
                                          </h1>
                                          <h1  onClick={()=>setColor("Blue")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Blue" checked={color === "Blue"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Blue</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Black")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>setColor(e.target.value)} value="Black" checked={color === "Black"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Black</p>
                                          </h1>
                                          <h1 onClick={()=>setColor("Gray")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>setColor(e.target.value)} value="Gray" checked={color === "Gray"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">Gray</p>
                                          </h1>
                                    </div>
                                  </div>
                              </div>
                              <div className="submit bg-[#f9fafb] py-4 mt-4">
                                    <div className="button-area mx-6 flex justify-between ">
                                      <button onClick={()=>setInnercontent(0)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                          Clear
                                      </button>
                                      <button onClick={colorFilter} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                          Apply
                                      </button>
                                    </div>
                              </div>
                            </motion.div>
                        }
                      </div>
                   {/* color are end */}


                   {/* size area start */}
                   <div className="content relative">
                      <button onClick={()=>setInnercontent(4)} className=" text-[#66748b] font-sans  flex items-center gap-2 border  rounded-full  hover:border-gray-400 px-4 py-2">
                        <IoResize className=" text-lg" /> <p>Size</p> <MdKeyboardArrowDown  className=" text-lg mt-[3px] rounded-full" />
                      </button>
                      {
                      
                      innerContent === 4 &&
                      <motion.div 
                            initial={{y:100,opacity:0}}
                            animate={{y:-10,opacity:1}}
                            transition={{duration:.5,y:{type:"spring"}}}
                            className="inner-area absolute z-50 shadow-xl bg-white overflow-hidden border  mt-6 rounded-xl w-[300px]">
                              <div className="content mx-6">
                                  <div className="content py-6">
                                    <div className="item">
                                          <h1 onClick={()=>setSize("XXS")} className=" flex gap-4 items-center h-[35px] cursor-pointer">
                                              <input onChange={(e)=>e.target.value} value="XXS" checked={size === "XXS"} className="customBorder cursor-pointer" type="checkbox" /> 
                                              <p className="text-[16px] font-sans text-[#464b5a]">XXS</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("XS")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>e.target.value} value="XS" checked={size === "XS"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">XS</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("S")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input  onChange={(e)=>e.target.value} value="S" checked={size === "S"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">S</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("M")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} value="M" checked={size === "M"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">M</p>
                                          </h1>
                                          <h1 onClick={()=>setSize("L")} className=" flex gap-4 items-center  h-[35px] cursor-pointer">
                                            <input onChange={(e)=>e.target.value} value="L" checked={size === "L"} className="customBorder cursor-pointer" type="checkbox" /> 
                                            <p className="text-[16px] font-sans text-[#4b515f]">L</p>
                                          </h1>
                                    </div>
                                  </div>
                              </div>
                              <div className="submit bg-[#f9fafb] py-4 mt-4">
                                    <div className="button-area mx-6 flex justify-between ">
                                      <button onClick={()=>setInnercontent(0)} className=" border hover:bg-gray-400 text-lg px-6 py-1 rounded-full font-semibold font-sans">
                                          Clear
                                      </button>
                                      <button onClick={sizeFilterHandeler} className=" border  text-lg bg-black text-white px-6 py-1 rounded-full font-semibold font-sans">
                                          Apply
                                      </button>
                                    </div>
                              </div>
                      </motion.div>
                      }
                    </div>
                    {/* size area end */}
                    <div className="md:hidden lg:block">
                      <button  className={`${removeItem === 2 ? " hidden" : " block" } flex items-center font-sans gap-2 border border-[#79ccf2] rounded-full bg-sky-200 px-4 py-2 `}>
                        <LiaUniversalAccessSolid  className=" text-lg" /> <p>On sale</p> <HiMiniXMark onClick={()=>setRemoveItem(2)} className=" text-lg text-white bg-[#79ccf2] rounded-full" />
                      </button>
                    </div>  
                 </div> 
                  <div className="md:hidden lg:block">
                      <button className=" flex items-center font-sans gap-4 border border-[#79ccf2] rounded-full bg-sky-200 px-4 py-2">
                        <HiOutlineCurrencyDollar className=" text-lg" /> <p>Most Popular</p> <HiMiniXMark  className=" text-lg text-white bg-[#79ccf2] rounded-full" />
                      </button>
                      
                  </div>
               </div>
            </div>





            {/* product area strat */}
            <div className="main">
            {
                hoverStyle === 1 &&
                <div className="maon my-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productData.length < 0 ?
                      <div className="main">{productData.message}</div> :
                      productData.map((item)=>{
                        const singleData =  buttonQuantity.find((productItem)=>productItem?.id ===item?.id)
                        return(
                        <ProductList key={item?.id} quantity={singleData?.quantity}  item={item}/>
                        )
                        }
                      )
                    }
                </div>
              }
            </div>
            <div className="">
              {
                  hoverStyle === 2 &&
               <div className="maon my-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productData.length < 0 ?
                      <div className="main">{productData.message}</div> :
                      productData.map((item)=>{
                        const singleData =  buttonQuantity.find((productItem)=>productItem?.id ===item?.id)
                        return(
                        <ProductList key={item?.id} quantity={singleData?.quantity}  item={item}/>
                        )
                        }
                      )
                    }
               </div>
                }
            </div>
            <div className="all">
               {
                  hoverStyle === 3 &&
                <div className="maon my-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productData.length < 0 ?
                      <div className="main">{productData.message}</div> :
                      productData.map((item)=>{
                        const singleData =  buttonQuantity.find((productItem)=>productItem?.id ===item?.id)
                        return(
                        <ProductList key={item?.id} quantity={singleData?.quantity}  item={item}/>
                        )
                        }
                      )
                    }
                </div>
                }
            </div>
            <div className="all">
               {
                  hoverStyle === 4 &&
                <div className="maon my-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productData.length < 0 ?
                      <div className="main">{productData.message}</div> :
                      productData.map((item)=>{
                        const singleData =  buttonQuantity.find((productItem)=>productItem?.id ===item?.id)
                        return(
                        <ProductList key={item?.id} quantity={singleData?.quantity}  item={item}/>
                        )
                        }
                      )
                    }
                </div>
                }
            </div>
            <div className="all">
               {
                  hoverStyle === 5 &&
                <div className="maon my-6  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {
                      productData.length < 0 ?
                      <div className="main">{productData.message}</div> :
                      productData.map((item)=>{
                        const singleData =  buttonQuantity.find((productItem)=>productItem?.id ===item?.id)
                        return(
                        <ProductList key={item?.id} quantity={singleData?.quantity}  item={item}/>
                        )
                        }
                      )
                    }
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default WhatsTrading