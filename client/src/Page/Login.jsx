import InnerTitle from "../UI/InnerTitle"
import { Button, ButtonToolbar, IconButton, Input,} from 'rsuite';
import PasswordHidden from "../UI/PasswordHidden";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { signInWithPopup, } from "firebase/auth";
 import { getAuth, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import app from './../Firebase/Firebase';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { loggedUser } from "../Redux/slice";
import {  useNavigate } from "react-router-dom";




const Login = () => {
//  redux area start
const userDispatch = useDispatch()
const navagetor = useNavigate()


    const auth = getAuth(app)

    // google login handeler
     const provider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
       signInWithPopup(auth,provider)
        .then((result)=>{
            toast.success("Login successfully"); 
            userDispatch(loggedUser({
               user:result.user
            })) 

            navagetor("/user")
        })
    }

    // facebook handeler
    const facebookProvider = new FacebookAuthProvider()
    const facebookHandeler = async()=>{
            signInWithPopup(auth,facebookProvider)
                 .then(()=>{
                  
                    toast("Wow so easy!"); 
                 })
                 
    }
//   email  password ayth start
const [getUserName,setUserName] = useState("")
const [getUserPassword,setUserPassword] = useState("")

const loginHandeler = ()=>{
    const email = getUserName;
    const password = getUserPassword;

      if(getUserName === ""){
        toast.error("Please input email"); 
      }else if(getUserPassword === ""){
        toast.error("Please input password"); 
      }else{

        signInWithEmailAndPassword(auth,email,password)
         .then(()=>{
      
            toast.success("Login successfully"); 
         })
        setUserName("")
        setUserPassword("")
      }

   
}

// login data state area
const [loginPage,setLoginPage] = useState(true)
// form handeler are start
const [loginPassword,setPassword] = useState("")
const [reTypepassword,setReTypePassword] = useState("")
const fromHandeler =(e)=>{
  e.preventDefault();
  const firstname = e.target.fastName.value
  const lastName = e.target.lastName.value
  const email    = e.target.email.value
  const phone    = e.target.phone.value


  if(firstname === ""){
    toast.error("Please input first name"); 
  }else if(lastName === ""){
    toast.error("Please input last name name"); 
  }else if(email === ""){
    toast.error("Please input email");
  }else if(phone === ""){
    toast.error("Please input phone number");
  }else if(loginPassword === ""){
    toast.error("Please input password");
  }else if(reTypepassword ===  "" ){
    toast.error("Please input retype password");
  } else if(loginPassword !== reTypepassword ){
    toast.error("password dont match");
  }else{
    const userData = {
      firstName:firstname,
      lastName:lastName,
      email:email,
      phone:phone,
      password:loginPassword,
      retypePassword:reTypepassword
     }
     fetch("http://localhost:3000/register-user",{
       method:"POST",
       headers:{
         "Content-Type" : "application/json"
       },body:JSON.stringify(userData)
     })
     .then(res=>res.json())
     .then(res=>console.log(res))
  
  }
  
    
  
}


  return (
    <div>
      {
        <div className="content bg-[#f7f2f9]">
            <div className="main-area  max-w-2xl h-screen mx-auto">
                <div className="item flex  h-screen justify-center items-center">
                    <div className="content bg-[#ffffff]  w-full p-8">
                      {
                        loginPage ?
                       <div className="title w-full">
                            <InnerTitle className="text-[24px] text-center" title="Login"/>
                            <div className="all-content text-center mb-4">
                               <p className=" text-lg font-semibold">Dont have an account yet? <span onClick={()=>setLoginPage(false)} className=" cursor-pointer text-indigo-700 hover:text-indigo-600 duration-300">Sign up for free</span> </p>
                             </div>
                             <div className="input-area flex flex-col ">
                                 <div className="username-email w-full bg-red my-2">
                                    <p className="my-[4px] font-medium">User name or email</p>
                                    <Input value={getUserName} onChange={(value)=>setUserName(value)} placeholder="User name or email" type="email"/>
                                 </div>
                                 <div className="username-email w-full bg-red my-2">
                                    <p className="my-[4px] font-medium">Password</p>
                                     <PasswordHidden valueData={getUserPassword} setinputValue={(value)=>setUserPassword(value)} />
                                 </div>
                                 <div className="remember flex justify-between items-center my-2">
                                    <div className="check flex items-center gap-2">
                                        <input type="checkbox" name="" id="" />
                                        <p>Remember me</p>
                                    </div>
                                    <div className="text">
                                       <p className="my-[4px] font-medium">Forget Password</p>
                                    </div>
                                 </div>
                                 <div  onClick={loginHandeler} className="button my-2">
                                    <ButtonToolbar> 
                                        <Button block appearance="primary">Login</Button>
                                    </ButtonToolbar>
                                 </div>
                                 <div className="bottom-header flex justify-between items-center gap-4 my-4 ">
                                    <div className=" bg-gray h-1 w-full bg-green-800"></div>
                                    <div className="   w-[300px] text-center font-semibold "><p>Or Login With</p></div>
                                    <div className=" bg-gray h-1 w-full bg-red-700 "></div>
                                 </div>
                                 <div className="button-area flex gap-4 justify-center items-center">
                                        <div onClick={()=>{
                                            facebookHandeler(); 
                                            }} className="faceboo">
                                            <IconButton style={{width:"200px",padding:"10px"}}  appearance="primary" icon={<FaFacebookF className="text-white" />} />
                               
                                        </div>
                                        <div onClick={handleGoogleLogin} className="google"> 
                                            <IconButton style={{width:"200px",padding:"10px"}}  appearance="primary" icon={<FaGoogle  className="text-white"/>} />
                                        </div>
                                 </div>
                             </div>
                        </div> :
                        <div className="main">
                           <div className="title">
                                <div className="all-content text-center mb-4">
                                    <p className=" text-lg font-semibold">You have a account ? <span onClick={()=>setLoginPage(true)} className=" cursor-pointer text-indigo-700 hover:text-indigo-600 duration-300">Please login now</span> </p>
                                </div>
                           </div>
                           <form onSubmit={fromHandeler}>
                              <div className="content flex flex-col gap-4">
                                  <div className="name-area flex items-center gap-4">
                                        <div className=" w-full">
                                          <Input name="fastName" placeholder="First" />
                                        </div>
                                        <div className="fastName w-full">
                                          <Input name="lastName" placeholder="Last name" />
                                        </div>
                                  </div>
                                  <div className="name-area flex items-center gap-4 ">
                                        <div className="lastname w-full">
                                          <Input name="email" placeholder="Email" />
                                        </div>
                                        <div className="lastname w-full">
                                          <Input name="phone" placeholder="Phone" />
                                        </div>
                                  </div>
                                  <div className="password-area flex gap-4 items-center">
                                      <div className="passworx w-full">
                                        <PasswordHidden valueData={loginPassword} setinputValue={(value)=>setPassword(value)} />
                                      </div>
                                      <div className="passworx w-full">
                                        <PasswordHidden valueData={reTypepassword} setinputValue={(value)=>setReTypePassword(value)}/>
                                      </div>
                                  </div>
                                  <div className="butt">
                                      <button type="submit" className="bg-indigo-700 w-full font-semibold text-white p-2 rounded-3xl active:bg-white">Register now</button>
                                  </div>
                              </div>
                           </form>
                           <div onClick={()=>setLoginPage(true)} className="all text-center my-4 cursor-pointer">
                              <p>You allredy have a account</p>
                           </div>
                        </div>
                        }
                        <ToastContainer />
                   </div>
                </div>
            </div>
        </div> 
        

        }
    </div>
  )
}


export default Login