import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/404";
import { Button } from "bootstrap";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition(){

    const [word, setWord] = useState('');
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    let { search } = useParams();

    useEffect(() => {
        // const url = 'https://httpstat.us/501';
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
        .then((response) => {
            // console.log(response.status)
            if (response.status === 404){
                setNotFound(true);
            }
            else if (response.status === 401){
                navigate('/login');
            }

            if (!response.ok){
                setError(true);
                throw new Error('Something went wrong');
            }

            return response.json()
        })
        .then((data) => {
            setWord(data[0].meanings)
        })
        .catch((e) => {
            console.log(e.message);
        });
    });

    if (notFound === true){
        return (
            <>
                <NotFound />
                <br/><br/>
                <Link to='/dictionary'>
                    Search another
                </Link>
            </>
        )
    }
    if (error === true){
        return (
            <>
                <p>Something went wrong, try again?</p>
                <br/><br/>
                <Link to='/dictionary'>
                    Search another
                </Link>
            </>
        )
    }

    return (
        <>
            {word ? 
            <> 
                <h1>
                    Here is the definition
                </h1> 
                {word.map((meaning) => {
                return (
                    <p key={uuidv4()}>
                        {meaning.partOfSpeech + ' : '}
                        {meaning.definitions[0].definition}
                    </p>
                )})}
                <br/>
                <p>
                    <h6>You can search another word</h6>
                    <DefinitionSearch />
                </p>
                <br/>
                <button 
                    className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
                    onClick={() => {
                    navigate('/dictionary/')
                }}>
                    Go back to dictionary
                </button>
            </> : null}
        </>
    )
}