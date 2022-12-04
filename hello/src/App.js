import './App.css';
import Employee from './components/Employee';
import {useState} from 'react'

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
      {showEmployees ? (
      <>
        <input 
          type={"text"} 
          onChange={
            (e) => {
            console.log(e.target.value);
            setRole(e.target.value);
            }
          } 
        />
        <Employee name="Shikhar" role="CEO" />
        <Employee name="Shireesh" role={role} />
        <Employee name="Rufo"/>
      </>
    ) : (
    <p>You cannot see the employees</p>
    )}
    </div>
  );
}

export default App;
