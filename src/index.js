// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from './db/index.js'
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', () => {
    
})

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port : ", PORT)
    });
})
.catch((err) => {
    console.log("MongoDB connection failed !!", err);
})