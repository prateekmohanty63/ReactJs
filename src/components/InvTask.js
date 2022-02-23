import {FaTimes} from 'react-icons/fa' 

const InvTask=({task,onDelete,onToggle})=>{
    return (
        <div className='task' onDoubleClick={()=>onToggle(task.id)}>
         <h3>{task.text}{' '} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)} /></h3>
         <h3>{task.day}</h3>
        </div>
    )
}

export default InvTask