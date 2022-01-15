import axios from 'axios';
import data from '../Db';

function AddTask() {

  // TEXT TODO TASK
// [post method]
  const postFunction = () => {
    console.log('j');
    console.log(data.price)
  };

  

    return(
        <div className="add_task_container">
        <div className="add_task">
          <input
            type="text"
            className="input_task_title"
            placeholder="What would you like to do today?"
          />
          <i className="add_icon fa fa-plus-square" onClick={postFunction}></i>
        </div>
      </div>
    );
}

export default AddTask;