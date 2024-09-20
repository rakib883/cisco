
import { BsArrowsFullscreen } from 'react-icons/bs'
import { FaPlus, FaStar } from 'react-icons/fa6'
import { IoBagHandleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from "../Redux/slice"
import { GoDash } from 'react-icons/go'
import PriceFormat from './PriceFormat'

const ProductList = ({item, quantity}) => {

    const {id,images,name,description,rating,message,price,category} = item
    const [productColor,setProductColor] = useState("yello")

   //  redux dispatch area 
    const increment = useDispatch()
    const productDispatch = useDispatch()
  return (
 <div  className="parent mt-2">
    <div className="image-area relative group overflow-hidden  bg-[#f6f8fa] rounded-xl">
        <Link to={`product/${id}`}>
            <img className=" w-full h-[full] rounded-xl" src={images[0]} alt="" />
        </Link>
       <div className="overlay absolute -top-16 group-hover:top-[50%] duration-300 cursor-pointer w-full">
          {
            quantity ?
            <div className="button-area">
               <div className="  px-4 py-2 rounded-2xl">
                    <div 
                     onClick={()=>increment(addToCart({
                        id:id
                     }))}
                    className="flex justify-between items-center gap-4 bg-black max-w-[150px] mx-auto p-2 rounded-2xl">
                     <div   className="plus text-white bg-indigo-600 rounded-full w-8 h-8 flex justify-center items-center"><FaPlus /></div>
                     <div className="quantity text-white ">{quantity}</div>
                     <div className="minus text-white bg-indigo-600 rounded-full w-8 h-8 flex justify-center items-center"><GoDash /></div></div>
                 </div>
             </div> :
               <div className="content flex gap-2 justify-center items-center">
                  <Button
                  onClick={()=>productDispatch(addToCart({
                     id:id,
                     image:images,
                     name:name,
                     category:category,
                     price:price,
                     color:productColor,
                     quantity:1
                  }))}
                  style={{ backgroundColor: 'black', color: 'white' }}  size="sm" className="add-car font-sans text-white bg-black rounded-full px-3 py-1 flex items-center gap-2">
                     <IoBagHandleSharp /> <p>Add to cart</p> 
                  </Button>
                  <Link to={`product/${id}`}>
                     <Button  size="sm"  className="add-car font-sans bg-white  text-black shadow-xl rounded-full px-3 py-1 flex items-center gap-2">
                        <BsArrowsFullscreen className=" text-[12px]" /> <p>View product</p>
                     </Button>
                  </Link>
               </div> 
             }
       </div>
    </div>
    <div className="color-area mt-4 mx-2">
       <div className="content flex gap-4">
          <div onClick={()=>setProductColor("skyBlue")} className={`${ productColor === "skyBlue" ? "border border-[#a78bfa] " : "" }  cursor-pointer rounded-full flex justify-center items-center h-5 w-5 bg-white`}>
             <div className="item h-4 w-4 rounded-full bg-[#a78bfa]"></div>
          </div>
          <div onClick={()=>setProductColor("yellow")} className={`${ productColor === "yellow" ? "border border-[#facc15]" :""} item  cursor-pointer  rounded-full flex justify-center items-center h-5 w-5 bg-white`}>
             <div className="item h-4 w-4 rounded-full bg-[#facc15]"></div>
          </div>
          <div onClick={()=>setProductColor("growyelllo")} className={`${productColor === "growyelllo" ? "border border-[#fb923c]" :""}  cursor-pointer  rounded-full flex justify-center items-center h-5 w-5 bg-white`}>
             <div className="item h-4 w-4 rounded-full bg-[#fb923c]"></div>
          </div>
          <div onClick={()=>setProductColor("Skublue")} className={`${ productColor === "Skublue" ? "border-[#38bdf8] border " : "" }  cursor-pointer rounded-full flex justify-center items-center h-5 w-5 bg-white`}>
             <div className="item h-4 w-4 rounded-full bg-[#38bdf8]"></div>
          </div>
          <div onClick={()=>setProductColor("green")} className={`${productColor === "green" ? "border border-[#4ade80]  " :"" } item cursor-pointer  rounded-full flex justify-center items-center h-5 w-5 bg-white`}>
             <div className="item h-4 w-4 rounded-full bg-[#4ade80]"></div>
          </div>
       </div>
       <div className="content ">
          <h1 className="  text-[18px] font-sans font-semibold">{name}</h1>
          <p className="mt-[-15px] font-sans font-medium text-[#8b8c92]">{description}</p>
       </div>
       <div className="prize my-4 flex justify-between items-center">
          <div className="prize border-2 rounded-xl px-4 py-1 border-green-600 font-sans font-semibold inline-block"><PriceFormat price={item?.price} /></div>
          <div className="rating flex items-center gap-2">
              <FaStar className="text-[#fbbf24] text-lg " />
              <p className=" flex font-sans gap-2">{rating}</p> 
              <p className=" mt-[2px] text-[#8b8c92]">(98 Review)</p>
          </div>
       </div>
    </div>
 </div> 
  )
}

export default ProductList