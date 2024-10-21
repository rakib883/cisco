import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="item bg-indigo-500">
           <div className="content  flex items-center justify-between mx-8">
              <div className="logo">
                <p className=" text-xl font-semibold text-white py-4">Cisco.com</p>
              </div>
            <div className="user-item flex items-center gap-8">
                 <div className="notification py-2 ">
                    <div className="item cursor-pointer">
                       <IoNotifications className=" text-xl text-white " />
                    </div>
                 </div>
                 <div className="message py-2">
                    <div className="message cursor-pointer">
                       <FaMessage className=" text-xl text-white " />
                    </div>
                 </div>
                 <div className="profile py-2">
                    <div className="user cursor-pointer">
                       <FaRegCircleUser className=" text-xl  text-white" />
                    </div>
                 </div>
              </div>
           </div>
      </div>
    </div>
  )
}

export default Header