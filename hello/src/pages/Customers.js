import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { apiCustomerUrl, baseUrl } from "../shared";

export default function Customers() {

    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show)
    }

    useEffect(() => {
        // const url = 'https://httpstat.us/501';
        const url = baseUrl + apiCustomerUrl;

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

    function NewCustomer(name, industry) {
        
        const data = { name: name, industry: industry }
        
        console.log('inside NewCustomer fn');
        const url = baseUrl + apiCustomerUrl;
        
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                return response.json();
            })
            .then((data) => {
                toggleShow();
                console.log(data);
                setCustomers([...customers, data.customer]);
            })
            .catch((e) => {console.log(e.message)});
    }

    return (
        <>
            {customers ? 
            <> 
                <h1>Here are the customers</h1>
                <ul>
                    {customers.map((customer) => {
                        return (
                            <li key={customer.id}>
                                <Link to={'/customers/' + customer.id}>
                                    {customer.id + ' : ' + customer.name + ' : ' + customer.industry}
                                </Link>
                                <br /><br />
                                {/* {customer.industry} */}
                            </li>
                        );
                    })}
                </ul>
                <AddCustomer
                    NewCustomer={NewCustomer}
                    show={show}
                    toggleShow={toggleShow}
                />
            </> : null}
        </>
    )
}