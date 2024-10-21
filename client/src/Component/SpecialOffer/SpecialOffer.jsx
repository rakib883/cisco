import { FaArrowRight } from "react-icons/fa6";
const SpecialOffer = () => {
  return (
    <div>
        <div className="content mt-[50px] bg-[#f8fafc] lg:flex md:justify-between rounded-3xl">
           <div className="title w-full lg:w-[50%]">
              <div className="content m-2 md:m-20 flex flex-col gap-8">
                    <p className=" font-sans font-bold py-4 lg:py-1 text-[20px] lg:text-[46px]">
                        Don t miss out on special offers
                    </p>
                    <p className=" text-[16px] font-sans text-[#717682]">
                      Register to receive news about the latest, savings combos, discount codes...
                    </p>
                    <div className="steps flex flex-col gap-4">
                        <div className="item flex gap-2">
                            <p className="bg-[#f3e8ff] flex justify-center items-center px-3 py-[2px] text-[12px] rounded-full font-sans font-semibold">01</p> 
                            <div className=" font-sans font-semibold text-[16px] text-[#484651]">Saving combos</div>
                        </div>
                        <div className="item flex gap-2">
                            <p className="bg-[#dbeafe] flex justify-center items-center px-3 py-[2px] text-[12px] rounded-full font-sans font-semibold">02</p> 
                            <div className=" font-sans font-semibold text-[16px] text-[#484651]">Freeship</div>
                        </div>
                        <div className="item flex gap-2">
                            <p className="bg-[#fee2e2] flex justify-center items-center px-3 py-[2px] text-[12px] rounded-full font-sans font-semibold">03</p> 
                            <div className=" font-sans font-semibold text-[16px] text-[#484651]">Premium magazines</div>
                        </div>
                    </div>
                    <div className="search-area">
                        <div className="content relative border overflow-hidden  focus-within:shadow-2xl rounded-full ">
                            <input className=" rounded-full placeholder:font-sans p-2 px-4 w-full outline-none border-none" type="email" placeholder="Enter your email" />
                            <button className=" absolute top-0 right-0 bg-black h-full flex justify-center items-center rounded-full px-4 cursor-pointer">
                              <FaArrowRight className=" text-white text-xl " />
                            </button>
                        </div>
                    </div>
              </div>
           </div>
           <div className="image w-full lg:w-[50%]">
              <div className="xs:h-[300px] md:h-[400px] lg:h-[550px]  flex justify-end">
                 <img className=" object-contain w-full h-full" src="https://i.ibb.co/w6ZGwR1/promo3.png" alt="" />
              </div>
           </div>
        </div>
    </div>
  )
}

export default SpecialOffer