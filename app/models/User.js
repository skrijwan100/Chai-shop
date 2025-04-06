const mongoose=require("mongoose")
const {Schema,model}=mongoose;
const newuser= new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
      type:String,
      require:true,
    },
    profilePic:{
        type:String,
        default:'https://res.cloudinary.com/dcvejeszo/image/upload/v1741595130/user_profiles/ibsgbbfdxkk3d6qirsrg.jpg'
    },
})
export default mongoose.models.User || model('User',newuser)