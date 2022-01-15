const addTaskIn_Incomplete = document.querySelector(".addTaskIn_Incomplete");
const addTaskIn_Complete = document.querySelector(".addTaskIn_Complete");
const addIcon = document.querySelector(".add_icon");
const edit_task_details_page_container = document.querySelector(
  ".edit_task_details_page_container"
);
const delete_alert_confirm_container = document.querySelector(
  ".delete_alert_confirm_container"
);

edit_task_details_page_container.style.display = "none";
delete_alert_confirm_container.style.display = "none";

const taskIncompleteDOM = (data) => {
  return `<div class='taskIncomplete_Container'>
            <div class='taskIncomplete'>
                <div class='inputValue_container'>
                  <div class='inputValue'>${data.taskTitle}</div>
                </div>  
                <div class='select_button'>
                  <button
                    id='finish'
                    class='button_finish_start'
                    onclick='finishButtonClick(event)'
                    data-taskId=${data.id}
                  >
                    Finish
                  </button>
                  <i 
                    id='edit_option' 
                    class='fa fa-edit'
                    onclick='editClick(event)'
                    data-taskId=${data.id}
                    data-taskValue=${data.taskTitle}></i>
                  <i 
                    id='delete_option' 
                    class='fa fa-trash-o'
                    onclick='deleteClick(event)'
                    data-taskId=${data.id}></i>
                </div>
              </div>
          </div>`;
};

const taskCompleteDOM = (data) => {
  return `<div class='taskComplete_Container'>
            <div class='taskComplete'>
              <div class='inputValue_container' >
                <div class='inputValue' >${data.taskTitle}</div>
              </div>
              <div class='select_button'>
                <button
                  id='start'
                  class='button_finish_start'
                  onclick='startButtonClick(event)'
                  data-taskId=${data.id}
                >
                  Start
                </button>
                <i 
                  id='edit_option' 
                  class='fa fa-edit'
                  onclick='editClick(event)'
                  data-taskId=${data.id}
                  data-taskValue=${data.taskTitle}></i>
                <i 
                  id='delete_option' 
                  class='fa fa-trash-o'
                  onclick='deleteClick(event)'
                  data-taskId=${data.id}></i>
              </div>
            </div>
          </div>`;
};

const noTaskWarning = () => {
  return  `<h5 class="noTaskWarning">No task yet</h5>`;
};


// WINDOW DOM-CONTENT 
// [get method]
const getFunction = () => {
  axios
  .get("http://localhost:3000/allTasks")
  .then(function (response) {
    const responses = response.data;

    if (responses.length===0) {
      addTaskIn_Incomplete.innerHTML = noTaskWarning();
    }
    
    responses.forEach((data) => {
      if (data.isComplete === false) {
        addTaskIn_Incomplete.innerHTML += taskIncompleteDOM(data);
      }
      else if (data.isComplete === true) {
        addTaskIn_Complete.innerHTML += taskCompleteDOM(data);
      }    
    });
  })
};
window.addEventListener("DOMContentLoaded", getFunction);



// TEXT TODO TASK
// [post method]
const postFunction = (data) => {
  const inputTaskTitle = document.querySelector(".input_task_title");
  if (inputTaskTitle.value) {
    axios
      .post("http://localhost:3000/allTasks", {
        taskTitle: inputTaskTitle.value,
        isComplete: false,
      })
  }
};
addIcon.addEventListener("click", postFunction);

// START BUTTON 
// [patch method]
const startButtonClick = (event) => {
  var idClickValue = event.target.getAttribute("data-taskId");
  const inputValue = document.querySelector(".inputValue");
  axios
    .patch("http://localhost:3000/allTasks/" + idClickValue, {
      taskTitle: inputValue.value,
      isComplete: false,
    })
};

// FINISH BUTTON 
// [patch method]
const finishButtonClick = (event) => {
  var idClickValue = event.target.getAttribute("data-taskId");
  const inputValue = document.querySelector(".inputValue");
  axios
    .patch("http://localhost:3000/allTasks/" + idClickValue, {
      taskTitle: inputValue.value,
      isComplete: true,
    })
};

// EDIT BUTTON
const editClick = (event) => {
  var taskEditValue = event.target.getAttribute("data-taskValue");
  var idClickValue = event.target.getAttribute("data-taskId");

  edit_task_details_page_container.innerHTML = `<div class="edit_task_details_page">
          <div class="edit_header_body">
            <div class="edit_task_details_header">Edit Task Details</div>
            <div class="edit_task_details_body">
              <div class="input_task">
                <div class="task_title">Task Title</div>
                <input type="text" class="edit_inputTaskValue" 
                 value="${taskEditValue}" />
              </div>

              <div class="select_task_options">
                <p class="title_status_header">Title Status</p>
                <div class="select_task">
                  <div class="option_completed">
                    <input
                      type="radio"
                      id="radio_completed"
                      name="select"
                      value="Completed"
                      data-taskId=${idClickValue}
                    />
                      <label for="radio_completed">completed</label>
                  </div>
                  <div class="option_incomplete">
                    <input
                      type="radio"
                      id="radio_incomplete"
                      name="select"
                      value="Incomplete" 
                    />
                      <label for="radio_incomplete">incomplete</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="edit_cancel_update">
            <button id="edit_cancel">Cancel</button>
            <button id="edit_update" data-taskId=${idClickValue} onclick="editFunction(event)">
            Update</button>
          </div>
    </div>`;

  edit_task_details_page_container.style.display = "block";
};

// [patch method]
const editFunction = (event) => {
  const edit_inputTaskValue = document.querySelector(".edit_inputTaskValue");
  var idClickValue = event.target.getAttribute("data-taskId");
  if (edit_inputTaskValue.value) {
    if (document.getElementById("radio_completed").checked == true) {  
      axios
      .patch("http://localhost:3000/allTasks/" + idClickValue, {
        taskTitle: edit_inputTaskValue.value,
        isComplete: true,
      });
    } else if (document.getElementById("radio_incomplete").checked == true) {
      axios.patch("http://localhost:3000/allTasks/" + idClickValue, {
        taskTitle: edit_inputTaskValue.value,
        isComplete: false,
      });
    }
  }
};

// TO CANCEL THE EDIT PROMPT
window.addEventListener("mouseup", function (event) {
  const edit_cancel = document.getElementById("edit_cancel");
  if (event.target == edit_task_details_page_container) {
    edit_task_details_page_container.style.display = "none";
  } else if (event.target == edit_cancel) {
    edit_task_details_page_container.style.display = "none";
  }
});

// DELETE BUTTON 
// [delete method]
const deleteClick = (event) => {
  var idClickValue = event.target.getAttribute("data-taskId");
  delete_alert_confirm_container.style.display = "block";

  // TO CANCEL THE DELETE PROMPT
  window.addEventListener("mouseup", function (event) {
    const delete_alert_confirm_container = document.querySelector(
      ".delete_alert_confirm_container"
    );
    const confirm_cancel = document.getElementById("confirm_cancel");
    if (event.target == delete_alert_confirm_container) {
      delete_alert_confirm_container.style.display = "none";
    } else if (event.target == confirm_cancel) {
      delete_alert_confirm_container.style.display = "none";
    }
  });

  // DELETE CONFIRMATION
  // [delete method]
  const confirm_delete = document.getElementById("confirm_delete");
  confirm_delete.addEventListener("click", function () {
    axios
      .delete("http://localhost:3000/allTasks/" + idClickValue)
      .then(() => {
        addTaskIn_Incomplete.innerHTML = "";
      })
      .catch(function (error) {
        addTaskIn_Incomplete.innerHTML = error;
      });
  });
};
