import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
function App() {
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'Shikhar',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg',
      },
      {
        id: 2,
        name: 'Ramesh',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
      },
      {
        id: 3,
        name: 'Rufo',
        role: 'Pet',
        img: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg',
      },
      {
        id: 4,
        name: 'Archana',
        role: 'Architect',
        img: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg',
      },
      {
        id: 5,
        name: 'Jatayu',
        role: 'Investor',
        img: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg',
      },
      {
        id: 6,
        name: 'Suresh',
        role: 'Witness',
        img: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg',
      },
    ]
  );
  
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return {...employee, name: newName, role: newRole}
      }

      return employee;
    });
    setEmployees(updatedEmployees)
  }

  return (
    <div className="App">
      {showEmployees ? (
      <>
        <div className='flex flex-wrap'>
          {employees.map((employee) => {
            return(
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
    <p>You cannot see the employees</p>
    )}
    </div>
  );
}

export default App;
