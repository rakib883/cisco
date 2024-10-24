import React, { useEffect, useState } from 'react';
import { FachingData } from '../UI/FaceData';
import PriceFormat from '../UI/PriceFormat';
import { Button } from 'rsuite';
import {ToastContainer, toast } from 'react-toastify';


const ManageOrder = () => {
    // deliver product faching area start
    const [pendingOrder,setPendingOrder] = useState([])
     useEffect(()=>{
         const deliveryProduct =async()=>{
            try{
               const response = await FachingData("http://localhost:3000/api/order")
               setPendingOrder(response)
            }catch(error){
              console.log(error)
            }
         }
         deliveryProduct()
     },[])




  console.log(pendingOrder)
  // Sample product array
  
  // product delivery area start
  const [shipingStatus,setShipingStatus] = useState("")
  const [deliveryDate,setDeliveryDate] = useState("")

     const updateOrder = async(id)=>{
       if(shipingStatus === ""){
           toast.error("please status")
       }else if(deliveryDate === ""){
         toast.error("please delivery date")
       }else{
          try{
            const response = await  fetch(`http://localhost:3000/delivery-now`,{
                 method:"PATCH",
                 headers:{
                    "Content-Type":"application/json"
                 },body:JSON.stringify({
                   id:id,
                   status:shipingStatus,
                   deliverDate:deliveryDate
                 })
              })
            .then(response=>response.json()) 
            .then(response=>toast.success("Shiping successfully"))
            console.log(response)
          }catch(error){
            console.log(error)
       }
      }
     }
   

  return (
     <div className="main overflow-x-auto">
        <div className="item">
            <table className=" w-full border-collapse border border-slate-500">
              <thead className="">
                <tr className=" bg-gray-400">
                  <th className="py-3 border border-slate-600">ID</th>
                  <th className="py-3 border border-slate-600">Email</th>
                  <th className="py-3 border border-slate-600">Name</th>
                  <th className="py-3 border border-slate-600">Quantity</th>
                  <th className="py-3 border border-slate-600">Total price</th>
                  <th className="py-3 border border-slate-600">Status</th>
                  <th className="py-3 border border-slate-600">Delivery date</th>
                  <th className="py-3 border border-slate-600">Bill</th>
                  <th className="py-3 border border-slate-600">Date</th>
                  <th className="py-3 border border-slate-600">Cancel order</th>
                </tr>
              </thead>
              <tbody>
                 {
                   pendingOrder?.map((item)=>
                    <tr key={item?._id}>
                        <td className=" text-center py-3 border border-slate-600">
                           <p className="text-[12px]">#{item?._id}</p>
                        </td>
                        <td className=" text-center py-3 border border-slate-600">
                           <p className="text-[12px]">{item?.email}</p>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <p className="text-[12px]">{item?.name}</p>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <p>{item?.quantity}</p>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <PriceFormat price={item?.price}/>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <div className="item mx-2 ">
                              <div className=" outline-none border-none appearance-none  text-center py-1 px-2 text-base rounded-md cursor-pointer">
                                    <select  onChange={(e)=>setShipingStatus(e.target.value)} className=" cursor-pointer appearance-none px-2 outline-none border-[2px] text-[12px] rounded-sm " name="" id="">
                                        <option value="">{item?.status}</option>
                                        <option value="delivery">Delivery</option>
                                        <option value="cancel">cancel</option>
                                    </select>
                              </div>
                           </div>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <div className="item  text-white px-2 py-1 m-2 rounded-md cursor-pointer">
                             <input onChange={(e)=>setDeliveryDate(e.target.value)} className="text-black outline-none text-[12px]  border-none cursor-pointer" type="date" placeholder="select date" />
                           </div>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                           <div className="item bg-green-700 text-white px-2 py-1 m-2 rounded-md cursor-pointer">
                             <p>Paid</p>
                           </div>
                        </td>
                        <td className="text-center py-3 border border-slate-600">
                          {
                            (() => {
                             const orderTime = item?.updatedAt
                             const correctTime = orderTime.split('T')[0]
                             
                              return (
                                <div className="main">
                                  <p className=" text-[12px] mx-2">{correctTime}</p>
                                </div>
                              );
                            })() 
                          }
                        </td>
                        <td onClick={()=>updateOrder(item?._id)} className="text-center py-3 border  border-slate-600">
                          <Button size="sm" style={{backgroundColor:"green",color:"white"}}>Update order</Button>
                         
                        </td>
                   </tr>
                  )
                 }
               
                
              </tbody>
            </table>
        </div>
        <ToastContainer/>
     </div>
  );
};

export default ManageOrder;
