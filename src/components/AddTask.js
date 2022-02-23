import React from 'react'
import {useState} from 'react'


function AddTask() {

  const [text,setText]=useState('')
  const [day,setDay]=useState('')
  const [reminder,setReminder]=useState(false)

  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e)=>
            
            setText(e.target.value)} />

            <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day and TIme' value={day} onChange={(e)=>
            
            setDay(e.target.value)} />
        </div>

        <div className='form-control form-control-block'>
            <label>set Remainder</label>
            <input type='checkbox' value={reminder} onChange={(e)=>
            
            setReminder(e.currentTarget.checked)} />
        </div>
        </div>
        <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask