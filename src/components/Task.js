import React from 'react'
import {useState} from 'react'
import InvTask from './InvTask'

const Task=({tasks,onDelete,onToggle})=>{


  return (
    <>
     {tasks.map((task)=>(
       <InvTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
       
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