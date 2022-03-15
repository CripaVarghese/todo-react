import React, { useEffect, useState } from "react";
import { taskServices } from "../services/taskServices";
import CompletedTask from "./conditionalTasks/CompletedTask";
import IncompleteTask from "./conditionalTasks/IncompleteTask";
import Warning from "./conditionalTasks/Warning";

function TaskList() {
  const [state, setState] = useState({});

  const getNUpdateAllTasks = async () => {
    const allTasks = await taskServices.getAllTasks();
    let completedTasks = [];
    let inCompleteTasks = [];
    allTasks?.forEach((task) =>
      task.isComplete ? completedTasks.push(task) : inCompleteTasks.push(task)
    );
    setState((currentState) => ({
      ...currentState,
      completedTasks,
      inCompleteTasks,
    }));
  };

  const updateTask = async (payload) => {
    const updatedTask = await taskServices.patchToAllTasks(payload);
    setState((currentState) => ({ ...currentState, updatedTask }));
  };

  const deleteTask = async (payload) => {
    console.log('payload', payload)
    const updatedTask = await taskServices.deleteTask(payload);
    setState((currentState) => ({ ...currentState, updatedTask }));
  };

  const { inCompleteTasks, completedTasks, updatedTask } = state;
  useEffect(getNUpdateAllTasks, [updatedTask]);

  return (
    <div className='task_details_page'>
      <div className='incomplete_task_box'>
        <div className='incomplete_task_list_container'>
          <div className='incomplete_task_list'>Incomplete Tasks</div>
        </div>
        <div className='addTaskIn_Incomplete'>
          {inCompleteTasks?.length ? (
            inCompleteTasks.map((task) =>
              task.isComplete ? null : (
                <IncompleteTask
                  data={task}
                  key={task.id}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                />
              )
            )
          ) : (
            <Warning />
          )}
        </div>
      </div>

      <div className='completed_task_box'>
        <div className='completed_task_list_container'>
          <div className='completed_task_list'>Completed</div>
        </div>
        <div className='addTaskIn_Incomplete'>
          {completedTasks?.length
            ? completedTasks.map((task) =>
              task.isComplete ? (
                <CompletedTask
                  data={task}
                  key={task.id}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                />
              ) : null
            )
            : null}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
