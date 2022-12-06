import { useState, useEffect } from "react"

export default function Dictionary(){

    const [word, setWord] = useState();
    
    useEffect(() => {
        console.log('State Updated: ', word);
    });

    return(
        <>
            <input
                type='text'
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <h1>Lets get the definition of {word} </h1>
        </>
    )
}