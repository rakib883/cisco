import { useEffect, useState } from "react"
import InnerTitle from "../../UI/InnerTitle"
import { FachingData } from "../../UI/FaceData"


const ShopBrand = () => {
  const [incomingData,setIncomingdata] = useState([])
  useEffect(()=>{
    const incomingData = async()=>{
       const response = await FachingData("http://localhost:3000/catagor-deperdment")
       const result = setIncomingdata(response)
       return result
    }
    incomingData()
  },[])

  return (
    <div>
       <div className="content mx-10">
           <div className="title my-8">
             <InnerTitle title="Shop by department" className="text-[36px]"/>
           </div>
           <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {
                incomingData.map((item)=>
                  <div  key={item.id} className="rounded-2xl cursor-pointer ">
                     <div style={{background:item?.bg}} className="h-[280px]  overflow-hidden rounded-3xl">
                       <img src={item?.image} className="w-full h-full hover:bg-gray-300 duration-300 " alt="" />
                     </div>
                     <div className="text flex flex-col justify-center items-center my-4">
                       <h1 className=" text-[20px] font-semibold font-sans">{item?.title}</h1>
                       <p className=" font-sans font-semibold text-[#737a87]">{item?.product}</p>
                     </div>
                  </div>
                )
               }
           </div>
       </div>
    </div>
  )
}

export default ShopBrand