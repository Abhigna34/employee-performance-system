import axios from "axios";

const API_URL = "http://localhost:8080/employees";

export const getEmployees = () => {
  return axios.get(API_URL);
};

export const addEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};