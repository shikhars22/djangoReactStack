import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setemployees] = useState(
    [
      {
        name: 'Shikhar',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg',
      },
      {
        name: 'Shireesh',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
      },
      {
        name: 'Rufo',
        role: 'Pet',
        img: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg',
      },
      {
        name: 'Archana',
        role: 'Architect',
        img: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg',
      },
      {
        name: 'Puneet',
        role: 'Investor',
        img: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg',
      },
      {
        name: 'Abhishek',
        role: 'Witness',
        img: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg',
      },
    ]
  );
  
  return (
    <div className="App">
      {showEmployees ? (
      <>
        <input 
          class="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Input Shireesh's role"
          type={"text"} 
          onChange={
            (e) => {
            console.log(e.target.value);
            setRole(e.target.value);
            }
          } 
        />
        <div className='flex flex-wrap'>
          {employees.map((employee) => {
            console.log(uuidv4());
            return(
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
    <p>You cannot see the employees</p>
    )}
    </div>
  );
}

export default App;
