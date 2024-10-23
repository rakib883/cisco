import express from "express";
import { allProduct, blogPost, catagoryDeperdMent,  explorProduct, reviewItem, singleProduct, storeProduct, trendingProduct } from "../controller/product.js";
// Create an instance of Router
const productRouter = express.Router();
// Define the route for "/api/product"
productRouter.get("/store",storeProduct)
productRouter.get("/all-product",allProduct);
productRouter.get("/explor",explorProduct);
productRouter.get("/review",reviewItem);
productRouter.get("/trending-product",trendingProduct);
productRouter.get("/catagor-deperdment",catagoryDeperdMent);
productRouter.get("/blog",blogPost);
productRouter.get("/trending-product")
productRouter.get("/:id",singleProduct)

// Export the router to be used in other files
export default productRouter;
