import './index.css';
// import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/404';
import Customer from './pages/Customer';
import Login from './pages/Login';

function App() {
	return (
		<BrowserRouter>
			<Header>
				<Routes>
					<Route
						path='/employees'
						element={<Employees />}
					/>
					<Route
						path='/customers'
						element={<Customers />}
					/>
					<Route
						path='/customers/:id'
						element={<Customer />}
					/>
					<Route
						path='/404'
						element={<NotFound />}
					/>
					<Route
						path='/*'
						element={<NotFound />}
					/>
					<Route
						path='/dictionary/:search'
						element={<Definition />}
					/>
					<Route
						path='/dictionary'
						element={<Dictionary />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
				</Routes>
			</Header>
		</BrowserRouter>
	);
}

export default App;
