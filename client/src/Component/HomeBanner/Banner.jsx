import InnerTitle from "../../UI/InnerTitle"

const Banner = () => {
  return (
    <div>
        <div className="content mx-10 bg-[#fefce8] rounded-3xl relative  h-[500px] my-[100px] flex justify-between">
          <div className="item">
                <div className="image w-[50%] absolute top-[-50px]">
                    <div className="image">
                        <img className="h-[550px]" src="https://i.ibb.co/3ydx1Hh/promo2.png" alt="ads" />
                    </div>
                </div>
          </div>
           <div className="text w-[50%] ">
              <div className="content my-[100px]">
                 <div className="middel flex flex-col gap-10">
                    <div className="logo">
                       <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                    </div>
                    <div className="title">
                        <InnerTitle title="Special offerin kids products" className="text-[48px] leading-[45px]" />
                    </div>
                    <div className="text max-w-md">
                        <p className=" font-sans text-[16px] font-semibold text-[#718190] ">Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                    </div>
                    <div className="button">
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