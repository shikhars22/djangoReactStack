import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Customers() {

    const [customers, setCustomers] = useState();

    useEffect(() => {
        // const url = 'https://httpstat.us/501';
        const url = baseUrl + 'api/customers/';

        console.log('hi SKG')
        fetch(url)
            .then((response) => {
                // console.log('response received');
                // console.log(response.json())
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setCustomers(data.customers);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, [])

    return (
        <>
            {customers ? 
            <> 
                <h1>
                    Here are the customers
                </h1> 
                {customers.map((customer) => {
                return (
                    <p key={customer.id}>
                        <Link to={'/customers/' + customer.id}>
                            {customer.name}
                        </Link>
                        <br/><br/>
                        {/* {customer.industry} */}
                    </p>
                )})}
            </> : null}
        </>
    )
}