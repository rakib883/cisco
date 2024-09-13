import { useDispatch, useSelector } from "react-redux"
import InnerTitle from "../UI/InnerTitle"
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";
import { IoResize } from "react-icons/io5";
import { addToCart, cartItemRemove, decrementProduct } from "../Redux/slice";
import { useEffect, useState } from "react";


const Cart = () => {
    const cartSelector = useSelector((item)=>item.myStore.CartData)
    const [CartSubtotal,setSubtotal] = useState()
     useEffect(()=>{
        if(cartSelector){
            let total = 0
            cartSelector.map((item)=>{
                total += (item?.quantity) * (item?.price)})
                setSubtotal(total)
                console.log(total)
        }
     },[cartSelector])
    
     const removeCartData = useDispatch()
     
    //  send to redux data 
    const increment = useDispatch()
    const decrement = useDispatch()
  return (
    <div>
        {
        cartSelector?.length > 0 ?

        <div className="content mx-20 my-8">
            <div className="title ">
                <div className="title">
                    <InnerTitle title="Shopping Cart"/>
                     <p>
                        Your all cart product here 
                     </p>
                </div>
            </div>
            <div className="product flex mt-[50px] gap-8">
                <div className="product  w-[60%]">
                    <div className="product">
                            <div className="product flex flex-col gap-4">
                                {
                                    cartSelector.map((item)=>
                                    <div key={item?.id} className="item"> 
                                       <div  className="main flex">
                                          <div className="image w-[20%]">
                                            <div className="image-parent rounded-lg max-h-[100px] max-w-[100px] bg-[#f1f5f9]">
                                                <img className=" object-contain" src={item?.image} alt="" />
                                            </div>
                                          </div>
                                          <div className="text-area w-[80%] mt-2">
                                             <div className="top-area flex justify-between  w-full">
                                                <div className="title w-[40%] text-start">
                                                    <div className="name">
                                                        <p className=" text-[16px] font-medium">{item?.name}</p>
                                                    </div>
                                                    <div className="content flex gap-4 items-center mt-2">
                                                        <div className="anot flex items-center gap-2">
                                                            <div className="color-icon">
                                                            <IoMdColorFill />
                                                            </div>
                                                            <div className="text"><p>{item?.color}</p></div>
                                                        </div>
                                                        <p>||</p>
                                                        <div className="size flex items-center gap-2">
                                                            <div className="icon">
                                                               <IoResize />
                                                            </div>
                                                            <div className="text">
                                                                <p>{item?.size}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="increment w-[20%]">
                                                    <div className="increment-decrement">
                                                    <div>
                                                        <div className="flex items-center gap-4">
                                                            <div 
                                                            onClick={()=>increment(addToCart({
                                                                id:item?.id
                                                            }))}
                                                            className="plus border-[1px] h-8 w-8 rounded-full flex justify-center cursor-pointer items-center"><FaPlus /></div>
                                                            <div className="quantity ">{item?.quantity}</div>
                                                            <div 
                                                            onClick={()=>decrement(decrementProduct({
                                                                id:item?.id
                                                            }))}
                                                            className="minus border-[1px] h-8 w-8 rounded-full flex justify-center cursor-pointer items-center"><GoDash /></div>
                                                        </div>
                                                    </div> 
                                                    </div>
                                                </div>
                                                <div className="price w-[40%] text-end">
                                                    <p>${item?.price * item?.quantity }</p>
                                                </div>
                                             </div>
                                             <div className=" flex justify-between items-center mt-4 ">
                                                 <div className="stock">
                                                    <div className="stock flex items-center gap-2 border-[1px] border-green-800 rounded-full px-2">
                                                        <div className="icon"><FaCheck /></div>
                                                        <div className="text">Stock</div>
                                                    </div>
                                                 </div>
                                                 <div
                                                  onClick={()=>removeCartData(cartItemRemove({
                                                    id:item?.id
                                                  }))}
                                                 className="remove">
                                                    <button className=" text-[#2e99d1] hover:text-indigo-500 duration-300">Remove</button>
                                                 </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="border w-full h-[1px] mt-4"></div>
                                    </div>  
                                    )
                                }
                            </div>  
                    </div>
                </div>
                <div className="detils  w-[40%] border-l-2 ">
                    <div className="item px-8 sticky top-[200px]">
                        <div className="title">
                            <p className=" text-[18px] font-semibold">Order Summary</p>
                        </div>
                        <div className="all-summery mt-4 flex flex-col gap-6">
                           <div className="parent border-b-[1px]">
                              <div className="subtotal flex justify-between items-center mb-2 ">
                                    <div className="title">
                                        <p className=" text-[14px]">Subtotal</p>
                                    </div>
                                    <div className="value">
                                        <p className=" text-[14px] text-black font-bold">${CartSubtotal}</p>
                                    </div>
                                </div>
                           </div>
                           <div className="parent border-b-[1px]">
                              <div className="subtotal flex justify-between items-center mb-2 ">
                                    <div className="title">
                                        <p className=" text-[14px]">Shpping estimate</p>
                                    </div>
                                    <div className="value">
                                        <p className=" text-[14px] text-black font-bold">--</p>
                                    </div>
                                </div>
                           </div>
                           <div className="parent border-b-[1px]">
                              <div className="subtotal flex justify-between items-center mb-2 ">
                                    <div className="title">
                                        <p className=" text-[14px]">Tax estimate</p>
                                    </div>
                                    <div className="value">
                                        <p className=" text-[14px] text-black font-bold">--</p>
                                    </div>
                                </div>
                           </div>
                           <div className="parent ">
                              <div className="subtotal flex justify-between items-center mb-2 ">
                                    <div className="title">
                                        <p className=" text-[18px] font-semibold">Order total</p>
                                    </div>
                                    <div className="value">
                                        <p className=" text-[16px] text-black font-bold ">${CartSubtotal}</p>
                                    </div>
                                </div>
                           </div>
                           <button className="button bg-black rounded-2xl text-center cursor-pointer hover:bg-gray-900 duration-400">
                              <p className=" text-white text-center text-[16px] p-2 font-semibold">Check out</p>
                           </button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div> :
         <div className="nodata">
            <p className=" text-3xl text-center py-16 font-semibold" >No cart data</p>
         </div>
        }
    </div>
  )
}

export default Cart