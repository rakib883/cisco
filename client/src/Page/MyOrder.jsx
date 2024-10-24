import React, { useEffect, useState } from 'react'
import Title from '../UI/Title'
import { FachingData } from '../UI/FaceData'
import { useSelector } from 'react-redux'
import PriceFormat from '../UI/PriceFormat'

const MyOrder = () => {

    const currentUser = useSelector((item)=>item?.myStore?.newLoggedUser?.user?.email)
    const [allProduct,setAllProduct] = useState([])
    useEffect(()=>{
         const allProductHandeler = async ()=>{
            try{
                const response = await FachingData(`http://localhost:3000/api/all-order/${currentUser}`)
                setAllProduct(response)
            }catch(error){
                console.log(error)
            }
          
         }

         allProductHandeler()
    },[])
    console.log(allProduct)

    // admin active colr area start
    const [activeColor,setActiveColor] = useState(1)
  return (
    <div>
        <div className="content">
            <div className=" text-center">
                <Title firstTitle="Your Order Summery" />
            </div>
            <div className="body flex flex-col lg:flex-row mx-10 gap-4">
                <div className="order-body w-full lg:w-[100%] overflow-x-auto  ">
                    <table className="table-auto w-full">
                        <thead className=" mb-4">
                            <tr>
                                <th className=" text-start">Image</th>
                                <th className=" text-center">Product id</th>
                                <th className=" text-center">Quantity</th>
                                <th className=" text-center">Price</th>
                                <th className=" text-center"> Shiping Status</th>
                                <th className=" text-center"> Delivery date</th>
                                <th className=" text-center">Manage order</th>
                            </tr>
                        </thead>
                        <tbody className="  ">
                            {
                                allProduct.map((item)=>
                                <tr key={item?._id} className="main mt-8 ">
                                    <td className=" text-center py-1 ">
                                        <div className="py-2 w-[80px] h-[80px] cursor-pointer bg-gray-300 rounded-md mt-4">
                                            <img className="w-full h-full object-contain" src={item?.image} alt="" />
                                        </div>
                                     </td>
                                    <td className=" text-center py-1">
                                        <div className="py-2 cur"><p>#{item?._id}</p></div> 
                                    </td>
                                    <td className=" text-center py-1">
                                        <div className="py-2">
                                            <p>{item?.quantity}</p>       
                                        </div>
                                    </td>
                                    <td className=" text-center">
                                        <div className="py-2">
                                            <PriceFormat price={item?.price}/>
                                        </div> 
                                    </td>
                                    <td className=" text-center flex justify-center items-center py-1  ">
                                        {
                                          item?.status === "delivery" ?(
                                          <div className="py-2 h-full w-10 flex justify-center items-center mt-5 ">
                                            <img  src="https://i.ibb.co.com/b3QjMKS/bus.gif" alt="" />
                                          </div> )
                                          :
                                            item?.status === "delivered" ?(
                                            <div className="main bg-gray-200 px-2 py-2 text-[12px] mt-8">
                                                <p>Delivered</p>
                                            </div>
                                          ) :
                                          
                                          (

                                          <div className="py-2 h-full flex fex-col w-10  justify-center items-center mt-5 ">
                                             <img src="https://i.ibb.co.com/nbZ75P5/development.gif" alt="" />
                                          </div>) 

                                        }
                                        
                                    </td>
                                    <td className=" text-center py-1">
                                        <div className="py-2">{item?.deliveryDate}</div> 
                                    </td>  
                                    <td className=" text-center py-1 flex justify-center items-center">
                                       {
                                        item?.status === "delivery" ?(
                                        <div className="py-2 h-10 w-10  flex justify-center items-center "> 
                                            <img className=" w-full" src="https://i.ibb.co.com/qD6jBHQ/handshake.gif" alt="" />
                                        </div>)
                                        :  item?.status === "delivered" ?(
                                            <div className="py-2 h-10 w-10  flex justify-center items-center  "> 
                                               <img className=" w-full h-full" src="https://i.ibb.co.com/8Mxtr54/shipping.gif" alt="" />
                                            </div>
                                        ) : (
                                         <div className="py-2">
                                            <button className="bg-red-600 px-2 py-1 text-white text-[12px] rounded-md">Cancel Order</button>
                                         </div> )
                                        }
                                    </td>               
                                </tr>
                                )
                            }
                        </tbody>
                     </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrder