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
  return (
    <div className="container">
     <Header title='Task Tracker' />
     <Task tasks={tasks}/>
    </div>
    
  );
}

export default App;
