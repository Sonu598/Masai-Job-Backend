const mongoose=require('mongoose')
const jobSchema=mongoose.Schema({
    Company:String,
    PostedAt:Date,
    City:String,
    location:String,
    Role:String,
    Level:String,
    Position:String,
    Language:String,
    Contract:String
})

const JobModel=mongoose.model('users',Schejobma)

module.exports={
    JobModel
}