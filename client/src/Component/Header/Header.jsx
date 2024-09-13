import { BsMinecartLoaded } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {

     // menu items area start
     const menuItem = [
        {name:"Home",path:"/"},
        {name:"Women",path:"/women"},
        {name:"Beauty",path:"/beauty"},
        {name:"Sport",path:"/sport"},
        {name:"Blog",path:"/blog"},
        {name:"Contact",path:"/contact"},
     ]

     const [showMenu,setShowMenu] = useState(true)

    //  redux items area srarrt
    const userSelectorData = useSelector((data)=>data?.myStore?.newLoggedUser?.user)
    const cartDataItem = useSelector((item)=>item?.myStore?.CartData)

  return (
    <div className="bg-white shadow-xl sticky top-0 z-50"> 
        <div className="content flex justify-between items-center mx-10">
            <div className="logo cursor-pointer">
                <Link className="image h-[40px] w-auto">
                    <img className=" w-full h-full" src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                </Link>
            </div>
            <div className="menu flex-1">
                <div className="content">
                   { showMenu ?
                    <div className="flex justify-center gap-8">
                        {
                            menuItem.map((item)=>(
                                <div key={item?.name} className="">
                                    <Link className=" font-sans rs-link-no-underline font-semibold text-[16px]" to={item?.path}>{item.name}</Link>
                                </div>
                            ))
                        }
                    </div> 
                    :
                    <div className="search mx-[200px]">
                        <div className="item bg-gray-100 flex items-center px-4 ">
                            <div  className="icon py-3.5">
                                <CiSearch className=" text-[25px] cursor-pointer" />
                            </div>
                            <div className="search flex-1">
                                <input className="w-full bg-gray-100 placeholder:font-sans font-sans outline-none border-none" type="text" placeholder="Search product" />
                            </div>
                            <div onClick={()=>setShowMenu(true)}  className="cross">
                              <HiMiniXMark className=" text-[25px] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className="user my-4">
                <div className="user-icon flex justify-end gap-2">
                      <div onClick={()=>setShowMenu(false)} className="cart hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         <CiSearch className=" text-[25px] cursor-pointer" />
                      </div>
                      <div className="cart hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         {
                            userSelectorData ?
                            <div className="profile">
                                <div className="image-area h-[30px] w-[30px] rounded-full cursor-pointer">
                                    <img className="w-full h-full rounded-full" src={userSelectorData?.photoURL} alt="" />
                                </div>
                                <div className="title"></div>
                            </div> :
                            <Link to="/login">
                                <BiUser className=" text-[25px] cursor-pointer" />
                            </Link>
                         }
                         
                      </div>
                      <Link to="/user" className="cart relative hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         <div className="item">
                             <BsMinecartLoaded className=" text-[25px] cursor-pointer" />
                         </div>
                         <div className="overlay flex text-[10px] justify-center items-center text-white bg-indigo-600 w-4 h-4 rounded-full absolute top-0 right-0">
                             {
                                cartDataItem?.length
                             }
                         </div>
                      </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header