const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the person schema
const personSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

//creatingbycrypt
personSchema.pre("save",async function(next){
    const person=this;   
     //hash password to gerneated only if it has been modified for 
     if (!person.isModified('password') )return next()


try {
    //hash password gernation
    const salt= await bcrypt.genSalt(10);
    //hash password
    const hashedPassword=await bcrypt.hash(person.password,salt)
    //override the plain password with the hashed one
    person.password=hashedPassword
    next()
} catch (error) {
    return next(error)
}
})


personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
// Create person model
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports = Person;
