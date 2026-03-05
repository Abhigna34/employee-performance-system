package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Task;
import com.employee.repository.TaskRepository;

@Service
public class PerformanceService {

    @Autowired
    private TaskRepository taskRepository;

    public double calculatePerformance(Long employeeId) {

        List<Task> tasks = taskRepository.findAll();

        int totalTasks = 0;
        int completedTasks = 0;

        for (Task task : tasks) {

            if (task.getEmployee() != null &&
                task.getEmployee().getId().equals(employeeId)) {

                totalTasks++;

                if ("Completed".equalsIgnoreCase(task.getStatus())) {
                    completedTasks++;
                }
            }
        }

        if (totalTasks == 0) {
            return 0;
        }

        return (completedTasks * 100.0) / totalTasks;
    }
}