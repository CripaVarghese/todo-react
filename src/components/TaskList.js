function TaskList() {
    return (
        <div className="task_details_page">

        <div className="incomplete_task_box">
          <div className="incomplete_task_list_container">
            <div className="incomplete_task_list">Incomplete Tasks</div>
          </div>
          <div className="addTaskIn_Incomplete"></div>
        </div>

        <div className="completed_task_box">
          <div className="completed_task_list_container">
            <div className="completed_task_list">Completed</div>
          </div>
          <div className="addTaskIn_Complete"></div>
        </div>

      </div>
    )
    ;
}

export default TaskList;