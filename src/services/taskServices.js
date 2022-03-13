import { routes } from "../routes";
import axios from "axios";

const getAllTasks = async () => {
  const response = await axios.get(routes.allTasks);
  return response.data;
};


const postToAllTasks = async (payload) => {
  const response = await axios.post(routes.allTasks, payload);
  return response.data;
};

const patchToAllTasks = async (payload) => {
  if(payload.id){
    const response = await axios.patch(`${routes.allTasks}/${payload.id}`, payload);
    return response.data;
  }
  console.error('ERROR::: Failed to complete patchToAllTasks. Required params missing.')
};
const deleteTask = async (payload) => {
  if(payload.id){
    const response = await axios.delete(`${routes.allTasks}/${payload.id}`, payload);
    return response.data;
  }
  console.error('ERROR::: Failed to complete patchToAllTasks. Required params missing.')
};

export const taskServices = {
  getAllTasks,
  postToAllTasks,
  patchToAllTasks,
  deleteTask
};
