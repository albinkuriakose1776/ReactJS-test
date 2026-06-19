import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AddEmp = () => {
  let location = useLocation();
  let navigate =useNavigate()
  console.log("loc",location.state)
  var [input, setInput] = useState({
    ename: "",
    eage: "",
    esalary: "",
  });
  useEffect(()=>{
    if(location.state!==null){
      setInput({
        ...input,
        ename:location.state.ename,
        eage:location.state.eage,
        esalary:location.state.esalary
      })
    }
  },[])
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };


  const submitHandler = () => {
    console.log("edit")
   if(location.state!==null){
    axios
      .put(`http://localhost:3005/${location.state._id}`,input)
      .then((res)=>{
        alert(res.data)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
   }else{
     axios
      .post("http://localhost:3005/", input)
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => console.log(err));
   }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-106">
        <h1 className="text-3xl font-bold mb-8">Welcome to Employee App</h1>


        <input
          name="ename"
          onChange={inputHandler}
          value={input.ename}
          type="text"
          placeholder="Employee Name"
          className="w-full border border-gray-500 p-3 rounded-lg mb-4"
        />
        <input
          name="eage"
          onChange={inputHandler}
          value={input.eage}
          type="text"
          placeholder="Employee Age"
          className="w-full border border-gray-500 p-3 rounded-lg mb-4"
        />
        <input
          name="esalary"
          onChange={inputHandler}
          value={input.esalary}
          type="text"
          placeholder="Employee Salary"
          className="w-full border border-gray-500 p-3 rounded-lg mb-6"
        />
        <button
          onClick={submitHandler}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};


export default AddEmp;





