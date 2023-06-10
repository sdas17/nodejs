import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected To Mongodb Database${mongoose.connection.host}`.bgGreenr6);
    } catch (error) {
        console.log(`Mongodb Error${error}`.bgRed);
    }
}
export default connectDB