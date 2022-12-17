import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NotFound from '../components/404';

export default function useFetch(url) {
	const [data, setData] = useState();

	const [errorStatus, setErrorStatus] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.status === 404) {
					throw response.status;
				}
				if (response.status === 401) {
					navigate('/login');
				}
				if (!response.ok) {
					throw response.status;
					// throw new Error('Something went wrong');
				}
				return response.json();
			})
			.then((data) => {
				if (!errorStatus) {
					setData(data);
				}
				// console.log(data[0].meanings);
			})
			.catch((e) => {
				setErrorStatus(e);
			});
	}, []);

	return [data, errorStatus];
}
