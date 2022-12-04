function Employee (props) {
    return (
        <div className="text-3xl font-bold underline">
            <h1>Employee {props.name}</h1>
            <p>
                {
                    props.role ? props.role
                    :'No role'
                }
            </p>
            <br/>
        </div>
    )
}

export default Employee;