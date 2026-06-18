import mongoose from "mongoose";

mongoose
    .connect("mongodb://test:test@ac-k85vdyi-shard-00-00.q6qdvxs.mongodb.net:27017,ac-k85vdyi-shard-00-01.q6qdvxs.mongodb.net:27017,ac-k85vdyi-shard-00-02.q6qdvxs.mongodb.net:27017/EmployeeApp?ssl=true&replicaSet=atlas-6q1no2-shard-0&authSource=admin&appName=Cluster0")
    .then((res)=>{console.log("Connected to DB")})
    .catch((err)=>{console.log(err)})