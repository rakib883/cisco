import orderModel from "../model/orderModel.js"

const allOrder = async(req,res)=>{
    const orderData = req.body
     try{
       const confarmOrder = await orderModel.create(orderData)
     }catch(error){
       console.log(error)
     }
}

const getAllOrder = async(req,res)=>{
    const userId = req.params.id
        try{
          const allProduct = await orderModel.find({email:userId})
          res.status(200).json(allProduct)
        }catch(error){
         console.log(error)
        }
}


const pendingOrder = async(req,res)=>{
    try{
     const pendingOrder = await orderModel.find({status:"pending"})
     res.send(pendingOrder);
   }catch(error){
      console.log(error)
   }
}

export {
    allOrder,
    getAllOrder,
    pendingOrder
}