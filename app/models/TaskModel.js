import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
secret:{
    type:String,
    required:true,
},

})

const Username= mongoose.model("Username",taskSchema)

export default Username;