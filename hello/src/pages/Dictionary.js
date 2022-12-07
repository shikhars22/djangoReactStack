import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Definition from "./Definition";

export default function Dictionary(){

    const [word, setWord] = useState('');
    const navigate = useNavigate();

    return(
        <>
            <input  
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                type='text'
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <br/><br/>
            <button 
                className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
                onClick={() => {
                navigate('/definition/' + word, { replace: true })
                console.log('click')
            }}>
                Search
            </button>
        </>
    )
}