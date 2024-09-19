import { BsMinecartLoaded } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../../UI/Profile";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Button } from "rsuite";
import { RxCross2 } from "react-icons/rx";
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import Border from "../../UI/Border";

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
    
    // open profile area start
    const [userProfile,setUserProfile] = useState(false)

    // mobile menu area start
    const [mobileMenu,setMobileShowMenu] = useState()

  return (
    <div className="bg-white shadow-xl sticky top-0 z-30"> 
        {/* mobile menu area start */}
        <div className={` ${ mobileMenu === 1 ?"right-0 duration-300" : "right-[700px] duration-300"} md:hidden overflow-auto  absolute top-0  w-full h-screen z-50`}>
            <div className="content w-[60%] bg-white shadow-xl   ">
                <div className="content bg-gray-600 py-4 sticky top-0 z-50">
                    <div className="header flex justify-between items-center mx-4">
                        <div className="icon">
                            <Link style={{borderBottom: 'none' }} className="image h-auto w-[20px]">
                                <p className=" text-2xl font-semibold">Cisco.com</p>
                            </Link>
                        </div>
                        <div onClick={()=>setMobileShowMenu(2)} className="cross">
                           <Button color="red" appearance="primary">
                              <RxCross2 className="text-2xl" />
                           </Button>
                        </div>
                    </div>
              </div> 
              <div className="content">
                    <div className="pragraph mx-4 my-1">
                         <p className=" font-sans font-xs">
                             Discover the most outstanding articles on all topics of life. Write your stories and share them
                        </p>
                    </div>
                    <div className="search-bar">
                        <div className="input mx-4 my-2 cursor-pointer">
                            <InputGroup>
                                <Input placeholder="Search product" />
                                <InputGroup.Addon className=" cursor-pointer">
                                    <SearchIcon  />
                                </InputGroup.Addon>
                            </InputGroup>
                        </div>
                    </div>
                    <div className=" my-8">
                         <Border/>
                    </div>
                    <div className="menu-area mx-4">
                        <div className="  flex flex-col  justify-center gap-2">
                            {
                                menuItem.map((item)=>(
                                    <div onClick={()=>setMobileShowMenu(2)} key={item?.name} className=" hover:bg-gray-300 p-2 rounded-md">
                                        <Link className=" font-sans rs-link-no-underline font-semibold text-[16px]" to={item?.path}>{item.name}</Link>
                                    </div>
                                ))
                            }
                        </div> 
                    </div>
                 </div>  
            </div>
        </div>
        {/* mobile menu area end */}
        <div className="content flex justify-between items-center mx-10">
            <div className="logo cursor-pointer ">
                <Link className="image h-[40px] w-auto  hidden md:block">
                    <img className=" w-full h-full" src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                </Link>
                <div onClick={()=>setMobileShowMenu(1)} className="bars z-10 md:hidden">
                  <Button>
                      <HiMiniBars3CenterLeft className=" text-2xl " />
                  </Button>
                </div>
            </div>
            <div className="  flex-1">
                <div className="content hidden md:block ">
                   { showMenu ?
                    <div className="  flex  justify-center gap-8">
                        {
                            menuItem.map((item)=>(
                                <div key={item?.name} className="">
                                    <Link className=" font-sans rs-link-no-underline font-semibold text-[16px]" to={item?.path}>{item.name}</Link>
                                </div>
                            ))
                        }
                    </div> 
                    :
                    <div className="search ">
                        <div className="item md:mx-[150px] lg:mx-[220px] ">
                            <div className="item bg-gray-100 flex justify-between w-full items-center px-4 ">
                                <div  className="icon py-3.5">
                                    <CiSearch className=" text-[25px] cursor-pointer" />
                                </div>
                                <div className="search w-full ">
                                    <input className=" w-full  bg-gray-100 placeholder:font-sans font-sans outline-none border-none" type="text" placeholder="Search product" />
                                </div>
                                <div onClick={()=>setShowMenu(true)}  className="cross">
                                <HiMiniXMark className=" text-[25px] cursor-pointer" />
                                </div>
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
                            <div  className="profile ">
                                <div onClick={()=>setUserProfile(!userProfile)} className="image-area relative h-[30px] w-[30px] rounded-full cursor-pointer">
                                    <img className="w-full h-full rounded-full" src={userSelectorData?.photoURL} alt="" />
                                     {
                                        userProfile &&
                                        <div className="profile absolute top-12 right-[-50px] w-[300px]">
                                        <div className="items mx-8">
                                            <Profile imageLink={userSelectorData?.photoURL} email={userSelectorData?.email} userName={userSelectorData?.displayName}/>
                                        </div>
                                        </div>
                                     }
                                </div>
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