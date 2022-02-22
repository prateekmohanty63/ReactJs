import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const name='Prateek'
  const x=true
  return (
    <div className="container">
     <Header title='Task Tracker' />
     <Task/>
    </div>
    
  );
}

export default App;
