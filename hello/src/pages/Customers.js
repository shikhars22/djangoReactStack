import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import AddCustomer from '../components/AddCustomer';
import useFetch from '../hooks/UseFetch';
import { apiCustomerUrl, baseUrl, homeCustomersUrl, loginUrl } from '../shared';

export default function Customers() {
	// const [customers, setCustomers] = useState();
	const [show, setShow] = useState(false);
	const navigate = useNavigate('');
	const location = useLocation();
	const [loggedIn, setLoggedIn] = useContext(LoginContext);
	const url = baseUrl + apiCustomerUrl;
	const method = 'GET';
	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + localStorage.getItem('access'),
	};
	const body = '';

	function toggleShow() {
		setShow(!show);
	}

	const { data: { customers } = {}, errorStatus } = useFetch(url, {
		method: method,
		headers: headers,
	});

	useEffect(() => {
		console.log(customers, '....', errorStatus);
	});

	/* useEffect(() => {
		// const url = 'https://httpstat.us/501';
		const url = baseUrl + apiCustomerUrl;

		// console.log('hi SKG');
		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access'),
			},
		})
			.then((response) => {
				// console.log('response received');
				// console.log(response.json())
				if (response.status === 401) {
					setLoggedIn(false);
					navigate(loginUrl, {
						state: {
							previousUrl: location.pathname,
						},
					});
				}
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				setCustomers(data.customers);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []); */

	function NewCustomer(name, industry) {
		/* 	const data = { name: name, industry: industry };

		console.log('inside NewCustomer fn');
		const url = baseUrl + apiCustomerUrl;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access'),
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.status === 401) {
					navigate('/login');
				}
				if (!response.ok) {
					throw new Error('Something went wrong');
				}
				return response.json();
			})
			.then((data) => {
				toggleShow();
				console.log(data);
				setCustomers([...customers, data.customer]);
			})
			.catch((e) => {
				console.log(e.message);
			}); */
	}

	// return <p>Work in Progress</p>;

	return (
		<>
			<h1>Here are the customers</h1>
			{customers ? (
				<div>
					<div className='flex flex-wrap'>
						{customers.map((customer) => {
							return (
								<div key={customer.id}>
									<Link
										className='no-underline'
										to={'/customers/' + customer.id}>
										<button
											className='m-2 p-8 max-w-sm min-w-sm 
					bg-white rounded-xl shadow-lg space-y-2
					sm:py-4 sm:flex sm:items-center sm:space-y-0 
					sm:space-x-6 border-b-4 border-purple-700 hover:border-purple-500'
											//className='m-2 bg-purple-500 hover:bg-purple-400
											// text-white font-bold py-2 px-4 border-b-4
											//border-purple-700 hover:border-purple-500 rounded'
											form='customer'>
											<div
												className='text-center space-y-2 
											sm:text-left'>
												<div className='space-y-0.5'>
													<p
														className='text-lg text-black 
													font-semibold'>
														{customer.name}
													</p>
													<p className='text-slate-500 font-medium'>
														{customer.industry}
													</p>
												</div>
											</div>
											{/* {customer.id +
												' : ' +
												customer.name +
												' : ' +
												customer.industry} */}
										</button>
									</Link>
									<br />
									<br />
									{/* {customer.industry} */}
								</div>
							);
						})}
					</div>
					{/* <div>
						<AddCustomer
							NewCustomer={NewCustomer}
							show={show}
							toggleShow={toggleShow}
						/>
					</div> */}
				</div>
			) : null}
		</>
	);
}
