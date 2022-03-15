import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  
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