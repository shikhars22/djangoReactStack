import './index.css';
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
          <Employee name="Shikhar" role="CEO" img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Shireesh" role={role} img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Rufo"  img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg'/>
        
          <Employee name="Shikhar" role="CEO" img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Shireesh" role={role} img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Rufo"  img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg'/>
        
          <Employee name="Shikhar" role="CEO" img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Shireesh" role={role} img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg' />
          <Employee name="Rufo"  img='https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg'/>
        </div>
      </>
    ) : (
    <p>You cannot see the employees</p>
    )}
    </div>
  );
}

export default App;
