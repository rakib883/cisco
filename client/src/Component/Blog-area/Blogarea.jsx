
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
    <div className=" bg-[#f7f7f9] rounded-xl my-10 ">
        <div className="content xs:py-1 py-16 ">
            <div className="title">
                <Title firstTitle="The latest news from the Ciseco blog"  />
            </div>
            <div className="content xs:mx-4 mx-10 md:flex lg:flex justify-between gap-6">
                <div className="latest w-full lg:w-[50%]">
                    <div className="image rounded-xl">
                        <img className="rounded-2xl xs:h-[200px] sm:h-[350px] lg:h-[500px] w-full" src="https://i.ibb.co/rsHTgWh/pexels-photo-6168061.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="title hover:text-[#707f94] duration-300 cursor-pointer">
                           <h1 className=" xs:text-base text-3xl xs:my-2 my-4 font-sans font-semibold first-letter:uppercase">non sodales neque sodales ut etiam sit amet nisl purus</h1>
                        </div>
                        <div className="pra">
                            <p className=" text-[#818793] xs:text-[10px] md:text-base text-[16px] font-sans">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis
                            </p>
                        </div>
                        <div className="profile flex gap-4 items-center my-4">
                            <div className="image">
                                <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/wsfTv6j/Image-1.png" alt="" />
                            </div>
                            <div className="name">
                                <p className=" xs:text-[10px] md:text-[12px] font-sans font-semibold">Johan Dir</p>
                            </div>
                            <div className="xs:text-[10px] md:text-[12px] font-sans">20.24.21</div>
                        </div>
                    </div>
                </div>
                <div className="post w-full xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-2  md:grid md:grid-cols-1 md:gap-1  gap-4 lg:w-[50%]">
                    {
                        blog.map((item)=>
                           <div key={item?.id} className="main md:flex gap-1 xs:my-2 my-4 justify-between">
                                  <div className="image w-full md:hidden">
                                     <img className=" h-[200px] w-full rounded-2xl" src={item?.image} alt="" />
                                  </div>
                                 <div className="text">
                                    <p className=" text-[16px] xs:text-base xs:my-2 md:text-lg cursor-pointer font-semibold hover:text-[#707f94] duration-300">{item?.title.substring(0,40)}...</p>
                                    <p className=" text-[16px] xs:text-[10px]  md:text-base text-[#707f94] font-sans mt-2 sm:text-[12px]">{item?.pragraph}</p>
                                     <div className="profile flex items-center gap-4 my-4">
                                        <div className="image">
                                            <img className=" h-6 w-6 rounded-full" src={item?.profile} alt="" />
                                        </div>
                                        <div className="xs:text-[10px] sm:text-[12px] font-sans font-semibold">Md Johan</div>
                                        <div className="xs:text-[10px] sm:text-[12px] font-sans font-medium">20.04.24</div>
                                     </div>
                                 </div>
                                 <div className="image hidden md:block w-[50%]">
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