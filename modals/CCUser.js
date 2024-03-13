import mongoose from "mongoose"

const fruitSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"No firstname specified"]
    },
    lastName:{
        type:String,
        required:[true,"No lastname specified"]
    },
    email:{
        type:String,
        required:[true,"No email specified"]
    },
    phone:{
        type:String,
        required:[true,"No phone specified"]
    },
    branch:{
        type:String,
        required:[true,"No branch specified"]
    },
    year:{
        type:String,
        required:[true,"No year specified"]
    },
    college:{
        type:String,
        required:[true,"No college specified"]
    },
    regdNo:{
        type:String,
        required:[true,"No regdno specified"]
    },
})

export default mongoose.models.CCUser || mongoose.model("CCUser",fruitSchema)


