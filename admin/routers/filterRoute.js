import express from "express"
import { colorFilter, productFilter, sizeFilter } from "../controller/productFilter.js"
const filterRouter = express.Router()

filterRouter.get("/:id",productFilter)
filterRouter.get("/color/:id",colorFilter)
filterRouter.get("/size/:id",sizeFilter)
     
export default filterRouter