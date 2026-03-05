package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.service.PerformanceService;

@RestController
@RequestMapping("/performance")
public class PerformanceController {

    @Autowired
    private PerformanceService performanceService;

    @GetMapping("/{employeeId}")
    public double getEmployeePerformance(@PathVariable Long employeeId) {

        return performanceService.calculatePerformance(employeeId);
    }
}