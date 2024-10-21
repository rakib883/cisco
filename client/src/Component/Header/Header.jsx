import { BsMinecartLoaded } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../../UI/Profile";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Button } from "rsuite";
import { RxCross2 } from "react-icons/rx";
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import Border from "../../UI/Border";
import { FaRegHeart } from "react-icons/fa";
import { FachingData } from "../../UI/FaceData";

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
    const {CartData,whilist,newLoggedUser} = useSelector((data)=>data?.myStore)


    // open profile area start
    const [userProfile,setUserProfile] = useState(false)

    // mobile menu area start
    const [mobileMenu,setMobileShowMenu] = useState(false)

    // mobile nav handeler
    const mobileNav = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (mobileNav.current && !mobileNav.current.contains(e.target)) {
            setMobileShowMenu(false); // Pass false to hide the menu
          }
        };
      
        document.addEventListener("mousedown", handleClickOutside);
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [mobileNav]);



    //   profile open and close outside Handeler
    const openProfile = useRef(null)
    
        useEffect(()=>{
            const outSide =(e)=>{
                if(openProfile.current && !openProfile.current.contains(e.target)){
                    setUserProfile(false)
                }
            }

            document.addEventListener("mousedown",outSide)

            return ()=>{
                document.removeEventListener("mousedown",outSide)
            }
        })



    //    filter area start 
    const [inputData,setInputData] = useState("")
    const [product,setProduct] = useState([])
    const [filter,setFilter] = useState(false)
    const filterCloseOutside = useRef(null)
    useEffect(()=>{
        const filterData = async()=>{
           try{
            const response = await FachingData("https://cisco-sigma.vercel.app/product")
            setProduct(response)
           }catch(error){
            console.log(error)
           }
        }
        filterData()
    },[])

    // after user input area start
    useEffect(()=>{
       const afterUserInput =()=>{
         try{
             const filterData = product.filter((item)=>item?.name.toLowerCase().includes(inputData.toLowerCase()))
             setProduct(filterData)
         }catch(error){
            console.log(error)
         }
       }
       afterUserInput()
    },[inputData])
   
   useEffect(()=>{
        const filterOpenClose = (e)=>{
            if(filterCloseOutside.current && !filterCloseOutside.current.contains(e.target)){
                setFilter(false)
            }
        }

        document.addEventListener("mousedown",filterOpenClose)

        return ()=>{
            document.removeEventListener("mousedown",filterOpenClose)
        }
   },[])
  return (
    <div className="bg-white shadow-xl sticky top-0 z-30"> 
        {/* mobile menu area start */}
        <div   className={` ${ mobileMenu === true ?"right-0 duration-300" : "right-[700px] duration-300 no-scrollbar"} md:hidden overflow-auto no-scrollbar   absolute top-0  w-full h-screen  z-50`}>
            <div ref={mobileNav} className="content w-[60%]   shadow-xl min-h-dvh bg-white">
                <div className="content bg-gray-600 py-4 sticky top-0 z-50 ">
                    <div className="header flex justify-between items-center mx-4">
                        <div className="icon">
                            <Link style={{borderBottom: 'none' }} className="image h-auto w-[20px]">
                                <p className=" text-2xl font-semibold">Cisco.com</p>
                            </Link>
                        </div>
                        <div onClick={()=>setMobileShowMenu(false)} className="cross">
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
                        <div className="input lg:mx-4 my-2 cursor-pointer">
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
                                    <Link to={item?.path} onClick={()=>setMobileShowMenu(2)} key={item?.name} className=" hover:bg-gray-300 p-2 rounded-md">
                                        <p className=" font-sans rs-link-no-underline font-semibold text-[16px]" >{item.name}</p>
                                    </Link>
                                ))
                            }
                        </div> 
                    </div>
                 </div>  
            </div>
        </div>
        {/* mobile menu area end */}
        <div className="content flex justify-between items-center mx-2 md:mx-10">
            <div className="logo cursor-pointer ">
                <Link className="image h-[40px] w-auto  hidden md:block">
                    <img className=" w-full h-full" src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" />
                </Link>
                <div onClick={()=>setMobileShowMenu(true)} className="bars z-10 md:hidden">
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
                    <div className="search sm:hidden md:block ">
                        <div className="item  md:mx-[150px] lg:mx-[220px] relative ">
                            <div onFocus={()=>setFilter(true)} className="item bg-gray-100 flex justify-between w-full items-center px-4 ">
                                <div  className="icon py-3.5">
                                    <CiSearch className=" text-[25px] cursor-pointer" />
                                </div>
                                <div className="search w-full ">
                                    <input value={inputData} onChange={(e)=>setInputData(e.target.value)} className=" w-full  bg-gray-100 placeholder:font-sans font-sans outline-none border-none" type="text" placeholder="Search product" />
                                </div>
                                <div onClick={()=>setShowMenu(true)}  className="cross">
                                <HiMiniXMark className=" text-[25px] cursor-pointer" />
                                </div>
                            </div>
                            {
                                filter &&
                                <div ref={filterCloseOutside} className="search-area absolute bg-white w-full">
                                    <div className="content p-4 flex flex-col gap-2 max-h-80 overflow-y-auto ">
                                        {
                                            product.map((item)=>
                                                <Link onClick={()=>setFilter(false)} to={`product/${item?.id}`} key={item?.id} className="item cursor-pointer hover:bg-gray-300 px-2 flex items-center gap-1">
                                                    <div className="icon">
                                                      <CiSearch className=" text-[16px] cursor-pointer" />
                                                    </div>
                                                    <div className="title">
                                                        <p>{item?.name}</p>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                             }
                        </div>    
                    </div>
                    }
                </div>
            
            </div>
            <div className="user my-4">
                <div className="user-icon flex justify-end gap-2">
                        <div className="hidden lg:block ">
                            <div onClick={()=>setShowMenu(false)} className="cart hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                                <CiSearch className=" text-[25px] cursor-pointer" />
                            </div>
                        </div>     
                      <div className="cart hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         {
                            newLoggedUser?.user ?
                            <div  className="profile ">
                                <div onClick={()=>setUserProfile(!userProfile)} className="image-area relative h-[30px] w-[30px] rounded-full cursor-pointer">
                                    <img className="w-full h-full rounded-full" src={newLoggedUser?.user?.photoURL} alt="" />
                                     {
                                        userProfile &&
                                        <div ref={openProfile} className="profile absolute top-12 right-[-50px] w-[300px]">
                                            <div className="items mx-8">
                                                <Profile ile imageLink={newLoggedUser?.user?.photoURL} email={newLoggedUser?.user?.email} userName={newLoggedUser?.displayName}/>
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
                      <Link to="/favorite" className="cart relative hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         <div className="item">
                             <FaRegHeart className=" text-[25px] cursor-pointer" />
                         </div>
                         <div className="overlay flex text-[10px] justify-center items-center text-white bg-indigo-600 w-4 h-4 rounded-full absolute top-0 right-0">
                             {whilist?.length}
                         </div>
                      </Link>
                      <Link to="/user" className="cart relative hover:bg-gray-200 h-10 w-10 duration-300 rounded-full flex justify-center items-center">
                         <div className="item">
                             <BsMinecartLoaded className=" text-[25px] cursor-pointer" />
                         </div>
                         <div className="overlay flex text-[10px] justify-center items-center text-white bg-indigo-600 w-4 h-4 rounded-full absolute top-0 right-0">
                             {
                                CartData?.length
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