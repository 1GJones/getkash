function Employee(className){
  
    return( 
    <>
    <h3>Employee{className.name}</h3>
    {className.role ?<p class ="role" > 
    {className.role}</p> : <p class = "norole">No Role</p>}
    
    
    </>
)
}
export default Employee;