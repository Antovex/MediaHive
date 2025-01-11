// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from './db/index.js'
import { app } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: "Hello World"})
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