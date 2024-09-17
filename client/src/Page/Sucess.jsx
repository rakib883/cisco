import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import {  emptyCard } from '../Redux/slice';
const Sucess = () => {
  const cartRemove = useDispatch()
  const navegate = useNavigate()
  useEffect(()=>{
    Swal.fire({
      title: 'Order and payment complete',
    }).then((result)=>{
      if (result.isConfirmed) {
        cartRemove(emptyCard()); // Remove cart items
        navegate('/'); // Navigate to the homepage after cart removal
      }
    })
    
  },[cartRemove,navegate])

  return (
    <div>
       <div className="content">
          
       </div>
    </div>
  )
}

export default Sucess