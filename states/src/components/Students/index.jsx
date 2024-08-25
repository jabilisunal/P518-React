import React from "react";
import { useState } from "react";
import "./index.css"

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newStudent = {
            id: new Date().valueOf(),
            fullname: e.target.fullname.value,
            grade: e.target.grade.value,
          };
          e.preventDefault();
          setStudents([...students, newStudent]);
          e.target.fullname.value = "";
          e.target.grade.value = "";
        }}
        action=""
      >
        <input name="fullname" type="text" placeholder="enter fullname" />
        <input
          name="grade"
          type="number"
          min={0}
          step={5}
          placeholder="grade"
        />
        <button>Add</button>
       
      </form>

      <ul>
        <button className="btn" onClick={()=>{
            const sortedStudents = students.sort((x,y)=>x.grade-y.grade);
            setStudents([...sortedStudents]);
        }}>sort by grade</button>

        <button className="btn"
        onClick={()=>{
            const sortedStudents = students.sort((x,y)=>x.fullname.localeCompare(y.fullname));
            setStudents([...sortedStudents])
        }}
        > sort by fullname</button>
        {students &&
          students.map((stu) => (
            <li key={stu.id}>
              {stu.fullname} {stu.grade}
              <button  onClick={()=>{
                setStudents([...students].filter((x)=>x.id !=stu.id))
              }}>delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Students;
