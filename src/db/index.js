import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(
        process.env.MONGODB_URI,
        {
            dbName: process.env.DB_NAME,
        }
        );
        console.log(
            `MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        throw error;
    }
};

export default connectDB;   