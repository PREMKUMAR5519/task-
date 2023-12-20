import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Create from './Create'
import Update from './Update'
import './Home.css'

function Home() {
    const [create,setCreate] =useState(false)
    const [listItem,setListItem]= useState([])
    const [editing,setEditing]=useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=> setListItem(res.data))

    },[])
    const handleDelete =(itemid)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${itemid}`)
        .then(setListItem(listItem.filter((item)=>item.id != itemid)))
    
       }
    const handleAdd=()=>{
        setCreate(true)
    }

  return (
    <div>
        <div className='titlediv' >
            <span className='title' >LIST OF USERS</span>
            <span> <button type="button" id='addbtn' onClick={handleAdd} >add+</button></span>
        </div>
        
        <div>
            <div>
            
             {create?(<Create create={create} setCreate={setCreate} listItem={listItem} setListItem={setListItem}/>):(null)}
            </div>
           <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>  
                    <th>EDIT</th>  
                    <th>DELETE</th>         
                </tr>
            </thead>
            <tbody>
                {listItem.map((item,i)=>(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td> <Link to={`/update/${item.id}`} > <button className="btn btn-warning" >Edit</button></Link> </td>
                        <td><button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger"  >Delete</button></td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
        {/* <Update editing={editing} listItem={listItem} setListItem={setListItem}/> */}
     
    </div>
  )
}

export default Home