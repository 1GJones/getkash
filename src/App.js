import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import myPic from "./images/myPic.jpeg"
import Zachari from "./images/Zachari.jpeg"

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Gamal Jones",
      role: "CEO",
      img: myPic,
    },
    {
      id: 2,
      name: "Jasmine Rodriguez",
      role: "Co-CEO",
      img: "https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      id: 3,
      name: "Carmen Rodriguez",
      role: "Human Resource",
      img: "https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      id: 4,
      name: "Lucille Rodriguez",
      role: "Intern",
      img: "https://images.pexels.com/photos/7394609/pexels-photo-7394609.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
    {
      id: 5,
      name: "Zachari Jones",
      role: "Human Resource",
      img: Zachari,
    },
    {
      id: 6,
      name: "Julyssa Bonds",
      role: "Co-CEO",
      img: "https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=800/",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }
  console.log("updateEmployee inside of app.js");
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
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
              console.log(employee, employee.id);
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
