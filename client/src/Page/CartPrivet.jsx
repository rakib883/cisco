
import { useSelector } from 'react-redux';
import { Navigate,} from 'react-router-dom';
import CartProduct from './CartProduct';

const CartPrivate = () => {
  const userProfile = useSelector((state) => state?.myStore?.newLoggedUser);

  const isAuthenticated = userProfile?.user;
  

  if (isAuthenticated) {
    return <CartProduct/>

  } else {
    return <Navigate to="/login" replace />;
  }
};

export default CartPrivate;
