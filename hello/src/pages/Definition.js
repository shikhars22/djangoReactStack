import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NotFound from '../components/404';
import { Button } from 'bootstrap';
import DefinitionSearch from '../components/DefinitionSearch';
import useFetch from '../hooks/UseFetch';

export default function Definition() {
	const navigate = useNavigate();
	let { search } = useParams();

	const {
		request,
		data: [{ meanings: word }] = [{}],
		errorStatus,
	} = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search, {
		method: 'GET',
	});

	useEffect(() => {
		request();
	});

	if (errorStatus === 404) {
		return (
			<>
				<NotFound />
				<br />
				<br />
				<p>The meaning of this word was not found in the dictionary</p>
				<br />
				<Link to='/dictionary'>Search another ?</Link>
			</>
		);
	}
	if (errorStatus) {
		return (
			<>
				<p>Something went wrong, try again?</p>
				<br />
				<br />
				<Link to='/dictionary'>Search another</Link>
			</>
		);
	}

	return (
		<>
			{word ? (
				<>
					<h1>Here is the definition</h1>
					{word.map((meaning) => {
						return (
							<p key={uuidv4()}>
								{meaning.partOfSpeech + ' : '}
								{meaning.definitions[0].definition}
							</p>
						);
					})}
					<br />
					<h6>You can search another word</h6>
					<div>
						<DefinitionSearch />
					</div>
					<br />
					<button
						className='bg-purple-500 hover:bg-purple-400 
						text-white font-bold py-2 px-4 border-b-4 
						border-purple-700 hover:border-purple-500 rounded'
						onClick={() => {
							navigate('/dictionary/');
						}}>
						Go back to dictionary
					</button>
				</>
			) : null}
		</>
	);
}
