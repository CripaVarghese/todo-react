import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import axios from 'axios';
import data from './Db.js';

console.log(data)

function App() {

  const getFunction = () => {
    axios
    .get("http://localhost:3000/")
    .then(function (response) {
      const responses = response.data;
  
      console.log(responses);
    })
  };
  window.addEventListener("DOMContentLoaded", getFunction);
  
  
  


  return ( 
    <div className="todo">

    <div className="card">
    <TaskList />
    <AddTask />


      
  
     

    </div>

</div>  
  );
}
 
 export default App;