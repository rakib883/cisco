import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { blog, explor, product, productDepardment, review, trending } from "./Conastance/index.mjs";
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to the database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/register-user", async (req, res) => {
  const user = req.body;
  console.log(user);
  res.json(user);
});

app.get("/product", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  const requestProduct = product.find((item) => item?.id === productId);
  if (requestProduct) {
    res.send(requestProduct);
  } else {
    res.json({ message: "Data not found" });
  }
});

app.get("/explor", (req, res) => {
  res.send(explor);
});

app.get("/catagor-deperdment", (req, res) => {
  res.send(productDepardment);
});

app.get("/trending-product", (req, res) => {
  res.send(trending);
});

app.get("/review", (req, res) => {
  res.send(review);
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.get("/:id", (req, res) => {
  const id = req?.params?.id;
  const categoryData = trending.filter((item) => item?.category === id.toLowerCase());
  if (categoryData.length === 0) {
    return res.json({ message: "No data found" });
  } else {
    return res.json(categoryData);
  }
});

app.get("/color/filter/:id", (req, res) => {
  const color = req.params.id;
  const colorFilter = product.filter((item) => item?.colors.includes(color));
  if (colorFilter.length === 0) {
    return res.json({ message: "Data not found" });
  }
  res.send(colorFilter);
});

app.get("/product/size/:id", (req, res) => {
  const size = req?.params?.id;
  const sizeFilter = product.filter((item) => item?.sizes?.includes(size));
  if (sizeFilter.length === 0) {
    return res.json({ message: "Data not found" });
  }
  return res.json(sizeFilter);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDatabase();
});
