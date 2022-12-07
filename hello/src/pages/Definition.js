import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/404";
import { Button } from "bootstrap";

export default function Definition(){

    const [word, setWord] = useState('');
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((response) => {
            if (response.status === 404){
                setNotFound(true);
            }
            return response.json()
        })
        .then((data) => {
            setWord(data[0].meanings)
        });
    }, []);

    if (notFound === true){
        return (
            <>
                <NotFound />
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
                <button 
                    className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
                    onClick={() => {
                    navigate('/dictionary/')
                    console.log('click')
                }}>
                    Go back to dictionary
                </button>
            </> : null}
        </>
    )
}