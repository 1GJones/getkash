import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import myPic from "./images/myPic.jpeg";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

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
      img: "https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg",
    },
    {
      id: 3,
      name: "Carmen Rodriguez",
      role: "Human Resource",
      img: "https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg",
    },
    {
      id: 4,
      name: "Lucille Rodriguez",
      role: "Intern",
      img: "https://images.pexels.com/photos/7394609/pexels-photo-7394609.jpeg",
    },
    {
      id: 5,
      name: "Zachari Jones",
      role: "Human Resource",
      img: "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg",
    },
    {
      id: 6,
      name: "Julyssa Bonds",
      role: "Co-CEO",
      img: "https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg",
    },
  ]);

  function updatedEmployees(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees([updatedEmployees]);
  }
  console.log("updateEmployee inside of app.js");

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

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
                  newEmployee={employee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p> You cannot see the employees</p>
      )}
      :
    </div>
  );
}

export default App;
