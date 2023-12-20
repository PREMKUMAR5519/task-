import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Create.css'

function Create(props) {
    const idd = props.adding


    const [values, setValues] = useState({
        id: Math.random(),
        name: "",
        email: ""

    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`, values)
            .then(res => (setValues({ ...values, name: res.data.name, email: res.data.email })))
        props.setListItem([...props.listItem, values])
        navigate('/')
    }
    const fun = () => {
        props.setCreate(!props.create)



    }
    return (

        <div className='model'>
            <div className='model_container' >
            <div className="consy">
                    <button className='xx' onClick={fun} >X</button>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='container1' >
                            <h1 className='newuser' >NEW USER</h1>
                            <label>Name:</label><input type="text" name='name' onChange={(e) => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div className='container2' >
                            <label>Email:</label><input type="text" name='email' onChange={(e) => setValues({ ...values, email: e.target.value })} />
                        </div>
                        <button className='btn btn-primary' >submit</button> <button className='btn btn-dark' onClick={fun} >close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create