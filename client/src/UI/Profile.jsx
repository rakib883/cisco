import Border from "./Border"
import { FaRegUser } from "react-icons/fa";
import { ImFileWord } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import CheckedInfo from "./Checked";
import { MdLightMode } from "react-icons/md";
import { IoIosHelpBuoy } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../Redux/slice";
import { Link, useNavigate } from "react-router-dom";

const Profile = ({imageLink,userName,email}) => {
    const dispatch = useDispatch()
    const navegate = useNavigate()
//  signOutHandeler area start
const signOutHandeler =()=>{
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navegate("/");  
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
        alert(`Error signing out: ${error.message}`);
      });
}
  return (
    <div >
        <div className="content border shadow-2xl bg-white rounded-2xl">
            <div className="items mx-4 py-4 text-[#334155]">
                <div className="profile flex gap-2  items-center">
                    <div className="image">
                        <img className="rounded-full w-10 h-10 border-2 border-gray" src={imageLink} alt="" />
                    </div>
                    <div className="text leading-[5px] mt-2 font-semibold">
                        <p className=" text-[16px] ">{userName}</p>
                        <p className=" text-xs ">Bangladesh</p>
                    </div>
                </div>
                <div className="bo">
                    <Border/>
                </div>
                 <div className=" flex flex-col gap-2"> 
                    <Link style={{ textDecoration: 'none' }} to="/user/account" className="profile flex items-center gap-2 text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="icon">
                        <FaRegUser className="text-xl" />
                        </div>
                        <div className="text">
                            <p>My account</p>
                        </div>
                    </Link>
                    <div className="profile flex items-center gap-2 text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="icon">
                        <ImFileWord className="text-xl" />
                        </div>
                        <Link to="user/order-now" className="text">
                            <p>My order</p>
                        </Link>
                    </div>
                    <div className="profile flex items-center gap-2 text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="icon">
                        <IoIosHeartEmpty className="text-xl" />
                        </div>
                        <div className="text">
                            <p>Whishlist</p>
                        </div>
                    </div>
                 </div>
                 <div className="bo">
                    <Border/>
                </div>
                <div className="bottom-area">
                    <div className="profile flex items-center justify-between text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="item flex gap-2 items-center">
                            <div className="light">
                              <MdLightMode className=" text-xl" />
                            </div>
                            <div className="text">
                                <p>Dark them</p>
                            </div>
                        </div>
                        <div className="icon">
                            <CheckedInfo className="text-xl" /> 
                        </div>
                    </div>
                    <div className="profile flex items-center gap-2 text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="icon">
                        <IoIosHelpBuoy className="text-xl" />
                        </div>
                        <div className="text">
                            <p>Help</p>
                        </div>
                    </div>
                    <div onClick={signOutHandeler} className="profile flex items-center gap-2 text-[14px] hover:bg-gray-300 py-2 px-2 rounded-md">
                        <div className="icon">
                        <CgLogOut className="text-xl" />
                        </div>
                        <div className="text">
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile