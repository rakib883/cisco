import React from 'react'
import InnerTitle from '../UI/InnerTitle'
import { useDispatch, useSelector } from 'react-redux'
import PriceFormat from '../UI/PriceFormat'
import { RxCross2 } from "react-icons/rx";
import { removeFavorite } from '../Redux/slice';

const Favorite = () => {
    const dispatch = useDispatch()
    const {whilist} = useSelector((item)=>item?.myStore)
    console.log(whilist)
  return (
    <div>
        <div className="content">
            <div className="content mx-10">
                <div className="title">
                    <InnerTitle title="Favorite items"/>
                </div>
                <div className="item">
                    {
                    whilist.length > 0 ?
                   <div className="item">
                     <table className=" w-full border">
                        <thead className=" bg-indigo-200">
                            <tr>
                                <th className=" text-start">
                                    <p className="mx-4 py-2">Image</p>
                                </th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                         </thead>
                         <tbody>
                            {
                             whilist?.map((item,index)=>
                                <tr key={index} className="main hover:bg-indigo-200 hover:text-indigo-700 duration-300 cursor-pointer border-b-[1px]">
                                    <td>
                                       <div className="img h-20 w-20 flex justify-center items-center">
                                          <img className="w-full h-full object-contain" src={item?.image} alt="" />
                                       </div>
                                    </td>
                                    <td>
                                       <div className="item text-center">
                                            <p>{item?.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="item text-center">
                                            <p>{item?.quantity}</p>
                                        </div>
                                    </td>
                                    <td>
                                       <div className=" text-center">
                                         <PriceFormat price={item?.price}/>
                                       </div>
                                    </td>
                                    <td onClick={()=>dispatch(removeFavorite({
                                        id:item?.id
                                    }))}>
                                        <p className=" text-center cursor-pointer flex justify-center items-center">
                                           <RxCross2 className=" text-center text-lg" />
                                        </p>
                                    </td>
                                </tr>
                             )
                            }
                         </tbody>
                        </table>
                    </div>
                    :
                    <div className="main text-center">
                        <p className="text-base py-2">You have no favorite data</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Favorite