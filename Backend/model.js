// Install Mangoose (npm i mongoose)
// Import Mangoose
import mongoose, { model } from "mongoose";

// Schema creation
let studentSchema = mongoose.Schema({
    sname:String,
    sage:Number,
    sdept:String,
})

// let studentModel = mongoose.model('CollectionName', schemaName)
let studentModel = mongoose.model('student', studentSchema)

export default studentModel;