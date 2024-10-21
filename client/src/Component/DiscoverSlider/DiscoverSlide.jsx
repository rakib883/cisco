import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation and Autoplay modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import Swiper navigation styles

function DiscoverSlider() {
    const sliderProduct = [
        {
            bg:"#fef2f2",
            name:"digital gift card",
            title:"gift the gift of choice",
            image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=750&q=75"
        },
        {
            bg:"#eff6ff",
            name:"sale collection",
            title:"upp to 80% off retial",
            image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.0ee67265.png&w=750&q=75"
        },
        {
            bg:"#effcf3",
            name:"sale collection",
            title:"up to 50% off retial",
            image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.8cfc0955.png&w=750&q=75"
        },
        {
            bg:"#fefce8",
            name:"sale collection",
            title:"up to 50% off retial",
            image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.fa5c86b4.png&w=750&q=75"
        },
    ]
  return (
    <div className="main">
      <div className=" xs:mx-2 md:mx-10 lg:mx-10">
        <Swiper
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Navigation, Autoplay]} // Pass both Navigation and Autoplay modules
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide for mobile screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides for screens >= 1024px
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4, // 4 slides for screens >= 1440px
              spaceBetween: 40,
            },
          }}
        >
            {
               sliderProduct.map((item)=>
                <SwiperSlide key={item?.image}>
                  <div style={{ background: item.bg }} className=" rounded-md">
                      <div className="content xs:mx-4 mx-8 flex  justify-between">
                        <div className="text flex flex-col justify-between">
                           <div className="text my-4">
                                <p className=" text-base text-[#60738d] font-sans first-letter:uppercase">{item?.name}</p>
                                <p className=" text-[24px] font-bold font-sans first-letter:uppercase">{item?.title}</p>
                           </div>
                           <div className="button my-8">
                              <button className="text-[#60738d] font-sans bg-white px-4 py-2 rounded-full shadow-xl">Show me all</button>
                           </div>
                        </div>
                        <div className="image flex justify-center items-center w-[80%]">
                          <img
                            className="h-auto w-full max-w-[180px] xs:max-h-[140px] sm:max-h-[250px] md:max-h-[250px] lg:max-h-[300px] md:max-w-[200px] lg:max-w-[300px]"
                            src={item?.image}
                            alt=""
                          />
                        </div>
                      </div>
                  </div>
                </SwiperSlide>
            ) 
            }
          
        </Swiper>
      </div>
    </div>
  );
}

export default DiscoverSlider;
