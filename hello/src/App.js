import './App.css';
import Employee from './components/Employee';


function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <Employee name="Shikhar" role="CEO" />
      <Employee name="Shireesh" role="Intern" />
      <Employee name="Rufo"/>
      </>
    :
    <p>You cannot see the employees</p>
    }
    </div>
  );
}

export default App;
