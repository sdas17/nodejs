import mongoose from "mongoose";
import validator from 'validator'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Require']
    },
    email: {
        type: String,
        required: [true, 'email is Require'],
        unique: true,
        validate:validator.isEmail,
    },
   
    password: {
        type: String,
        required: [true, 'password is Require'],

    },
    location: {
        type: String,
        // default: 'ghazipur',
        required: [true, 'location is Require'],

    },


}, { timestamps: true })
export default mongoose.model('User', userSchema)