import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FachingData } from "../UI/FaceData"
import { FaStar } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { Button } from "rsuite";
import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import Seperator from "../UI/Seperator";
import According from "../UI/Colaps";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import InnerTitle from "../UI/InnerTitle";
import SpecialOffer from "../Component/SpecialOffer/SpecialOffer";


const SingleProduct = () => {
  const productId = useParams()
  const {id} = productId


  // data faching area start
  const [product,setProduct] = useState(null)
   useEffect(()=>{
     const incomingData = async()=>{
         const response = await FachingData(`https://cisco-sigma.vercel.app/product/${id}`)
         setProduct(response)
     }
     incomingData()
   },[id])


  // color changer area
  const [currentColor,setCurrentColor] = useState("white")

  // size area start
  const [currentSize,setSize] = useState("M")

  // review data faching area start
  const [reviewData,setReview] = useState([])
  useEffect(()=>{
    const incomingData = async()=>{
       const response = await FachingData("https://cisco-sigma.vercel.app/review")
       setReview(response)
    }
    incomingData()
  },[])






  return (
    <div>
       <div className="content mx-10">
          <div className="item flex justify-between my-8 gap-4">
             <div className="image w-[50%]">
                 <div className="image bg-[#f1f3f4]">
                   <img className=" h-full w-full" src={product?.images[0]} alt="product" />
                 </div>
                 <div className="bottom image flex justify-between gap-6 my-6">
                    <div className="first w-[50%] bg-[#f1f3f4]">
                       <img className="w-full" src={product?.images[0]} alt="product" />
                    </div>
                    <div className="secend w-[50%] bg-[#f1f3f4]">
                        <img className=" w-full" src={product?.images[0]} alt="product" />
                    </div>
                 </div>
             </div>
             <div className="items w-[50%]">
                <h1 className=" text-[30px] font-sans font-semibold">{product?.name}</h1>
                <div className="price flex items-center gap-4 ">
                    <div className="price">
                       <p className=" font-sans text-[16px] font-medium border-2 border-green-700 inline-flex rounded-lg px-1 py-[2px] text-green-700">${product?.price}</p>
                    </div>
                    <div className="rating border-l-2 px-2 mt-2">
                       <div className="start flex items-center gap-1">
                         <FaStar className=" text-[#facc15]" /> <p className=" font-sans text-base font-semibold">{product?.rating}</p> <p className=" mt-[-1px] mx-2 font-sans text-base font-semibold">455 review</p>
                       </div>
                    </div>
                </div>
                 {/* color area start */}
                   <div className="color-area my-4">
                      <p className=" font-sans text-[14px] text-black font-semibold">Color:{currentColor}</p>
                      <div className="content flex gap-2 my-2">
                         {
                          product?.colors?.map((item)=>{
                            return(

                             <div key={item} className="main">
                                <div onClick={()=>setCurrentColor(item)}   style={item === currentColor ? { border: `2px solid ${item}` } : {}} className="item cursor-pointer border-[2px]  h-5 w-5 rounded-full flex justify-center items-center">
                                    <div style={{backgroundColor:item.toString()}} className={`  h-3 w-3 rounded-full`}></div>
                                </div> 
                             </div>
                            )
                          })
                        }
                      </div>
                    </div>

                    {/* size area start */}
                    <div className="content">
                       <p className=" font-sans text-[14px] text-black font-semibold">Size:  {currentSize}</p>
                       <div className="item flex gap-4">
                         {
                          product?.sizes?.map((item)=>{
                            console.log(item)
                            return(
                              <div key={item} className="main my-2">
                                    <div onClick={()=>setSize(item)} className={`${ item === currentSize ? "bg-[#0284c7] text-white" : ""} w-12 h-8 p-4 border  inline-flex justify-center items-center cursor-pointer  leading-[12px] rounded-xl`}>
                                        <p className=" font-sans text-[14px] font-semibold" >{item}</p>
                                    </div>
                              </div>
                            )
                          })
                         } 
                       </div>
                    </div>

                    {/* increment decrement area start */}
                    <div className="add-tocart-area w-full">
                       <div className=" flex justify-between items-center gap-4 my-4 ">
                         <Button style={{display:"flex", justifyContent:"space-between",paddingLeft:"20px",paddingRight:"20px"}} className=" w-[30%]">
                            <div className="increment py-2 border rounded-full w-6 h-6 flex justify-center items-center bg-white "><FaPlus className=" rounded-full " /></div>
                            <div className="quentity py-2">
                                 <p className=" font-semibold text-[16px]">5</p>
                              </div>
                            <div className="increment py-2 border rounded-full w-6 h-6 flex justify-center items-center bg-white "><GoDash className=" rounded-full " /></div>
                         </Button>
                         <div className="decrement w-[70%]">
                           <Button style={{width:"100%"}} className="">
                             <div className="cart text-black  py-2 flex justify-center items-center gap-2"> <IoBagHandle  className="text-[18px] "/> <p className=" font-sans font-semibold text-[16px]">Add to cart</p></div>
                           </Button>
                         </div>
                       </div>
                    </div>
                    {/* border area start */}
                    <div className="">
                       <Seperator/>
                    </div>

                    {/* colpas area start */}
                    <div className="content">
                        <div className="contentr ">
                             <According header="Descripition" des="Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture."/>
                             <According header="Fabric + care" des="Made from a sheer Belgian power micromesh.74% Polyamide (Nylon) 26% Elastane (Spandex)Adjustable hook & eye closure and strapsHand wash in cold water, dry flat"/>
                             <According header="How it Fits" des="Made from a sheer Belgian power micromesh.74% Polyamide (Nylon) 26% Elastane (Spandex)Adjustable hook & eye closure and strapsHand wash in cold water, dry flat"/>
                             <According header="FAQ" des="Made from a sheer Belgian power micromesh.74% Polyamide (Nylon) 26% Elastane (Spandex)Adjustable hook & eye closure and strapsHand wash in cold water, dry flat"/>
                        </div>
                    </div>

                    {/* return polecy area start */}
                    <div className="content my-2">
                       <div className="item grid grid-cols-2 gap-4">
                          <div className="free-shiping bg-[#fef2f2] rounded-xl ">
                            <div className="content m-4 py-2">
                                <div className="icon my-2">
                                    <RiRefund2Fill className=" text-2xl" />
                                </div>
                                <p className=" text-[16px] font-semibold font-sans">Free shipping</p>
                                <p className=" font-sans text-[14px] text-gray-400 mt-[-2px]">On orders over $50.00</p>
                            </div>
                          </div>
                          <div className="free-shiping bg-[#f0f9ff] rounded-xl ">
                            <div className="content m-4 py-2">
                                <div className="icon my-2">
                                    <GiReturnArrow className=" text-2xl" />
                                </div>
                                <p className=" text-[16px] font-semibold font-sans">Very easy to return</p>
                                <p className=" font-sans text-[14px] text-gray-400 mt-[-2px]">Just phone number.</p>
                             </div>
                          </div>
                          <div className="free-shiping bg-[#f0fdf4] rounded-xl ">
                            <div className="content m-4 py-2">
                                <div className="icon my-2">
                                    <TbWorld className=" text-2xl" />
                                </div>
                                <p className=" text-[16px] font-semibold font-sans">Nationwide Delivery</p>
                                <p className=" font-sans text-[14px] text-gray-400 mt-[-2px]">Fast delivery nationwide.</p>
                             </div>
                          </div>
                          <div className="free-shiping bg-[#fffbeb] rounded-xl ">
                            <div className="content m-4 py-2">
                                <div className="icon my-2">
                                    <TbTruckDelivery className=" text-2xl" />
                                </div>
                                <p className=" text-[16px] font-semibold font-sans">Refunds policy</p>
                                <p className=" font-sans text-[14px] text-gray-400 mt-[-2px]">60 days return for any reason</p>
                             </div>
                          </div>
                       </div>
                    </div>
             </div>
          </div>
          <div className="product-detils">
             <div className="content">
                  <InnerTitle title="Product Details" className="text-[24px]" />
                  <p className=" font-sans font-base text-[16px]">
                    The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.
                    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.
                  </p>
                  <ul className="my-4 text-[16px] mx-4">
                    <li className=" list-disc">Regular fit, mid-weight t-shirt</li>
                    <li className=" list-disc">Natural color, 100% premium combed organic cotton</li>
                    <li className=" list-disc">Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>
                    <li className=" list-disc">Soft touch water based printed in the USA</li>
                  </ul>
             </div>
          </div>
          <div className="seperator">
             <Seperator/>
          </div>
          <div className="review">
             <div className="content">
                 <p className=" font-sans text-[24px] font-semibold"> Customer Review</p>
                 <div className="review grid grid-cols-2 gap-16 mt-8">
                    {
                      reviewData.map((item)=>
                       <div key={item?.id} className="content  w-full">
                          <div className=" flex justify-between items-center">
                             <div className="image flex items-center gap-3">
                                 <div className="avatar">
                                   <img className=" w-12 h-12 rounded-full" src={item?.image} alt="" />
                                 </div>
                                 <div className="name leading-[5px]">
                                    <p className=" font-semibold font-sans text-lg">{item?.name}</p>
                                    <p className=" font-sans">12.12.23</p>
                                 </div>
                                 <p>  review data {item?.review}</p>
                             </div>
                             <div className="start">
                              <div className="content">
                                 {(()=>{

                                   const review = parseInt(item?.review)
                                   let star = []

                                   if((review)){
                                       for(let i = 0; i < review; i++ ){
                                          console.log("start",i)
                                        return  star.push(<span key={i}>Star</span>);
                                       }
                                       return star
                                   }else{
                                     return <span>No review</span>
                                   }


                                   })()}
                              </div>
                             </div>
                          </div>
                          <div className="pragraph my-4">
                             <p className=" font-sans text-base">
                               {item?.des}
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim molestias
                                doloribus ut eos voluptas maiores cumque facere voluptatum possimus!
                             </p>
                          </div>
                       </div>
                      )
                    }
                 </div>
             </div>
          </div>
          <div className="offer">
            <SpecialOffer/>
          </div>
       </div>
    </div>
  )
}

export default SingleProduct