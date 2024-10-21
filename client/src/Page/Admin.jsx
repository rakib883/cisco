import { Link, NavLink, Outlet } from "react-router-dom";
import AdminHeader from "../Component/AdminComponent/AdminHeader"
import AdminFoter from "../Component/AdminComponent/AdminFoter";
import { MdOutlineDashboard } from "react-icons/md";
import { useState } from "react";
import { MdOutlineHandyman } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
const Admin = () => {
  // You can remove the condition since it's always true
  const [admin,setAdmin] = useState(true)
  return (
    <div className="content">
      {
         admin ?
      <div className="main   ">
          <AdminHeader/>
            <div className="sidebar flex ">
               <div className="side-bar w-[20%] bg-indigo-500 ">
                   <div className="item py-4 flex flex-col gap-2">
                       <NavLink to="/admin" className={({ isActive }) => (isActive ? ' bg-indigo-600' : '')}   style={{ textDecoration: 'none' }}>
                          <button className="item flex items-center gap-1 py-2 cursor-pointer mx-8">
                              <MdOutlineDashboard className=" text-xl text-white" />
                              <p className=" text-white  text-base">Dashbord</p>
                          </button>
                       </NavLink>
                       <NavLink className={({ isActive }) => (isActive ? ' bg-indigo-600' : '')} to="/admin/manage-order" style={{ textDecoration: 'none' }}>
                          <button  className="item flex items-center mx-8 gap-1 py-2 cursor-pointer">
                              <MdOutlineHandyman className=" text-xl text-white" />
                              <p className=" text-white  text-base">Manage new order</p>
                          </button>
                        </NavLink>  
                        <NavLink className={({ isActive }) => (isActive ? ' bg-indigo-600' : '')} to="/admin/pending-order" style={{ textDecoration: 'none' }}>
                          <button  className="item flex items-center mx-8 gap-1 py-2 cursor-pointer">
                              <MdOutlineLocalShipping className=" text-xl text-white" />
                              <p className=" text-white  text-base">Shiping order</p>
                          </button>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? ' bg-indigo-600' : '')} to="/admin/delivery-order" style={{ textDecoration: 'none' }}>
                          <button  className="item flex items-center mx-8 gap-1 cursor-pointer py-2">
                              <MdOutlineLocalShipping className=" text-xl text-white" />
                              <p className=" text-white  text-base">Delivery order </p>
                          </button>
                        </NavLink>    
                   </div>
               </div>
               <div className="content w-[80%] bg-white p-4">
                 <Outlet />
               </div>
            </div>
          <AdminFoter/>
      </div> :

    <div className="item">
        hello
    </div>
    
    }
    </div>
  );
};

export default Admin;
