import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary" //This is used to connect to cloudinary and upload images to cloudinary
import fs from "fs" //This module comes with node, used for file system operations in local machine

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null; //If localFilePath doesn't exist, return null
//         //upload the file to cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         // file uploaded successfully
//         console.log("File uploaded successfully on cloudinary ", response.url);
//         return response;
//     } catch (error) {
//         //removing the files which are saved locally but not uploaded on cloudinary, as they may be corrupted
//         fs.unlinkSync(localFilePath);
//         return null;
//     }
// }

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        console.log("Error while uploading file on cloudinary ", error);
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary};