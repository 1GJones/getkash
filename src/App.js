import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import{v4 as uuidv4} from "uuid"

function App() {
  const [role, setRole] = useState("");
  const [employees, setEmployees] = useState([
    { 
      name: "Gamal Jones",
      role: "CEO",
      img: "https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      name: "Jasmine Rodriguez",
      role: "Co-CEO",
      img: "https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      name: "Carmen Rodriguez",
      role: "Human Resource",
      img: "https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      name: "Lucille Rodriguez",
      role: [role ],
      img: "https://images.pexels.com/photos/7394609/pexels-photo-7394609.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      name: "Zachari Jones",
      role: "Human Resource",
      img: "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      name: "Julyssa Bonds",
      role: "Co-CEO",
      img: "https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
  ]);
  const className = true;

  return (
    <div className="App">
      {className ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employee,uuidv4());
            return (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
              );
            })}
          </div>
        </>
      ) : (
        <p> You cannot see the employees</p>
      )}
      :
    </div>
  );
}

export default App;
