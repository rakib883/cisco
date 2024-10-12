import { useEffect, useState } from "react"
import CheckedInfo from "../UI/Checked"
import InnerTitle from "../UI/InnerTitle"
import Seperator from "../UI/Seperator"
import { FachingData } from './../UI/FaceData';
import ProductList from "../UI/ProductList";
import EarnMony from "../Component/EarnFreeMoney/EarnMony";
import { useSelector } from 'react-redux';


const Women = () => {

    // product facing area start
  const [product,setProduct] = useState([])
   useEffect(()=>{
    const incomingData = async()=>{
        try{
            const response = await FachingData("https://cisco-sigma.vercel.app/product")
            setProduct(response)
        }catch(error){
            console.log(error)
        }

    }
    incomingData()
   },[])
   

// catagory filter area start
const [dataCatagor,setDataataGory] = useState("")
const catagoryFilterHandel = async(catagory)=>{
    try{
       if(catagory){
        const response = await fetch(`https://cisco-sigma.vercel.app/${catagory}`)
        const result = await response.json()
        if(result && result.length > 0){
            setProduct(result)
        }
        setDataataGory(catagory)
       }
    }catch(error){
        console.log(error)
    }
}
// const catagory filter area start


// color filter area start
const [colorFilterData,setColorFilter] = useState("")
const colorFilterHandeler = async(color)=>{
   try{
      if(color){
        const response = await FachingData(`https://cisco-sigma.vercel.app/color/filter/${color}`)
        setProduct(response)
      }
   }catch(error){
    console.log(error)
   }
   setColorFilter(color)
}

// size filter area start
const [productSizeState,setProductSizeState] = useState("")
const ProductSizeHandeler =async(color)=>{
    try{
        if(color){
           const response = await FachingData(`https://cisco-sigma.vercel.app/product/size/${color}`)
           setProduct(response)
        }
    }catch(error){
        console.log(error)
    }
    setProductSizeState(color)
}





const catagoryData = [
    {  
        id:1,
        name:"All Categories",
        valueItem:"product"
    },
    {
        id:2,
        name:"Leather Wallet",
        valueItem:"Leatherwallet"
    },
    {
        id:3,
        name:"Shoes",
        valueItem:"Shoes"
    },
    {
        id:4,
        name:"Smartwatch",
        valueItem:"Smartwatch"
    },
    {
        id:5,
        name:"Laptop salvees",
        valueItem:"Laptopsalvees"
    },
    {
        id:6,
        name:"Travel bags",
        valueItem:"Travelbags"
    },
    {
        id:7,
        name:"Tshirt",
        valueItem:"Tshirt"
    },
    {
        id:8,
        name:"Pant",
        valueItem:"Pant"
    },
]

const colorFilter = [
    {
        id:1,
        name:"White",
        valueData:"White"
    },
   
    {
        id:3,
        name:"Blue",
        valueData:"Blue"
    },
    {
        id:4,
        name:"Black",
        valueData:"Black"
    },
    {
        id:5,
        name:"Gray",
        valueData:"Gray"
    },
    
]
const productSize = [
    {
        id:"1",
        name:"S",
    },
    {
        id:"2",
        name:"M",
    },
    {
        id:"3",
        name:"XL",
    },
    {
        id:"4",
        name:"XL",
    },
]

// redux data send
const cartDataItem = useSelector((item)=>item?.myStore?.CartData)
  return (
    <div>
        <div className="content xs:mx-2 md:mx-10">
           <div className="title my-8">
              <InnerTitle className="" title="Women collection" />
              <p className=" max-w-lg text-[#8495b8] font-sans text-[16px]">
                 We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.
              </p>
           </div>
           <div className="seperator">
             <Seperator/>
           </div>
           <div className="product-area flex  gap-4">
            {/* sidebar area start */}
             <div className="sidebar w-[25%] xs:hidden md:block ">
                 <div className="content">
                    {/* catagory area start */}
                      <div className="catagory">
                         <InnerTitle className="text-[16px]" title="Categories"/>
                         <div className="catagory-item flex flex-col gap-4">
                             {
                                catagoryData.map((item)=>
                                <div key={item?.id} onClick={()=>catagoryFilterHandel(item?.valueItem)} className="backpack flex  gap-2 cursor-pointer">
                                    <input onChange={(e)=>setDataataGory(e.target.value)} className="customBorder" checked={dataCatagor === item?.valueItem} type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">{item?.name}</p>
                                </div>
                                )
                            }
                         </div>
                      </div>
                      <div className="seperastor">
                          <Seperator/>
                      </div>
                      {/* color area start */}
                      <div className="catagory">
                         <InnerTitle className="text-[16px]" title="Colors"/>
                         <div className="catagory-item flex flex-col gap-4">
                            {
                                colorFilter.map((item)=>
                                <div onClick={()=>colorFilterHandeler(item?.valueData)}  key={item?.id}  className="backpack flex  gap-2 cursor-pointer">
                                    <input value={item?.valueData} checked={colorFilterData === item?.valueData }  onChange={(e)=>setColorFilter(e.target.value)}  className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">{item?.name}</p>
                                </div>
                          )}
                         </div>
                      </div>
                      <div className="seperastor">
                          <Seperator/>
                      </div>


                    {/* size area sart */}
                      <div className="catagory">
                         <InnerTitle className="text-[16px]" title="Size"/>
                         <div className="catagory-item flex flex-col gap-4">
                            {
                                productSize.map((item)=>
                                <div onClick={()=>ProductSizeHandeler(item?.name)} key={item?.id} className="backpack flex  gap-2 cursor-pointer">
                                    <input value={item?.name} checked={item?.name === productSizeState } onChange={(e)=>setProductSizeState(e.target.value)} className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">{item?.name}</p>
                                </div>
                                )
                            }
                         </div>
                      </div>
                      <div className="seperastor">
                          <Seperator/>
                      </div>

                      {/* onsale area start */}
                      <div className="button-area flex justify-between items-center">
                        <div className="text">
                            <p className=" font-sans text-[18px]">One sell</p>
                            <p className="font-sans font-[10px]">Products currently on sale</p>
                        </div>
                        <div className="icon">
                          <CheckedInfo/>
                        </div>
                      </div>
                      <div className="sep">
                        <Seperator/>
                      </div>
                 </div>
                 <div className="catagory">
                         <InnerTitle className="text-[16px]" title="Sort order"/>
                         <div className="catagory-item flex flex-col gap-4">
                            <div className="backpack flex  gap-2 cursor-pointer">
                                <input className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">Most  popular</p>
                            </div>
                            <div className="backpack flex items-center gap-2 cursor-pointer">
                                <input className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">Best Rating</p>
                            </div>
                            <div className="backpack flex items-center gap-2 cursor-pointer">
                                <input className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">Newest</p>
                            </div>
                            <div className="backpack flex items-center gap-2 cursor-pointer">
                                <input className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">Price low</p>
                            </div>
                            <div className="backpack flex items-center gap-2 cursor-pointer">
                                <input className="customBorder" type="checkbox" name="" id="" /> <p className=" font-sans font-semibold text-[16px]">Price hign</p>
                            </div>
                         </div>
                      </div>
                      <div className="seperastor">
                          <Seperator/>
                      </div>

             </div>
              <div className="product w-full md:w-[75%] ">
                <div className="product-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                     {
                        product.map((item)=>{
                           const quantity = cartDataItem.find((cartData)=>cartData?.id === item?.id)
                            return(
                             <ProductList key={item?.id} quantity={quantity?.quantity} item={item} />
                           )
                        }
                        )
                     }
                </div>
              </div>
           </div>
           {/* earn money area start */}
            <div className="content my-8">
                 <EarnMony/>
              </div>
        </div>
    </div>
  )
}

export default Women