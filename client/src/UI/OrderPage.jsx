import { Input, InputPicker } from "rsuite";
import Border from "./Border";
import InnerTitle from "./InnerTitle";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import {addToCart, cartItemRemove, decrementProduct} from "../Redux/slice"


const OrderPage = () => {
  const districts = [
    {
      district: "Dhaka",
      upazilas: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
    },
    {
      district: "Chattogram",
      upazilas: ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari"],
    },
    {
      district: "Bagerhat",
      upazilas: ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"]
    },
    {
      district: "Bandarban",
      upazilas: ["Bandarban Sadar", "Thanchi", "Lama", "Ruma", "Rowangchhari", "Alikadam", "Naikhongchhari"]
    },
    {
      district: "Barguna",
      upazilas: ["Barguna Sadar", "Amtali", "Betagi", "Bamna", "Patharghata", "Taltali"]
    },
    {
      district: "Barishal",
      upazilas: ["Barishal Sadar", "Bakerganj", "Babuganj", "Wazirpur", "Banaripara", "Gournadi", "Hizla", "Mehendiganj", "Muladi", "Agailjhara"]
    },
    {
      district: "Bhola",
      upazilas: ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"]
    },
    {
      district: "Bogura",
      upazilas: ["Bogura Sadar", "Adamdighi", "Dhunat", "Dhupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibganj", "Sonatala"]
    },
    {
      district: "Brahmanbaria",
      upazilas: ["Brahmanbaria Sadar", "Ashuganj", "Bancharampur", "Nabinagar", "Nasirnagar", "Sarail", "Kasba", "Akhaura"]
    },
    {
      district: "Chandpur",
      upazilas: ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"]
    },
    {
      district: "Chattogram",
      upazilas: ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"]
    },
    {
      district: "Chuadanga",
      upazilas: ["Chuadanga Sadar", "Alamdanga", "Damurhuda", "Jibannagar"]
    },
    {
      district: "Cox's Bazar",
      upazilas: ["Cox's Bazar Sadar", "Chakaria", "Kutubdia", "Maheshkhali", "Ramu", "Teknaf", "Ukhiya", "Pekua"]
    },
    // Add more districts as needed
  ];

  // Convert districts to the format required by InputPicker
  const districtOptions = districts.map((item) => ({
    label: item.district,
    value: item.district,
  }));

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [upazilas, setUpazilas] = useState([]);

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);

    // Find the selected district's upazilas
    const districtData = districts.find((item) => item.district === value);
    setUpazilas(districtData ? districtData.upazilas : []);
  };

  const [getUpsela,setUpzela] = useState("")

  const getUpzelaData =(value)=>{
    setUpzela(value)
  }
//  address open handeler
const [isOpen,setOpen] = useState(false)
// shiping address areastart
const [isOpenShiping,setShiping] = useState(false)

// redux data area start
const reduxData = useSelector((item)=>item?.myStore?.CartData)
const incrementDispatch = useDispatch()
const decrementDispatch = useDispatch()
const [total,setTotal] = useState()

 useEffect(()=>{
    let total =  0
    reduxData.map((item)=>{
      total += (item?.quantity)*(item?.price)
      setTotal(total)
    })

 },[reduxData])

 const removeOrderPageData = useDispatch()

// pament handeler area start

const orderHandeler =async()=>{
    try{
       const stripe = await loadStripe("pk_test_51PWscOL3BkBJk9RpVuFlO4f7SrTvDNHnFCVae0x6buv1S703qEvd3iEnDfqVQU9Iz1z6WDhV3M8IfhS1Za0O8v1z00UzkBSn5i")
       const response = await fetch("http://localhost:3000/create-checkout-session",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },body:JSON.stringify(reduxData)
       })

       const session = await response.json()
       console.log("hello",session?.id)
       const result = stripe.redirectToCheckout({
        sessionId:session.id
       })
    
    }catch(error){
      console.log(error)
    }
}




  return (
    <div>
      <div className="content mx-20 my-8">
        {
          reduxData.length > 0 ? 
        <div className="content">
          <div className="title">
            <InnerTitle title="Checkout now" />
          </div>

          <div className="item flex gap-4">
            <div className="info w-[60%] flex flex-col gap-4">
              <div className="contact-info">
                <div className="contact-info border rounded-xl">
                  <div className="item mx-4 py-2 flex items-center">
                    <div className="info flex-1">
                      <div className="info-tem flex items-center gap-4">
                        <div className="icon py-4">
                          <FaRegUserCircle className="text-xl" />
                        </div>
                        <div className="text">
                          <div className="info">
                            <p className="text-[16px] font-semibold">Contact info</p>
                          </div>
                          <div className="info flex gap-2 items-center">
                            <div className="item">
                              <p>Muksudpur, Gopalgonj</p>
                            </div>
                            <div className="item">
                              <p>0172826262111</p>
                            </div>
                            <div className="item">
                              <p>sheikhrakib883@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={()=>setOpen(!isOpen)} className="button">
                      <button className="bg-[#f8fafc] px-2 py-2 rounded-md">
                        Change address
                      </button>
                    </div>
                  </div>
                 { 
                  isOpen &&
                  <div className="item">
                    <div className="border-area">
                      <Border />
                    </div>

                    <div className="content mx-4">
                      <div className="form-area py-4">
                        <div className="phon-number">
                          <div className="content flex gap-2">
                            <div className="phone w-full">
                              <Input placeholder="Phone number" />
                            </div>
                            <div className="email w-full">
                              <Input placeholder="Email" />
                            </div>
                          </div>
                          <div className="content flex gap-2 mt-4">
                            
                            <div className="phone w-full">
                              <InputPicker
                                data={districtOptions}
                                placeholder="Select District"
                                onChange={handleDistrictChange}
                                className="w-full"
                              />
                            </div>

                              <div className="upazila w-full">
                                <InputPicker
                                  data={upazilas.map((upazila) => ({
                                    id:upazila?.id,
                                    label: upazila,
                                    value: upazila,
                                  }))}
                                  onChange={getUpzelaData}
                                  placeholder="Select Upazila"
                                  className="w-full"
                                />
                              </div>
                    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info border rounded-xl">
                  <div className="item mx-4 py-2 flex items-center">
                    <div className="info flex-1">
                      <div className="info-tem flex items-center gap-4">
                        <div className="icon py-4">
                          <FaRegUserCircle className="text-xl" />
                        </div>
                        <div className="text">
                          <div className="info">
                            <p className="text-[16px] font-semibold">Shiping address</p>
                          </div>
                          <div className="info flex gap-2 items-center">
                            <div className="item">
                              <p>Muksudpur, Gopalgonj</p>
                            </div>
                            <div className="item">
                              <p>0172826262111</p>
                            </div>
                            <div className="item">
                              <p>sheikhrakib883@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={()=>setShiping(!isOpenShiping)} className="button">
                      <button className="bg-[#f8fafc] px-2 py-2 rounded-md">
                        Change shiping 
                      </button>
                    </div>
                  </div>
                 { 
                  isOpenShiping &&
                  <div className="item">
                    <div className="border-area">
                      <Border />
                    </div>

                    <div className="content mx-4">
                      <div className="form-area py-4">
                        <div className="phon-number">
                          <div className="content flex gap-2">
                            <div className="phone w-full">
                              <Input placeholder="First name" />
                            </div>
                            <div className="email w-full">
                              <Input placeholder="Last name" />
                            </div>
                          </div>
                          <div className="content flex gap-2 mt-4">
                             <div className="phone w-full">
                                <Input placeholder="Lane " />
                             </div>
                             <div className="email w-full">
                                <Input placeholder="house" />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                </div>
              </div>
            </div>

            <div className="order-info w-[40%]">
              <div className="product">
                <div className="item flex gap-4 flex-col">
                  {
                     reduxData?.map((item)=>
                      <div key={item?.id} className="item flex items-center gap-4">
                        <div className="image-area">
                          <div className="item h-[150px] w-[150px] bg-[#f1f5f9] rounded-xl ">
                            <img className=" object-cover" src={item?.image} alt="" />
                          </div>
                        </div>
                        <div className="text-area flex-1">
                           <div className="title flex justify-between">
                               <div className="title">
                                 <p className=" font-semibold">{item?.name}</p>
                                 <div className="price flex gap-4 items-center">
                                    <p className="mt-2">size : {item?.size}</p>
                                    <p>Color : {item?.color}</p>
                                 </div>
                               </div>
                               <div className="prize">
                                 <p>${item?.price}</p>
                               </div>
                           </div>
                           <div className=" flex justify-between my-8">
                               <div className="flex gap-4 items-center">
                                 <div onClick={()=>incrementDispatch(addToCart({
                                  id:item?.id
                                 }))} className="increment border rounded-full h-8 cursor-pointer w-8 flex justify-center items-center">
                                     <FaPlus />
                                 </div>
                                 <div className="increment">
                                     <p>{item?.quantity}</p>
                                 </div>
                                 <div onClick={()=>decrementDispatch(decrementProduct({
                                  id:item?.id
                                 }))} className="increment border rounded-full h-8 cursor-pointer w-8 flex justify-center items-center">
                                     <GoDash />
                                 </div>
                               </div>
                               <div onClick={()=>removeOrderPageData(cartItemRemove({
                                 id:item?.id
                               }))} className=" bg-[#f8fafc] rounded-md flex items-center justify-center">
                                 <button className=" px-4 ">Remove</button>
                               </div>
                           </div>
                        </div>
                      </div>
                    )
                  }
                </div>
                <Border/>
               <div className="main-area">
                  <div className="shiping my-4 flex flex-col gap-3">
                    <div className="subtotal flex justify-between">
                       <div className="title"><p className=" text-base  text-[#6a96c0]">Subtotal</p></div>
                       <div className="price"><p className=" text-[14px] font-semibold">${total}</p></div>
                    </div>
                    <div className="subtotal flex justify-between">
                       <div className="title"><p className=" text-base  text-[#6a96c0]">Shipping estimate</p></div>
                       <div className="price"><p className=" text-[14px] font-semibold">--</p></div>
                    </div>
                    <div className="subtotal flex justify-between">
                       <div className="title"><p className=" text-base  text-[#6a96c0]">Tax estimate</p></div>
                       <div className="price"><p className=" text-[14px] font-semibold">--</p></div>
                    </div>
                    <div className="subtotal flex justify-between">
                       <div className="title"><p className=" text-base  text-[black]">Order total</p></div>
                       <div className="price"><p className=" text-[14px] font-semibold">${total}</p></div>
                    </div>
                  </div>
                   <div className="butt w-full">
                      <div onClick={orderHandeler}>
                          <button type="submit" className=" bg-black w-full text-white px-4 py-3 rounded-3xl">Confarm order now</button>
                      </div>
                    </div>
               </div>
              </div>
            </div>
          </div>
        </div> :
        <div className="main text-center">
           <InnerTitle title="Your cart is empty" />
        </div>
        }
      </div>
    </div>
  );
};

export default OrderPage;
