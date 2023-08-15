import React from 'react'

const Peoplecustom = (props) => {
    const {name ,id}=props.peoples
  return (
    <div style={{background:'green', borderRadius:'10px',padding:'10px',marginTop:'5px',color:'#fff' }}>
        <h1>Name: {name}</h1>
        <p>Id: {id}</p>
    </div>
  )
}

export default Peoplecustom