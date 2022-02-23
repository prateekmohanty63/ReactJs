import Header from "./components/Header";
import Task from "./components/Task";
import {useState} from 'react'

function App() {

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
  const name='Prateek'
  const x=true

  // Delete Task
const deleteTask=(id)=>{
    console.log('delete',id)
    setTasks(tasks.filter((task)=>task.id !== id))
}

  return (
    <div className="container">
     <Header title='Task Tracker' />
     {tasks.length>0 ? (<Task tasks={tasks} onDelete={deleteTask}/> ):('No Tasks to Show')}
    </div>
    
  );
}

export default App;
