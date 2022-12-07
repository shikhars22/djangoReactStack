import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { useParams } from "react-router-dom";

export default function Definition(){

    const [word, setWord] = useState('');

    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((response) => response.json())
        .then((data) => {
            setWord(data[0].meanings)
        });
    }, []);

    return (
        <>
            <h2>Here is a definition</h2>
            {word ? word.map((meaning) => {
                return (
                    <p key={uuidv4()}>
                        {meaning.partOfSpeech + ' : '}
                        {meaning.definitions[0].definition}
                    </p>
                )
            }) : 
            <p>
                No data received from the API
            </p>}
        </>
    )
}