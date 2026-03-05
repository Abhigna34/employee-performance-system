package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employee.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}