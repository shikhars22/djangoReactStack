import './index.css';
import { createContext, useEffect, useState } from 'react';
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
import { apiLoginRefreshUrl, baseUrl } from './shared';
import Register from './pages/Register';

export const LoginContext = createContext();

function App() {
	useEffect(() => {
		function refreshTokens() {
			if (localStorage.refresh) {
				const url = baseUrl + apiLoginRefreshUrl;
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						refresh: localStorage.refresh,
					}),
				})
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						localStorage.access = data.access;
						localStorage.refresh = data.refresh;
						setLoggedIn(true);
					})
					.catch((e) => {
						console.log(e.message);
					});
			}
		}
		const minute = 1000 * 60;
		refreshTokens();
		setInterval(refreshTokens, minute * 3);
	}, []);

	const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

	function changeLoggedIn(value) {
		setLoggedIn(value);
		if (value === false) {
			localStorage.clear();
		}
	}

	return (
		<LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
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
						<Route
							path='/register'
							element={<Register />}
						/>
					</Routes>
				</Header>
			</BrowserRouter>
		</LoginContext.Provider>
	);
}

export default App;
