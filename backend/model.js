import mongoose, { model } from "mongoose";

// Schema creation
let empSchema = mongoose.Schema({
    ename:String,
    eage:Number,
    esalary:Number
})

// let studentModel = mongoose.model('CollectionName', schemaName)
let empModel = mongoose.model('employee', empSchema)

export default empModel;