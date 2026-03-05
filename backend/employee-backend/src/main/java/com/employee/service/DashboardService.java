package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.entity.Task;
import com.employee.repository.EmployeeRepository;
import com.employee.repository.TaskRepository;
import com.employee.entity.DashboardData;

@Service
public class DashboardService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TaskRepository taskRepository;

    public DashboardData getDashboardData() {

        List<Employee> employees = employeeRepository.findAll();
        List<Task> tasks = taskRepository.findAll();

        int totalEmployees = employees.size();
        int totalTasks = tasks.size();
        int completedTasks = 0;

        for (Task task : tasks) {
            if ("Completed".equalsIgnoreCase(task.getStatus())) {
                completedTasks++;
            }
        }

        int pendingTasks = totalTasks - completedTasks;

        double averagePerformance = 0;

        if (totalTasks > 0) {
            averagePerformance = (completedTasks * 100.0) / totalTasks;
        }

        return new DashboardData(
                totalEmployees,
                totalTasks,
                completedTasks,
                pendingTasks,
                averagePerformance);
    }
}