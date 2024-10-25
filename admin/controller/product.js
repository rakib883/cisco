import { blog, explor, product, productDepardment, review, trending } from "../Conastance/index.js";
 
const storeProduct=(req,res)=>{
         res.json(product)
}

const allProduct =(req,res)=>{
     res.json(product)
} 


const explorProduct =(req,res)=>{
    res.json(explor)
}

const reviewItem =(req,res)=>{
    res.json(review)
}

const trendingProduct =(req,res)=>{
    res.json(trending)
}

const catagoryDeperdMent =(req,res)=>{
    res.json(productDepardment)
}

const blogPost=(req,res)=>{
    res.json(blog)
}


const singleProduct =(req,res)=>{
    const productId = req.params.id;
    console.log(productId)
     const requestProduct = product.find((item) => item?.id === productId);
      if (requestProduct) {
        res.send(requestProduct);
      } else {
       res.json({ message: "Data not found" });
      }
}






export {
    allProduct,
    explorProduct,
    reviewItem,
    trendingProduct,
    catagoryDeperdMent,
    blogPost,
    singleProduct,
    storeProduct
}

