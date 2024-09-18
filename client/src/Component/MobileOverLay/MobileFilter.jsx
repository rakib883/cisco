
const MobileFilter = ({handelClick}) => {
  return (
    <div>
        <div className="content">
           <div className="header ">
            <div className="header-parent bg-white ">
              <div className="header flex justify-between items-center mx-4 ">
                 <div onClick={handelClick} className="cross cursor-pointer">
                   <RxCross2 className=" text-xl" />
                 </div>
                  <div className="text">
                      <p className=" font-sans py-4 font-semibold text-base">Product filter</p>
                  </div>
                  <div className="blank"></div>
              </div>
            </div> 
           </div>
           <div className="foter bg-green-700 mt-8 absolute bottom-0 w-full">
             <div className="content h-[50px]">
                <div className="button">
                    div.lear
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default MobileFilter