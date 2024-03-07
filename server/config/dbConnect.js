const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try {
        const connect = mongoose.connect(process.env.MONGO_URI);
        console.log("db connected")
        
    } catch (error) {
        console.log("db connection error")
        
    }
}

module.exports = dbConnect
