import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUrl } from '../shared';

export default function useFetch(url, { method, headers, body } = {}) {
	const [data, setData] = useState();

	const [errorStatus, setErrorStatus] = useState();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// console.log(method, headers, body);
		fetch(url, {
			method: method,
			headers: headers,
			body: body,
		})
			.then((response) => {
				if (response.status === 401) {
					navigate(loginUrl, {
						state: {
							previousUrl: location.pathname,
						},
					});
				}
				if (response.status === 404) {
					throw response.status;
				}
				if (!response.ok) {
					throw response.status;
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((e) => {
				setErrorStatus(e);
			});
	}, []);

	return { data, setData, errorStatus };
}
