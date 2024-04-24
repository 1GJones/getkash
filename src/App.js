import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role,setRole]=useState("dev")
  
  const showEmployees = true;

  return (
    <div className="App">
      
      
      {showEmployees ? (
        <>
        <input type = "text" onChange={(e)=>{
           console.log(e.target.value)
           setRole( e.target.value)
        }}
        />
          <Employee name = "Gamal Jones" role="Boss"/>
          <Employee name = "Jasmine R" role="Boss"/>
          <Employee name = "Carmen" role="Human Resource"/>
          <Employee name = "Lucille" role={role}/>
          <Employee name = "Zachari" role="co-Boss/Intern"/>
          <Employee name = "Julyssa" role="co-Boss/Intern"/>
        
        </>
      ) : (
        <p> You cannot see the employees</p>
      )}
      :
    </div>
  );
}

export default App;
