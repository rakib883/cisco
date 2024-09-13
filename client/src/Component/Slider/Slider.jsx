
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { CiSearch } from "react-icons/ci";


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Slider() {
 const sliderData = [
    {
      name : "in the swssion find the best",
      title :"Exclusive collection for everyone Explore now ",
      image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-2.dc1c84f6.png&w=3840&q=75"
    },
    {
      name : "in the swssion find the best",
      title :"Exclusive collection for everyone Explore now ",
      image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-3.010fb6aa.png&w=3840&q=75"
    },
    {
      name : "in the swssion find the best",
      title :"Exclusive collection for everyone Explore now ",
      image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.a9b085d9.png&w=3840&q=75"
    }
 ]

  return (
      <div className="main bg-gray-200">
        <div className=" mx-10 ">
        <Swiper  autoplay={{ delay: 8000}} loop={true}  navigation={true}   modules={[Navigation, Autoplay]}  className="mySwiper  ">
            {
              sliderData.map((item)=>
                  <SwiperSlide key={item?.image}>
                    <div  className="content overflow-hidden flex justify-between items-center">
                      <motion.div className="image"
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: 1, scale:1}}
                        transition={{ duration: 1.5 }}
                      >
                        <img className="h-[500px]" src={item?.image} alt="" />
                      </motion.div>
                      <motion.div
                        initial={{x:200,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1.5,x:{type:"spring",stiffness:60}}}
                      className="text w-[50%] mx-8">
                        <h1 className="text-[20px] first-letter:uppercase text-right font-sans">{item?.name}</h1>
                        <h1 className="text-[50px]  font-sans font-semibold text-right">{item?.title}</h1>
                        <div className="button flex justify-end my-2">
                            <button className="bg-black rounded-full text-white px-8 py-4 flex gap-2 items-center">
                              <p className="text-lg font-sans">Explor now</p>
                              <CiSearch className="mt-[2px] text-2xl" />
                            </button>
                        </div>
                      </motion.div>
                    </div>
                  </SwiperSlide>
              
              )
            }
        </Swiper>
        </div>
    </div>
  );
}
