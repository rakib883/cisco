import { useState } from "react"
import Border from "../UI/Border"
import InnerTitle from "../UI/InnerTitle"
import { DatePicker, Input, SelectPicker } from "rsuite"
import PasswordHidden from "../UI/PasswordHidden"

const Account = () => {
   const [acountInfo,setAccountInfo] = useState(1)
//   Gender area stata
console.log(typeof(acountInfo))
const gender = [
   {name : "Male", id:1},
   {name : "Femel", id:2},
   {name : "Other", id:3},
].map((item)=>({label: item?.name, value: item}))

// const prpfile data array
const profileTab = [
   {name : "account",id:1},
   {name : "Save",id:2},
   {name : "My Order",id:3},
   {name : "Change password",id:4},
   {name : "billing info",id:5},
]


const accountItemHandeler =(e)=>{
    const userData = e.target.value
    setAccountInfo(Number(userData))
}

console.log(typeof(acountInfo))
  return (
    <div>
        <div className="content mx-8 lg:mx-[150px] mt-[100px]">
            <div className="item">
                <div className="title">
                   <div className="item">
                      <InnerTitle title="Account" />
                   </div>
                   <div className="text flex gap-2 text-[18px]">
                        <div className="item"> 
                            <p className=" font-semibold">Rakin Sheikh</p>
                        </div>
                        <div className="item">
                            <p>Sheikhrakib883@gmail.com</p>
                        </div> 
                        <div className="item">
                           <p>Dhaka</p>
                        </div>
                   </div>
                </div>
                <div className=" mt-4">
                    <Border/>
                </div>
                  <div className="main">
                     <div className="menu-item md:flex items-center gap-14 hidden md:block ">
                           <div onClick={()=>setAccountInfo(1)} className="item  relative">
                              <div className={`${ acountInfo === 1 ? "custom-border text-black " : "text-[#64748b]" } account cursor-pointer `}>
                                 <p className=" text-[16px] w-full">Account info</p>
                              </div>
                           </div>
                           <div onClick={()=>setAccountInfo(2)}  className="item text-[#64748b]` relative">
                              <div className={`${ acountInfo === 2 ? "custom-border text-black " : "text-[#64748b]" } account cursor-pointer `}>
                                 <p className=" text-[16px] w-full">Save lists</p>
                              </div>
                           </div>
                           <div  onClick={()=>setAccountInfo(3)} className="item text-[#64748b] relative">
                              <div className={`${ acountInfo === 3 ? "custom-border text-black " : "text-[#64748b]" } account cursor-pointer `}>
                                 <p className=" text-[16px]">My order</p>
                              </div>
                           </div>
                           <div onClick={()=>setAccountInfo(4)} className="item text-[#64748b] relative">
                              <div className={`${ acountInfo === 4 ? "custom-border text-black " : "text-[#64748b]" } account cursor-pointer `}>
                                 <p className=" text-[16px]">Change password </p>
                              </div>
                           </div>
                           <div onClick={()=>setAccountInfo(5)} className="item text-[#64748b] relative">
                              <div  className={`${ acountInfo === 5 ? "custom-border text-black " : "text-[#64748b]" } account cursor-pointer `}>
                                 <p className=" text-[16px]">Change Billing</p>
                              </div>
                           </div>
                     </div>
                     <div className="select md:hidden">
                        <select onChange={accountItemHandeler} className="w-full outline-none border-none bg-black text-white font-semibold py-2 px-2 cursor-pointer font-sans">
                               {
                                 profileTab?.map((item)=>
                                    <option value={item?.id}  key={item?.name}>{item?.name}</option>
                                 )
                               }
                        </select>
                     </div>
                  </div>   
                <div className="">
                    <Border/>
                </div>
                <div className="body-area">
                  {
                     acountInfo === 1 &&(
                        <div  className={` account-information`}>
                          <div className="item">
                            <div className="title my-8">
                              <InnerTitle title="Accounts Information" />
                            </div>
                            <div className="main-content md:flex gap-10">
                                 <div className="item w-full md:w-[10%] flex justify-center items-center md:justify-start md:items-start">
                                    <div className="image h-[100px] w-[100px] rounded-full">
                                       <img className="rounded-full h-full w-full" src="https://i.ibb.co.com/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                                    </div>
                                 </div>
                                 <div className="form w-full mt-4 md:w-[90%]">
                                    <div className="parent flex gap-2 flex-col">
                                       <div className="name-area md:flex gap-4">
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">First name</p>
                                             <Input size="lg" type="text" placeholder="Inter first name" />
                                          </div>
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">First name</p>
                                             <Input size="lg" type="text" placeholder="Inter last name" />
                                          </div>
                                       </div>
                                       <div className="name-area md:flex gap-4">
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">Email address</p>
                                             <Input size="lg" type="text" placeholder="Email address" />
                                          </div>
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">First name</p>
                                             <DatePicker style={{width:"100%"}} size="lg" format="DD.MM.YY" /> 
                                          </div>
                                       </div>
                                       <div className="name-area  gap-4">
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">Address</p>
                                             <Input size="lg" type="text" placeholder="Your full address" />
                                          </div>
                                       </div>
                                       <div className="name-area md:flex  gap-4">
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">Gender</p>
                                             <SelectPicker size="lg" style={{width:"100%"}} searchable={false} data={gender}/>
                                          </div>
                                          <div className="first-name w-full">
                                             <p className="text-[16px] font-semibold my-2">Phone</p>
                                             <Input size="lg" type="text" placeholder="Phone number" />
                                          </div>
                                       </div>

                                    </div>  
                                    <div className="submit bg-black inline-block my-4 rounded-xl hover:bg-gray-900">
                                       <button className=" text-white px-4 py-2">Update profile</button>
                                    </div> 
                                 </div>
                            </div>
                          </div>
                        </div>
                     )
                  }
                   
                   {
                     acountInfo === 2 &&(
                        <div  className={` account-information`}>
                          <div className="item">Save</div>
                        </div>
                     )
                  }
                   {
                     acountInfo === 3 &&(
                        <div  className={` account-information`}>
                          <div className="item">
                             <div className="item my-2">
                               <InnerTitle title="Order History"/>
                             </div>
                          </div>
                        </div>
                     )
                  }
                  {
                     acountInfo === 4 &&(
                        <div  className={` account-information`}>
                          <div className="item">
                              <div className="title my-4">
                                 <InnerTitle title="Update your password"/>
                              </div>
                              <div className="item-area md:flex gap-2">
                                 <div className="form w-full flex flex-col gap-3">
                                    <div className="item">
                                       <p className=" text-[16px] font-semibold my-2">Current password</p>
                                       <PasswordHidden/>
                                    </div>
                                    <div className="item">
                                       <p className=" text-[16px] font-semibold my-2">New password</p>
                                       <PasswordHidden/>
                                    </div>
                                    <div className="item">
                                       <p className=" text-[16px] font-semibold my-2">Confirm password</p>
                                       <PasswordHidden/>
                                    </div>
                                    <div className="confarm bg-black  rounded-md hover:bg-gray-900 duration-300 text-white text-center">
                                       <button className=" px-4 py-2">Update password</button>
                                    </div>
                                 </div>
                                 <div className="blank w-full"></div>
                              </div>
                          </div>
                        </div>
                     )
                  }
                   {
                     acountInfo === 5 &&(
                        <div  className={` account-information`}>
                          <div className="item">
                             <div className="title my-8">
                               <InnerTitle title="Payments & payouts" />
                             </div>
                             <div className="item">
                                <div className="text-[16px]">
                                    When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ. <><br /></>
                                     To get paid, you need to set up a payout method releases payouts about 24 hours after a guest’s scheduled time. The time it takes for the funds to appear in your account depends on your payout method. Learn more
                                </div>
                             </div>
                             <div className="confarm inline-block bg-black my-8  rounded-md hover:bg-gray-900 duration-300 text-white text-center">
                                 <button className=" px-4 py-2">Add payment method</button>
                              </div>
                          </div>
                        </div>
                     )
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account