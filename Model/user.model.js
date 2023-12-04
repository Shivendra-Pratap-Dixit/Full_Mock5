const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    label:{type:String,required:true},
    booked_slots:{type:Array,default:[]}
},
    {
        versionKey:false,
    }
)
const User=mongoose.model('User',userSchema);
module.exports={User}