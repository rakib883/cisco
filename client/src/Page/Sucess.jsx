import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; 
import Swal from 'sweetalert2'; import 'sweetalert2/dist/sweetalert2.min.css';  
import { emptyCard } from '../Redux/slice';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionID = searchParams.get("session_id");
 
  
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!sessionID) {
      navigate("/"); 
    }
  }, [sessionID, navigate]); 


 const reduxData = useSelector((item)=>item?.myStore?.CartData) 
 console.log("success",reduxData )
  // useEffect(()=>{
  //      fetch("https://cisco-sigma.vercel.app/order",{
  //        method:"POST",
  //        headers:{
  //         "Content-Type" :"application/json"
  //        },body:JSON.stringify(reduxData)
  //      })
  // },[])
  

  // Optional: You can also use this for further actions
  useEffect(() => {
    Swal.fire({
      title: 'Order and payment complete',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(emptyCard()); // Remove cart items
        navigate('/'); // Navigate to the homepage after cart removal
      }
    });
  }, [dispatch, navigate]);

  return (
    <div>
      <div className="content">
        <p>Payment done</p>
      </div>
    </div>
  );
};

export default Success;
