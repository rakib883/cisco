
import { useSelector } from 'react-redux';
import { Navigate,} from 'react-router-dom';
import Cart from './Cart';

const CartPrivate = () => {
  const userProfile = useSelector((state) => state?.myStore?.newLoggedUser);

  const isAuthenticated = userProfile?.user;
  

  if (isAuthenticated) {
    return <Cart/>

  } else {
    window.alert("You need to log in to access this page.");
    return <Navigate to="/login" replace />;
  }
};

export default CartPrivate;
