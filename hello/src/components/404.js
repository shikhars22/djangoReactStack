import { useNavigate } from "react-router-dom"

export default function NotFound(){

    const navigate = useNavigate();

    return (
        <>
            <h1>
                The resource you are looking for is not found
            </h1>
            <br/>
            <button 
                className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
                onClick={() => {
                navigate('/dictionary/')
            }}>
                Go back to dictionary
            </button>
        </>
    )
}