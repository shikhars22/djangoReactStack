import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import NotFound from "../components/404";
import { baseUrl } from "../shared";

export default function Customer() {

    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    // const navigate = useNavigate();
    let { id } = useParams();

    const url = baseUrl + '/api/customers/' + id;

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
            <br/><br/>
            <Link to='/customers'>
                Go back
            </Link>
        </div>
    )
}