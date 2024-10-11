import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation and Autoplay modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import { useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBagHandle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FachingData } from "./FaceData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementProduct,  } from "../Redux/slice";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import PriceFormat from "./PriceFormat";


function Slider({dataLink}) {

  const [arravalData,setIncomingData] = useState([])   
 
  useEffect(()=>{
    const incomingData = async()=>{
      try{
        const response = await FachingData(dataLink) 

        if(response === undefined || response === null){
         return setIncomingData([])
        }else{
          setIncomingData(response)
        }
        

      }catch(error){
       console.log(error)
      }

    
    }
    
   incomingData()
  },[dataLink])
 
  // color border area start 
  const [border,setBorder] = useState({id: '1', number: 2, color: 'Black'})
  // size area start
  const [producrSize , setSize] = useState("X")
  // product increment area start
  const incremetDispatch = useDispatch()
  // decrement product area
  const decrementDispatch = useDispatch()

  // redux area start
  const productDisPatch = useDispatch()
  const cartDataItem = useSelector((item)=>item?.myStore?.CartData) 
  return (
    <div className="main ">
      <div className=" xs:mx-2 md:mx-10 relative">
        <Swiper
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Navigation, Autoplay]} // Pass both Navigation and Autoplay modules
         
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2, // 1 slide for mobile screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides for screens >= 1024px
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4, // 4 slides for screens >= 1440px
              spaceBetween: 40,
            },
          }}
        >
           {
             arravalData.map((item)=>{
               
              const existingCardData = cartDataItem.find((data)=>data?.id ===item?.id) 
              

               
             return(
              <SwiperSlide key={item?.id} >
                 <div className="content  cursor-pointer">
                    <div className="image bg-[#edefef] group rounded-lg relative overflow-hidden">
                        <Link to={`product/${item?.id}`}>
                           <img className=" w-full h-full rounded-lg" src={item?.images[0]} alt="image" />
                        </Link>
                        {/* image inner area */}
                        <div className="bottom w-full  justify-center items-center group-hover:bottom-3 duration-300 absolute bottom-[-100px]  ">
                            <div className="content flex gap-1 md:gap-4 justify-center items-center">
                              <div onClick={()=>setSize("XS")} className="item">
                                  <div className="item bg-white px-3 py-2 cursor-pointer hover:bg-black hover:text-white duration-300 rounded-lg">
                                      <p className=" uppercase font-sans font-semibold">XS</p>
                                  </div>
                              </div>
                              <div onClick={()=>setSize("S")} className="item">
                                  <div className="item bg-white px-3 py-2 cursor-pointer hover:bg-black hover:text-white duration-300 rounded-lg">
                                      <p className=" uppercase font-sans font-semibold">S</p>
                                  </div>
                              </div>
                              <div onClick={()=>setSize("M")} className="item">
                                  <div className="item bg-white px-3 py-2 cursor-pointer hover:bg-black hover:text-white duration-300 rounded-lg">
                                      <p className=" uppercase font-sans font-semibold">M</p>
                                  </div>
                              </div>
                              <div onClick={()=>setSize("L")} className="item">
                                  <div className="item bg-white px-3 py-2 cursor-pointer hover:bg-black hover:text-white duration-300 rounded-lg">
                                      <p className=" uppercase font-sans font-semibold">L</p>
                                  </div>
                              </div>
                              <div onClick={()=>setSize("XL")} className="item">
                                  <div className="item bg-white px-3 py-2 cursor-pointer hover:bg-black hover:text-white duration-300 rounded-lg">
                                      <p className=" uppercase font-sans font-semibold">Xl</p>
                                  </div>
                              </div>
                            </div>
                        </div>
                        {/* image inner add cart area */}
                        <div className="bottom w-full  justify-center items-center group-hover:top-3 duration-300 absolute top-[-100px]  ">
                           <div className="content w-full flex justify-center items-center">
                              {
                                existingCardData ?
                                <div className="button-area">
                                 <div className=" bg-black px-4 py-2 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div 
                                           onClick={()=>incremetDispatch(addToCart({
                                            id:item?.id
                                           }))}
                                        className="plus text-white bg-indigo-600 rounded-full w-8 h-8 flex justify-center items-center"><FaPlus /></div>
                                        <div className="quantity text-white">{existingCardData?.quantity}</div>
                                        <div 
                                         onClick={()=>decrementDispatch(decrementProduct({
                                           id:item?.id
                                         }))}
                                        className="minus text-white bg-indigo-600 rounded-full w-8 h-8 flex justify-center items-center"><GoDash /></div>
                                    </div>
                                 </div>
                               </div>:
                               <div className="content flex gap-2 justify-center items-center">
                                  <div
                                   onClick={()=>productDisPatch(addToCart({
                                     id:item?.id,
                                     image:item?.images[0],
                                     name:item?.name,
                                     category:item?.category,
                                     price:item?.price,
                                     color:border?.color,
                                     size:producrSize,
                                     quantity:1
                                   }))}
                                  className="button">
                                     <button className=" bg-black shadow-xl rounded-full text-[12px] font-sans text-white px-1 md:px-3 py-1 flex items-center md:gap-2 "> <IoBagHandle  className="text-[12px] "/> <p className="mt-[2px]">Add to bag</p> </button>
                                  </div>
                                  <div className="view">
                                    <Link to={`product/${item?.id}`} className="button">
                                      <button className=" bg-white shadow-xl rounded-full text-[12px] font-sans text-black px-3 py-1 flex items-center gap-2 "> <BsArrowsFullscreen  className="text-[12px] "/> <p className="">Quick view</p> </button>
                                    </Link>
                                  </div>
                               </div> 
                               
                               }
                           </div>
                        </div>
                    </div>
                    <div className="text-area">
                      <div className="color-area xs:my-2 my-4 flex xs:gap-2  gap-4 ">
                        <div onClick={()=>setBorder({id:item?.id,number:1,color:"pink"})} className={` ${border.id === item?.id && border.number === 1 && " border border-pink-700 "}  flex justify-center items-center  xs:h-3 xs:w-3  md:h-5  md:w-5 rounded-full `}>
                             <div className="inner bg-pink-700 xs:h-2 xs:w-2 md:h-4 md:w-4 rounded-full"></div>
                        </div>
                        <div onClick={()=>setBorder({id:item?.id,number:2,color:"Yellow"})} className={` ${border.id === item?.id && border.number === 2  && " border border-[#facc15] "}  flex justify-center items-center xs:h-3 xs:w-3  md:h-5  md:w-5 rounded-full `}>
                             <div className="inner bg-[#facc15] xs:h-2 xs:w-2 md:h-4 md:w-4 rounded-full"></div>
                        </div>
                        <div onClick={()=>setBorder({id:item?.id,number:3,color:"Sky"})} className={` ${border.id === item?.id && border.number === 3 && " border border-[#fb923c] "}  flex justify-center items-center    xs:h-3 xs:w-3 md:h-5  md:w-5 rounded-full `}>
                             <div className="inner bg-[#fb923c] xs:h-2 xs:w-2 md:h-4 md:w-4 rounded-full"></div>
                        </div>
                        <div onClick={()=>setBorder({id:item?.id,number:4,color:"SkyBlue"})} className={` ${border.id === item?.id && border.number === 4  && " border border-[#38bdf8] "}  flex justify-center items-center  xs:h-3 xs:w-3 md:h-5  md:w-5 rounded-full `}>
                             <div className="inner bg-[#38bdf8] xs:h-2 xs:w-2 md:h-4 md:w-4 rounded-full"></div>
                        </div>
                        <div onClick={()=>setBorder({id:item?.id,number:5,color:"green"})} className={` ${ border.id === item?.id && border.number === 5  && " border border-[#4ade80] "}  flex justify-center items-center xs:h-3 xs:w-3 md:h-5  md:w-5 rounded-full `}>
                             <div className="inner bg-[#4ade80] xs:h-2 xs:w-2 md:md:h-4 md:md:w-4 rounded-full"></div>
                        </div>
                      </div>
                      {/* title area start */}
                      <div className="text-area">
                         <div className="text">
                           <p className=" font-sans font-bold text-xl xs:text-base">{item?.name}</p>
                         </div>
                         <div className="catagory">
                           <p className="font-sans font-medium">Catagory :{item?.category}</p>
                         </div>
                         <div className="prize-rating md:my-2 md:flex md:justify-between items-center">
                            <div className="price my-4 md:my-0 border-2 rounded-lg border-[#22c55e] inline-block">
                               <p className=" px-2 font-semibold"><PriceFormat className="xs:text-[10px] md:text-base" price={item?.price}/></p>
                            </div>
                            <div className="rating my-1 md:my-0 flex items-center gap-2 font-sans">
                              <FaStar className=" text-[#fbbf24]" /> <p>{item?.rating}</p><p className="mt-[-2px]">(98 review)</p>
                            </div>
                         </div>
                      </div>
                    </div>
                 </div>
             </SwiperSlide>)
             }
            )
           }
          
        </Swiper>
        <div className="icon flex gap-8 absolute -top-20 md:-top-20 right-0 ">
           <div className="custom-prev cursor-pointer text-5xl"><button className="text-[25px] md:text-[35px]">‹</button></div>
           <div className="custom-next cursor-pointer text-5xl"> <button className="text-[25px] md:text-[35px]">›</button></div>
       </div>
      </div>
    </div>
  );
}

export default Slider;
