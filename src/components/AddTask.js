import React from 'react'

function AddTask() {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'></input>

            <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day and TIme'></input>
        </div>

        <div className='form-control'>
            <label>set Remainder</label>
            <input type='checkbox' />
        </div>
        </div>
        <input type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask