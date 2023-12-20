import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Update.css'
import 'react-toastify/dist/ReactToastify.css';




function Update() {
  const {id}=useParams()
  const [values,setValues]=useState([])
{}

useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=> setValues(res.data))
},[])
const handleSubmit=(event)=>{

    event.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
      name:values.name,
      email:values.email
    })
    .then(res=> setValues({...values,name:res.data.name,email:res.data.email}))
    toast.success(`UPDATED Name:${values.name}Email:${values.email}`);
    console.log(values)
    // props.setListItem([...props.listItem,values])
    
    // const filtered = props.lisstItem.map((item)=> item.id===idky)
    // props.setListItem({...props.listItem,id:idky,name:values.name,email:values.email})
    

}

return (
<div className='con' >
  
    <h1>Update User</h1>
    <div >
        <form className='form' onSubmit={handleSubmit}>
        <label >Name :</label><input type="text" name='name' value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})} />
        <label  >Email"</label><input type="text" name='email' value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})} />
        <button type='submit' id='submit'  className='btn btn-primary' >submit</button>
        <ToastContainer />
        </form>
    </div>
    <Link to="/" ><button id='back' className='btn btn-secondary'>Back</button></Link>
</div>
  )
}

export default Update