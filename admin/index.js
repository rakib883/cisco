import express from "express";
import cors from "cors";
import { blog, explor, product, productDepardment, review, trending } from "./Conastance/index.mjs";
import dotenv from 'dotenv';
import Stripe from "stripe";
import orderModel from "./model/orderModel.js";
import { ObjectId } from 'mongodb';
import { databaseConnect } from "./dbConfig/database.js";












// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

databaseConnect()


app.get('/', (req, res) => {
  res.send('Hello World!');
});





























// app.post("/register-user", async (req, res) => {
//   const user = req.body;
//   console.log(user);
//   res.json(user);
// });

// app.get("/product", (req, res) => {
//   res.send(product);
// });



// app.get("/pending-order",async(req, res) => {
//   try{
//     const pendingOrder = await orderModel.find({status:"pending"})
//     res.send(pendingOrder);
//   }catch(error){
//      console.log(error)
//   }
  
// });




// app.get("/product/:id", (req, res) => {
//   const productId = req.params.id;
//   const requestProduct = product.find((item) => item?.id === productId);
//   if (requestProduct) {
//     res.send(requestProduct);
//   } else {
//     res.json({ message: "Data not found" });
//   }
// });

// app.get("/explor", (req, res) => {
//   res.send(explor);
// });

// app.get("/catagor-deperdment", (req, res) => {
//   res.send(productDepardment);
// });

// app.get("/trending-product", (req, res) => {
//   res.send(trending);
// });

// app.get("/review", (req, res) => {
//   res.send(review);
// });

// app.get("/blog", (req, res) => {
//   res.send(blog);
// });

// app.get("/:id", (req, res) => {
//   const id = req?.params?.id;
//   const categoryData = trending.filter((item) => item?.category === id.toLowerCase());
//   if (categoryData.length === 0) {
//     return res.json({ message: "No data found" });
//   } else {
//     return res.json(categoryData);
//   }
// });

// app.get("/color/filter/:id", (req, res) => {
//   const color = req.params.id;
//   const colorFilter = product.filter((item) => item?.colors.includes(color));
//   if (colorFilter.length === 0) {
//     return res.json({ message: "Data not found" });
//   }
//   res.send(colorFilter);
// });

// app.get("/product/size/:id", (req, res) => {
//   const size = req?.params?.id;
//   const sizeFilter = product.filter((item) => item?.sizes?.includes(size));
//   if (sizeFilter.length === 0) {
//     return res.json({ message: "Data not found" });
//   }
//   return res.json(sizeFilter);
// });





// const stripe = new Stripe("sk_test_51PWscOL3BkBJk9RpLl0RojVbDLL5k1fzCtG9cetkJ1uH6Hd2LsfnTYSUC2Icqq5m9MQfRQWmNlcqIAnjUpVCDFZH00N1nAm0W7")

// app.post('/create-checkout-session', async (req, res) => {
//   const productArray = req.body;
//   const lineItem = productArray.map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item?.name,
//         images: [item?.image],
//         metadata: {
//           email: item.email,
//           state: "processing",
//         }
//       },
//       unit_amount: Math.round(item?.price * 100),
//     },
//     quantity: item?.quantity
//   }))

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItem,
//       mode: "payment",
//       success_url: `https://cisco-client.vercel.app/pament-succesfully?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: "https://cisco-client.vercel.app/pament-cancell"
//     })
//     res.json(session)
//   } catch (error) {
//     console.log(error)
//   }

// });


// // order save to database
// app.post("/save-order",async(req,res)=>{
//     const orderData = req.body
//     try{
//       const confarmOrder = await orderModel.create(orderData)

    
//     }catch(error){
//       console.log(error)
//     }
// })

// app.patch("/delivery-now", async(req, res) => {
//   const {id,status,deliverDate} = req.body
//   console.log(req.body)
//   try {
//     const productId = req.params.id;
//     const filter = { _id: new ObjectId(id)};

//     const updateDoc = {
//       $set: {
//         status:status ,// Corrected typo: "status"
//         deliveryDate:deliverDate,
//       }
//     };

//     const result = await orderModel.updateOne(filter, updateDoc); // Pass updateDoc here
//     res.status(200).json({ message: "product shiping successfully", result });


//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while updating the document" });
//   }
// });




// // all Order data faching are start
// app.get("/all-ordere/:id",async(req,res)=>{
//   const userId = req.params.id
//    try{
//      const allProduct = await orderModel.find({email:userId})
//      res.status(200).json(allProduct)
//    }catch(error){
//     console.log(error)
//    }
// })

// pending order area start
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
