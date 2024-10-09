
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
                    <div  className="content overflow-hidden md:flex justify-between items-center">
                      <motion.div className="image flex justify-center items-center"
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: 1, scale:1}}
                        transition={{ duration: 1.5 }}
                      >
                        <img className=" h-[300px]  md:h-[500px] " src={item?.image} alt="" />
                      </motion.div>
                      <motion.div
                        initial={{x:200,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1.5,x:{type:"spring",stiffness:60}}}
                      className="text w-full md:w-[50%] md:mx-8 md:leading-[60px] leading-4 ">
                        <p className="text-[20px] first-letter:uppercase text-center md:text-right  font-sans">{item?.name}</p>
                        <p className=" text-[16px] md:text-[30px] lg:text-[50px] text-center  font-sans font-semibold md:text-right">{item?.title}</p>
                        <div className="button flex justify-center  md:justify-end my-4">
                            <button className="bg-black rounded-full text-white md:px-4 lg:px-8 px-2 py-1 md:py-2 lg:py-4 flex gap-2 items-center">
                              <p className="md:text-lg xs:text-[10px] text-base font-sans">Explor now</p>
                              <CiSearch className="mt-[4px] xs:text-base sm:text-md md:text-2xl" />
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
