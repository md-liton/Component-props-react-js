import React from 'react'


const Custom = (props) => {
    const {name,id}=props.liton
  return (
    <div style={{background :'red', padding:'10px', borderRadius:'10px', marginTop:'5px', color:'#fff'}}>
        <h1>Name: {name}</h1>
        <p>Id:{id}</p>
        </div>
  )
}

export default Custom

