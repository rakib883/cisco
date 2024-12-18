import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Page/Home';
import SingleProduct from './Page/SingleProduct';
import Women from './Page/Women';
import WhatsTrading from './Component/WhatsTrading/WhatsTrading';
import Contact from './Page/Contact';
import Login from './Page/Login';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Page/Blog';
import Cart from './Page/Cart';
import CartPrivet from './Page/CartPrivet';
import CartProduct from './Page/CartProduct';
import OrderPage from './UI/OrderPage';
import Cancell from './Page/Cancell';
import Account from './Page/Account';
import Sucess from './Page/Sucess';
import MyOrder from './Page/MyOrder';
import Admin from './Page/Admin';
import AdminHome from './Page/AdminHome';
import ManageOrder from './Page/ManageOrder';
import Favorite from './Page/Favorite';
import PendingOrder from './Page/PendingOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
       {
        path:"/",
        element:<Home/>
       },
       {
        path:"/product/:id",
        element:<SingleProduct/>
        
       },
       {
        path:"women/product/:id",
        element:<SingleProduct/>
        
       },
       {
        path:"sport/product/:id",
        element:<SingleProduct/>
        
       },
       {
        path:"/women",
        element:<Women/>
        
       },
       {
        path:"/contact",
        element:<Contact/>
        
       },
       {
        path:"/login",
        element:<Login/>
        
       },
       {
        path:"/sport",
        element:<WhatsTrading/>
        
       },
       {
        path:"/blog",
        element:<Blog/>
        
       },
       {
        path:"/user",
        element:<CartPrivet/>,
        children:[
          {
             path:"",
             element:<CartProduct/>,
             children:[
                {
                  path:"",
                  element:<Cart/>
                },
                {
                  path:"account",
                  element:<Account/>
                },
                {
                    path:"my-order",
                    element:<MyOrder/>
                },
                {
                  path:"order-now",
                  element:<OrderPage/>
                }
             ]
             
          },
        ]
        
       },
       {
        path:"/pament-succesfully",
        element:<Sucess/>
       },
        
       {
        path:"/pament-cancell",
        element:<Cancell/>
      },
      {
        path:"/admin",
        element:<Admin/>,
        children:[
          {
            path:"",
            element:<AdminHome/>
          },
          {
            path:"dashbord",
            element:<div>order</div>
          },
          {
            path:"manage-order",
            element:<ManageOrder/>
          },
          {
            path:"pending-order",
            element:<PendingOrder/>
          },
          {
            path:"*",
            element:<>Not found</>
          }
        ]
      },{
         path:"/favorite",
         element:<Favorite/>
      },
      
       {
        path:"*",
        element:<div className="text-center py-20">Page developing continue</div>
        
       },
       
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
