const { User } = require("../Model/user.model");

const UserController={
    createUser:async(req,res)=>{
        try {
            const {name,email,phone,label}=req.body;
            const newUser=new User({
                name,
                email,
                phone,
                label
            });
            await newUser.save();
            res.status(201).json({message:"User Succesfully Registered",user:newUser})

        } catch (error) {
            res.status(500).json({error:"internal server error"})
        }
    },
    getAllUsers:async(req,res)=>{
        try {
            const users=await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({error:"internal server error"})
        }
    },
    getUserById:async(req,res)=>{
        try {
            const {id}=req.params;
            const user=await User.findById(id)
            if(!user){
                res.status(404).json({error:"User not Found"}) 
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error:"internal server error"})
        }
    },
    updateUser:async(req,res)=>{
        try {
            const {id}=req.params;
            const {name,email,phone,label}=req.body;
            const user=await User.findByIdAndUpdate(id,{name,email,phone,label})
            if(!user){
                res.status(404).json({error:"User not Found"}) 
            }
            res.status(200).json({message:"User Updated succsesfully",user})
        } catch (error) {
            res.status(500).json({error:"internal server error"})
        }
    },
    deleteUser:async(req,res)=>{
        try {
            const {id}=req.params;
            
            const user=await User.findByIdAndDelete(id)
            if(!user){
                res.status(404).json({error:"User not Found"}) 
            }
            res.status(200).json({message:"User Deleted succsesfully",user})
        } catch (error) {
            res.status(500).json({error:"internal server error"})
        }
    }

}
module.exports={
    UserController
}