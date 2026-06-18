// npm init
// npm i express
// create a index.js file
// Importing the express node 

import express from 'express'
import studentModel from './model.js'
import "./db.js";

const app = express() // Initializing the express to a variable called "app"

// Middleware (To parse the incoming data)
app.use(express.json())

// API
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/n', (req, res) => {
    res.send("HElloOoo")
})

// API to add data to DB
app.post('/', (req, res) => {
    studentModel(req.body).save()
    res.send("Student Data added");
});

app.get("/s", async(req, res)=> {
    let students = await studentModel.find()
    res.send(students)
})

app.delete("/:id",async(req, res)=> {
    await studentModel.findByIdAndDelete(req.params.id)
    res.send("Data deleted")
})

// to update the document in the db
app.put('/:id', async(req, res)=> {
    let updateStudent= await studentModel.findByIdAndUpdate(req.params.id, req.body)
    res.send("Student Data Updated")
})

// Making the server in listening node
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})