import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const getTasks = () => {
  return axios.get(API_URL);
};

export const addTask = (task) => {
  return axios.post(API_URL, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};