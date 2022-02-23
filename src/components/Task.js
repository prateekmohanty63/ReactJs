import React from 'react'
import {useState} from 'react'

const Task=()=>{
  const [tasks,setTasks]=useState([

    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        remainder:false
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1:30pm',
        remainder:false
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        remainder:false
    },
]

  )

  return (
    <>
     {tasks.map((task)=>(
       <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}




// const tasks=[
//     {
//         id:1,
//         text:'Doctors Appointment',
//         day:'Feb 5th at 2:30pm',
//         remainder:false
//     },
//     {
//         id:2,
//         text:'Meeting at School',
//         day:'Feb 6th at 1:30pm',
//         remainder:false
//     },
//     {
//         id:3,
//         text:'Food Shopping',
//         day:'Feb 5th at 2:30pm',
//         remainder:false
//     }
// ]




export default Task