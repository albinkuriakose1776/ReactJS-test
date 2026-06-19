import express from 'express'
import "./db.js"
import empModel from './model.js'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", async(req, res)=> {
    let employees = await empModel.find()
    res.send(employees)
})

app.post("/", (req, res) => {
    empModel(req.body).save()
    res.send("Employee Data added") 
})

app.delete("/:id",async(req, res)=> {
    await empModel.findByIdAndDelete(req.params.id)
    res.send("Emoployee Data deleted")
})

app.put('/:id', async(req, res)=> {
    let updateEmployee= await empModel.findByIdAndUpdate(req.params.id, req.body)
    res.send("Employee Data Updated")
})

let port = 3005

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})