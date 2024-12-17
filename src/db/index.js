import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; //This just has the name for our Database i.e. just a variable

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        //Our Mongo link along with our DB name
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
	} catch (e) {
        console.log("DB Error: ", e);
        process.exit(1)
        //stops our application
    }
}

export default connectDB 
//This just makes us able to use this fucntion to 
// use in some other file