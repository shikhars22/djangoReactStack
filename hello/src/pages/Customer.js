import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Customer() {

    const [customer, setCustomer] = useState();
    let { id } = useParams();

    const url = 'http://localhost:8000/api/customers/' + id;

    useEffect(() => {
        console.log('Test SKg ' + id)
        fetch(url)
            .then((response) => {return response.json()})
            .then((data) => {setCustomer(data.customer)})
            .catch((e) => {console.log(e.message)})
    }, [])

    return (
        <>
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
            <Link to='/customers'>
                Go back
            </Link>
        </>
    )
}