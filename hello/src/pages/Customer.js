import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NotFound from '../components/404';
import { apiCustomerUrl, baseUrl, homeCustomersUrl } from '../shared';

export default function Customer() {
	const [customer, setCustomer] = useState();
	const [tempCustomer, setTempCustomer] = useState();
	const [notFound, setNotFound] = useState(false);
	const [changed, setChanged] = useState(false);
	const [error, setError] = useState();
	const navigate = useNavigate();
	let { id } = useParams();

	const url = baseUrl + apiCustomerUrl + id;

	useEffect(() => {
		if (!customer) return;
		if (!customer) return;

		// console.log('inside compareCustomer fn')
		// console.log(customer, tempCustomer)
		let equal = true;
		if (
			!(
				(customer.name === tempCustomer.name) &
				(customer.industry === tempCustomer.industry)
			)
		) {
			equal = false;
		}
		if (equal) setChanged(false);
	});

	useEffect(() => {
		// console.log('Test SKg ' + id)
		fetch(url)
			.then((response) => {
				if (response.status === 404) {
					// navigate('/404', { replace: true });
					setNotFound(true);
				}
				if (!response.ok) {
					console.log('response', response);
					throw new Error(
						'Something went wrong.' +
							' Press Cancel and then go back to main customer list'
					);
				}
				return response.json();
			})
			.then((data) => {
				setCustomer(data.customer);
				setTempCustomer(data.customer);
				setError(undefined);
			})
			.catch((e) => {
				console.log(e.message);
				setError(e.message);
			});
	}, []);

	function updateCustomer() {
		console.log('inside update customer');
		const url = baseUrl + apiCustomerUrl + id;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(tempCustomer),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Something went wrong. Press Cancel');
				}
				return response.json();
				// navigate(homeCustomersUrl)
			})
			.then((data) => {
				setCustomer(data.customer);
				setChanged(false);
				console.log(data);
				setError(undefined);
			})
			.catch((e) => {
				console.log('e', e.message);
				setError(e.message);
			});
	}

	function deleteCustomer() {
		// console.log('deelting.....');
		const url = baseUrl + apiCustomerUrl + id;
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Something went wrong');
				}
				navigate(homeCustomersUrl);
			})
			.catch((e) => {
				console.log(e);
				setError(e.message);
			});
	}

	function compareCustomers() {}

	return (
		<div>
			{notFound ? (
				<>
					<NotFound />
					<br />
					<br />
					<p>The customer with id = {id} is not found</p>
				</>
			) : null}
			{customer ? (
				<div className='flex justify-left'>
					<ul>
						<input
							type={'text'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={tempCustomer.id}
						/>
						<input
							type={'text'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={tempCustomer.name}
							onChange={(e) => {
								setTempCustomer({
									...tempCustomer,
									name: e.target.value,
								});
								console.log(e.target.value);
								setChanged(true);
							}}
						/>
						<input
							type={'text'}
							className='m-2 block shrink min-w-0 bg-gray-300 
                                appearance-none border-2 border-gray-300 
                                rounded w-full py-2 px-4 text-gray-700 
                                leading-tight focus:outline-none 
                                focus:bg-white focus:border-purple-500'
							value={tempCustomer.industry}
							onChange={(e) => {
								setTempCustomer({
									...tempCustomer,
									industry: e.target.value,
								});
								console.log(e.target.value);
								setChanged(true);
							}}
						/>
					</ul>

					{changed ? (
						<p>
							<div className='flex'>
								<br />
								<br />
								<button
									className='m-2 bg-purple-500 hover:bg-purple-400 
                text-white font-bold py-2 px-4 border-b-4 
                border-purple-700 hover:border-purple-500 rounded'
									onClick={() => {
										setTempCustomer({ ...customer });
										setError(undefined);
									}}>
									Cancel
								</button>
								<button
									className='m-2 bg-purple-500 hover:bg-purple-400 
                text-white font-bold py-2 px-4 border-b-4 
                                        border-purple-700 hover:border-purple-500 rounded'
									onClick={updateCustomer}>
									Save
								</button>
							</div>
						</p>
					) : null}
					<br />
					<br />
					<button
						className='bg-purple-500 hover:bg-purple-400 
                text-white font-bold py-2 px-4 border-b-4 
                border-purple-700 hover:border-purple-500 rounded'
						onClick={(e) => {
							deleteCustomer();
						}}>
						Delete
					</button>
				</div>
			) : null}
			{error ? <p>{error}</p> : null}
			<br />
			<br />
			<Link to={homeCustomersUrl}>Go back</Link>
		</div>
	);
}
