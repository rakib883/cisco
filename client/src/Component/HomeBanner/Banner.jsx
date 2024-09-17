import InnerTitle from "../../UI/InnerTitle"

const Banner = () => {
  return (
    <div>
        <div className="content mx-10 bg-[#fefce8] rounded-3xl   my-[100px] md:flex md:gap-8 justify-between">
          <div className="item w-full md:w-[50%]  ">
                <div className="image w-full ">
                    <div className="image">
                        <img className="" src="https://i.ibb.co/3ydx1Hh/promo2.png" alt="ads" />
                    </div>
                </div>
          </div>
           <div className="text w-full md:w-[50%] ">
              <div className="content my-8 lg:my-[100px]">
                 <div className="middel flex flex-col  py-4 md:gap-4">
                    <div className="logo flex md:justify-start justify-center items-center">
                       <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                    </div>
                    <div className="title text-center md:text-start">
                        <InnerTitle className="md:text-[48px]" title="Special offerin kids products" />
                    </div>
                    <div className="text max-w-md text-center md:text-start">
                        <p className=" font-sans text-[16px] font-semibold text-[#718190] ">Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                    </div>
                    <div className="button text-center md:text-start py-4">
                      <div className="button-area">
                         <button className=" bg-black font-sans font-semibold py-3 px-6 rounded-full text-white">Discover more</button>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Banner