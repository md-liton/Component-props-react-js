import React from 'react'

const Students = (props) => {
    const {name,id}=props.students
  return (
    <div style={{background:'#0C356A',borderRadius:'10px',padding:'10px',marginTop:'5px',color:'#fff'}}>
        <h1>Name: {name}</h1>
        <p>Id: {id} </p>
    </div>
  )
}

export default Students