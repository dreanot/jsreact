import React, { useState } from "react"; 
import Result from "Result"; 
  
function App() { 
  const [studentData, setStudentData] = useState(null); 
  
  const [name, setName] = useState(""); 
  const [marks1, setMarks1] = useState(""); 
  const [marks2, setMarks2] = useState(""); 
  const [marks3, setMarks3] = useState(""); 
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
  
    const total = 
      Number(marks1) + Number(marks2) + Number(marks3); 
    const percentage = total / 3; 
  
    let grade = ""; 
    if (percentage >= 90) grade = "A"; 
    else if (percentage >= 75) grade = "B"; 
    else if (percentage >= 60) grade = "C"; 
    else grade = "D"; 
  
    setStudentData({ 
      name, 
      total, 
      percentage, 
      grade, 
    }); 
  }; 
  
  return ( 
    <div style={{ padding: "20px" }}> 
      <h2>Student Result Management</h2> 
  
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        /> 
        <br /><br /> 
  
        <input 
          type="number" 
          placeholder="Subject 1 Marks" 
          value={marks1} 
          onChange={(e) => setMarks1(e.target.value)} 
          required 
        /> 
        <br /><br /> 
  
        <input 
          type="number" 
          placeholder="Subject 2 Marks" 
          value={marks2} 
          onChange={(e) => setMarks2(e.target.value)} 
          required 
        /> 
        <br /><br /> 
  
        <input 
          type="number" 
          placeholder="Subject 3 Marks" 
          value={marks3} 
          onChange={(e) => setMarks3(e.target.value)} 
          required 
        /> 
        <br /><br /> 
  
        <button type="submit">Calculate Result</button> 
      </form> 
  
      {studentData && <Result data={studentData} />} 
    </div> 
  ); 
} 
  
export default App; 