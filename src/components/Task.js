import React from 'react'

const tasks=[
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        remainder=true
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1:30pm',
        remainder=true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        remainder=false
    }
]

function Task() {
  return (
    <div>Task</div>
  )
}

export default Task