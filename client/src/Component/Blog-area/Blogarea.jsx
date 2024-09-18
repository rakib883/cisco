
import { useEffect, useState } from "react"
import Title from "../../UI/Title"
import { FachingData } from "../../UI/FaceData"
import { Button } from "rsuite"

const Blogarea = () => {


    // blog data faching area start
    const [blog,setBlog] = useState([])
   useEffect(()=>{
            const incomingData = async()=>{
                const response =await FachingData("https://cisco-sigma.vercel.app/blog")
                setBlog(response)
        
        }
        incomingData()
   },[])

  return (
    <div className=" bg-[#f7f7f9] rounded-xl my-10">
        <div className="content py-16 ">
            <div className="title">
                <Title firstTitle="The latest news from the Ciseco blog"  />
            </div>
            <div className="content mx-10 lg:flex justify-between gap-6">
                <div className="latest w-full lg:w-[50%]">
                    <div className="image rounded-xl">
                        <img className="rounded-2xl h-[500px] w-full" src="https://i.ibb.co/rsHTgWh/pexels-photo-6168061.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="title hover:text-[#707f94] duration-300 cursor-pointer">
                           <h1 className=" text-3xl my-4 font-sans font-semibold first-letter:uppercase">non sodales neque sodales ut etiam sit amet nisl purus</h1>
                        </div>
                        <div className="pra">
                            <p className=" text-[#818793] text-[16px] font-sans">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis
                            </p>
                        </div>
                        <div className="profile flex gap-4 items-center my-4">
                            <div className="image">
                                <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/wsfTv6j/Image-1.png" alt="" />
                            </div>
                            <div className="name">
                                <p className=" font-sans font-semibold">Johan Dir</p>
                            </div>
                            <div className=" font-sans">20.24.21</div>
                        </div>
                    </div>
                </div>
                <div className="post w-full lg:w-[50%]">
                    {
                        blog.map((item)=>
                           <div key={item?.id} className="main flex gap-4 my-4 justify-between">
                                 <div className="text">
                                    <h1 className=" text-lg cursor-pointer hover:text-[#707f94] duration-300">{item?.title}</h1>
                                    <p className=" text-base text-[#707f94] font-sans mt-2">{item?.pragraph}</p>
                                     <div className="profile flex items-center gap-4 my-4">
                                        <div className="image">
                                            <img className=" h-6 w-6 rounded-full" src={item?.profile} alt="" />
                                        </div>
                                        <div className="name font-sans font-semibold">Md Johan</div>
                                        <div className="date font-sans font-medium">20.04.24</div>
                                     </div>
                                 </div>
                                 <div className="image w-[50%]">
                                    <img className="h-[150px] w-[150px] rounded-2xl" src={item?.image} alt="" />
                                 </div>
                           </div>
                        )
                    }
                </div>
            </div>
            <div className="all-blog flex justify-center items-center my-10">
                <Button   appearance="default" size="lg" active className=" font-sans text-xl">
                    <p className=" font-semibold font-sans">Show all blog</p>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Blogarea