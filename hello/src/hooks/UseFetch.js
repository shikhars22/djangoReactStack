import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUrl } from '../shared';

export default function useFetch(url, { method, headers, body } = {}) {
	const [data, setData] = useState();

	const [errorStatus, setErrorStatus] = useState();
	const navigate = useNavigate();
	const location = useLocation();

	function request() {
		// console.log(method, headers, body);
		fetch(url, {
			method: method,
			headers: headers,
			// body: body,
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
	}

	function appendData(newData) {
		// console.log('inside new data', newData);
		fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(newData),
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
				// console.log('response is -->', response);
				return response.json();
			})
			.then((d) => {
				const submitted = Object.values(d)[0];
				// console.log('in the ......', submitted);
				// console.log(data);
				const newState = { ...data };
				Object.values(newState)[0].push(submitted);
				setData(newState);
			})
			.catch((e) => {
				// console.log(e);
				setErrorStatus(e);
			});
	}

	return { request, appendData, data, errorStatus };
}
