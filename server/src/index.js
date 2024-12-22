import express from "express";
import cors from "cors";
import dotenv from "dotenv";  
import connedtDb from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";   
dotenv.config({ path: "../.env" });


const app = express(); 
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);


app.listen(8000, () => {
  console.log("server is running on PORT:" + 8000);
  console.log(process.env.MONGO_DB_URI + "pasupathi");
  connedtDb();
});

