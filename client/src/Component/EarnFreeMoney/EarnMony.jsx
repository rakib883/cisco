
import { motion } from 'framer-motion';
const EarnMony = () => {
  return (
    <div>
        <div className="content mx-10">
            <div className="seperator flex items-center jus overflow-hidden">
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.5,x:{type:"spring"}}}
                className="text w-[40%] ">
                    <div className="image">
                        <img className=" h-[120px] w-[120px]" src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="logo" />
                    </div>
                   <div className="title">
                     <h1 className=" text-[48px] font-bold font-sans  text-[#111827]">Earn free money
                     with Ciseco</h1>
                   </div>
                   <div className="pra my-4">
                       <p className=" font-sans text-[16px] text-[#6b748b] font-semibold ">With Ciseco you will get freeship & savings combo...</p>
                   </div>
                   <div className="button-area flex gap-4">
                     <button className=" bg-[#111827] px-10 font-sans font-semibold py-4 rounded-full text-white">Saving Combo</button>
                     <button className=" border hover:bg-[#111827] text-black duration-300 px-10 font-sans font-semibold py-4 rounded-full hover:text-white">Discover more</button>
                   </div>
                </motion.div>
                <motion.div 
                 initial={{x:100,opacity:0}}
                 whileInView={{x:0,opacity:1}}
                 transition={{duration:.5, x:{type:"spring"}}}
                className="image w-[60%] ">
                    <img className=" h-[500px]" src="https://i.ibb.co/qCxPD8K/right-Large-Img-Dark.png" alt="coin" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default EarnMony