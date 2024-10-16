import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/pracrice");

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    
});
export default mongoose.model("user",userSchema)