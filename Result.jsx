import React from "react"; 
  
function Result({ data }) { 
  return ( 
    <div style={{ marginTop: "20px" }}> 
      <h3>Result</h3> 
      <p>Name: {data.name}</p> 
      <p>Total Marks: {data.total}</p> 
      <p>Percentage: {data.percentage}%</p> 
      <p>Grade: {data.grade}</p> 
    </div> 
  ); 
} 
  
export default Result;