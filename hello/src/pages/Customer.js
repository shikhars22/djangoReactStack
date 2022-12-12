import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import NotFound from "../components/404";
import { apiCustomerUrl, baseUrl, homeCustomersUrl } from "../shared";

export default function Customer() {

    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();

    const url = baseUrl + apiCustomerUrl + id;

    useEffect(() => {
        // console.log('Test SKg ' + id)
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    // navigate('/404', { replace: true });
                    setNotFound(true);
                }
                return response.json();
            })
            .then((data) => { setCustomer(data.customer); })
            .catch((e) => { console.log(e.message); })
    }, [])

    function deleteCustomer() {
        // console.log('deelting.....');
        const url = baseUrl + apiCustomerUrl + id
            fetch(url, {
                method: 'DELETE', headers: {
            'Content-Type':'application/json'
        } }).then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            navigate(homeCustomersUrl)
        }).catch((e) => {console.log(e)})
    }
    return (
        <div>
            {notFound
                ?
                <>
                    <NotFound />
                    <br/><br/>
                    <p>
                        The customer with id = {id} is not found
                    </p>
                    
                </>
                : null
            }
            {customer
                ? (
                    <div>
                        <p>{customer.id}</p>
                        <p>{customer.name}</p>
                        <p>{customer.industry}</p>
                    </div>
                )
                : null
            }
            <br /><br />
            <button
                className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded' 
                onClick={(e) => {deleteCustomer()}}>
                Delete
            </button>
            <br /><br />
            <Link to={homeCustomersUrl}>
                Go back
            </Link>
        </div>
    )
}