import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    id: {
        type: String
    },
    category
        :
    {
        type: String
    },
    color
        :
    {
        type: String
    },
    email
        :
    {
        type: String
    },
    image
        :
    {
        type: String
    },
    name
        :
    {
        type: String
    },
    price
        :
    {
        type: Number
    },
    deliveryDate:{
      type:String
    },
    quantity
        :
    {
        type: Number
    },
    size
        :
    {
        type: String
    },
    status:{
        type:String
    }

}, {
    timestamps: true
})

const orderModel = model('Order', orderSchema)
export default orderModel;