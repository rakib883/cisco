import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    password: {
        type: String
    }
});

// Use `export default` for ES module syntax
export default mongoose.model('newUser', userSchema);
