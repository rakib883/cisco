import { useEffect, useState } from "react"
import { FachingData } from "../../UI/FaceData"
import InnerTitle from "../../UI/InnerTitle"
import { ReviewSlider } from "./ReviewSlider"


const Reviwe = () => {
  const [review,setReview] = useState([])
  useEffect(()=>{
      const incomingData = async()=>{
        const response =await FachingData("http://localhost:3000/review")
        setReview(response)
       }
    incomingData()
  },[])

  return (
    <div>
        <div className="content mx-10 mt-14 relative my-20 ">
            <div className="title text-center my-12">
                <InnerTitle className="" title="Good news from far away " />
                <h1 className=" text-[20px] text-[#868b97]">Let s see what people think of Ciseco</h1>
            </div>
            <div className="slider-area max-w-2xl mx-auto my-8 ">
                <ReviewSlider userReview={review} />
            </div>
            <div className="image absolute right-3 top-[50%]">
                   <img className=" opacity-30" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay1.67c24f9c.png&w=3840&q=75" alt="img" />
                </div>
                <div className="image absolute left-3 top-[50%]">
                   <img  className=" opacity-30"src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay5.dc081a7c.png&w=3840&q=75" alt="img" />
                </div>
                <div className="image absolute top-[30%] left-[40%]">
                   <img className=" opacity-30" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay1.67c24f9c.png&w=3840&q=75" alt="img" />
                </div>
                <div className="image absolute top-[30%] right-[20%]">
                   <img  className=" opacity-30"src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay4.d7452ab6.png&w=3840&q=75" alt="img" />
                </div>
                <div className="image absolute bottom-1 left-[30%]">
                   <img className=" opacity-30" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay6.c3c3a42b.png&w=3840&q=75" alt="img" />
                </div>
                <div className="image absolute bottom-1 right-[30%]">
                   <img className=" opacity-30" src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay2.2f9a7346.png&w=3840&q=75" alt="img" />
                </div>
        </div>
    </div>
  )
}

export default Reviwe