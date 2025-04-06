const mongoose= require('mongoose');
const {Schema}= mongoose;
const payment= new Schema({
    name:{
        type:String,
        require:true
    },
    to_user:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
})

module.exports=mongoose.model('Payment',payment);