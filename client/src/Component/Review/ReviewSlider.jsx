
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useRef } from 'react';

export const ReviewSlider = ({userReview})=>{
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null); 
  return (
    <>
    <div className="item relative ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"

        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >

        {
            userReview.map((item)=>
              <SwiperSlide className="py-16" key={item?.id}>
                 <div className="all-content text-center cursor-pointer py-2 ">
                    <h1 className="text-[24px] text-[#1c2331] leading-[30px]">{item?.des}</h1>
                 </div>
                 <div className="image flex justify-center items-center">
                    <img className="h-[50px] w-[50px] rounded-full" src={item?.image} alt="" />
                 </div>
                 <div className="name flex justify-center items-center">
                   <p className="font-semibold text-xl">{item?.name}</p>
                 </div>
                 <div className="review flex justify-center items-center">
                    {(() => {
                        const review = parseInt(item?.review); // or use parseFloat if dealing with decimals
                        if (!isNaN(review)) {
                        const stars = [];
                        for (let i = 0; i < review; i++) {
                            stars.push(<span key={i} className="text-[#f3b634] mx-1 text-xl">★</span>); // Replace this with your star icon component
                        }
                        return stars;
                        } else {
                        return <span>No reviews</span>; // Handle case when review is NaN or invalid
                         }
                     })()}
                    </div>
              </SwiperSlide>
            )
        }
       
      </Swiper>
      <div className="icon w-full flex justify-between mt-4 absolute top-[50%]">
        <div ref={prevButtonRef} className="custom-prev cursor-pointer">
            <IoIosArrowDropleft className="text-4xl cursor-pointer" />
        </div>  
        <div ref={nextButtonRef} className="custom-next cursor-pointer">
            <IoIosArrowDropright className="text-4xl cursor-pointer" />
        </div>  
      </div>
    </div>  
    </>
  );
}
