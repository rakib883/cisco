import express from "express"
import { allOrder, getAllOrder, pendingOrder } from "../controller/userOrder.js"

const orderInfo = express.Router()
orderInfo.post("/order",allOrder)
orderInfo.get("/all-order/:id",getAllOrder)
orderInfo.get("/order",pendingOrder)


export default orderInfo