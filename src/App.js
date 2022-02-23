import Header from "./components/Header";
import Task from "./components/Task";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask,setShowAddTask]=useState(false)
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

// Toggle Remainder
const toggleRemainder=(id)=>{
  console.log(id)
  setTasks(tasks.map((task)=>task.id === id
  ? {...task,remainder:!task.remainder} : task ))
}

// Add  Task
const addTask=(task)=>{
  console.log(task)
  const id=Math.floor(Math.random()*10000)+1;
  console.log(id)

  const newTask={id,...task}
  setTasks([...tasks,newTask])

}

  return (
    <div className="container">
     <Header title='Task Tracker' />
     <AddTask onAdd={addTask}/>
     {tasks.length>0 ? (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> ):('No Tasks to Show')}
     
    </div>
    
  );
}

export default App;
