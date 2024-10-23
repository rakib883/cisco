import { trending } from "../Conastance/index.mjs"

const productFilter =(req,res)=>{
    const id = req?.params?.id;
    const categoryData = trending.filter((item) => item?.category === id.toLowerCase());
    if (categoryData.length === 0) {
      return res.json({ message: "No data found " });
    } else {
      return res.json(categoryData);
    }
}


const colorFilter =(req,res)=>{
    const color = req.params.id;
       const colorFilter = trending.filter((item) => item?.colors.includes(color));
       if (colorFilter.length === 0) {
         return res.json({ message: "Data not found" });
       }
       res.send(colorFilter);
}

const sizeFilter =(req,res)=>{
    const size = req?.params?.id;
        const sizeFilter = trending.filter((item) => item?.sizes?.includes(size));
        if (sizeFilter.length === 0) {
          return res.json({ message: "Data not found" });
        }
       return res.json(sizeFilter);
}


export{
    productFilter,
    colorFilter,
    sizeFilter
}