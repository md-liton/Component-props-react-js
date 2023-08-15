import React from 'react'
import Custom from '../Custom/Custom'
import Peoplecustom from '../Peoplecustom/Peoplecustom'
import Students from '../Students/Students'

const User = () => {
    const details = [
      {
        name:'liton',
        id: '100'
      },
      {
        name:'sunny',
        id: '55'
      },
      {
        name:'ohi',
        id: '18'
      }
    ]
    const person = [
      {
          name:'sunny',
          id:'11'
      },
      {
          name:'sajjad',
          id:'12'
      },
      {
          name:'rakib',
          id:'13'
      }
  ]

  const students =[
    {
      name:'kader',
      id:'51'
    },
    {
      name:'tuhin',
      id:'51'
    },
    {
      name:'shuvo',
      id:'51'
    }
  ]
  return (
    <>
    {
      details.map((item) => <Custom liton={item}></Custom>
      )
    }
    {
      person.map((personitem)=> <Peoplecustom peoples={personitem}></Peoplecustom>)
    }
    {
      students.map((studentsitem)=> <Students students={studentsitem}></Students>)
    }
    </>
  )
}

export default User