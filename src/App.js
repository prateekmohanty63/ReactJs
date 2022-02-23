import Header from "./components/Header";
import Task from "./components/Task";
import {useState,useEffect} from 'react'
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([])
  
  // useEffect

  useEffect(()=>{
    const getTasks=async()=>{
      const tasksFromserver=await fetchTasks()
      setTasks(tasksFromserver)
    }
    getTasks()
  },[])  // In this array usually dependices are passed
         /// Such as if user is requried to be registered then we can pass user in this array
  

  // Fetch tasks
  const fetchTasks=async()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()
    console.log(data)

    return data
  }

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
     <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0 ? (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> ):('No Tasks to Show')}
     
    </div>
    
  );
}

export default App;
