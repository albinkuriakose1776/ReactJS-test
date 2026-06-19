import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ViewEmp = () => {
  let [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/")
      .then((res) => {
        console.log(res);
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteEmp = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3005/${id}`)
      .then((res) => {
        alert(res.data);
        setEmp((prevEmp) => prevEmp.filter((employee) => employee._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let navigate = useNavigate()
  const editEmp =(val)=>{
    navigate('/a',{state:val})
  }
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold mb-6">Employee Details</h1>
      <table className="w-full border border-collapse shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-3">Employee Name</th>
            <th className="border p-3">Employee Age</th>
            <th className="border p-3">Employee Salary</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((val) => {
            return (
              <tr className="border-b">
                <td className="border p-3">{val.ename}</td>
                <td className="border p-3">{val.eage}</td>
                <td className="border p-3">{val.esalary}</td>
                <td className="border p-3">
                  <button
                    onClick={() => {
                      deleteEmp(val._id);
                    }}
                    className="px-4 py-2 bg-red-700 text-white rounded-md"
                  >
                    Delete
                  </button>{" "}
                  <button
                  onClick={()=>{editEmp(val)}}
                  className="px-4 py-2 bg-amber-500 text-white rounded-md">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


export default ViewEmp;





