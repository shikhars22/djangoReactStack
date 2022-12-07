import './index.css';
// import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/definition' element={<Definition />} />
          <Route path='/dictionary' element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App;
