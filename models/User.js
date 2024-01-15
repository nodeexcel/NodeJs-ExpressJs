const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const User=new Schema({
    first_name:String,
    last_name:String,
    email:{type:String,unique:true},
    user_name:{type:String,unique:true},
    phone:{type:Number,unique:true},
    password:String
},{
    collation:"User"
})

module.exports = mongoose.model("User", User);