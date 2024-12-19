import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//We use app.use() to add middleware and configurations to our app
app.use(cors(
    {
        // setting up cors configuration
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

//accepts 16kb of json format data and makes it avaibale in req.body
app.use(express.json({limit: '16kb'}));
//accepts 16kb of urlencoded data i.e. through url and makes it avaibale in req.body
app.use(express.urlencoded({extended: true, limit: "16kb"}));
//serves static files from this directory
app.use(express.static("public"));

// parse cookies sent by clients and can do CRUD operations on it
app.use(cookieParser());

export {app};