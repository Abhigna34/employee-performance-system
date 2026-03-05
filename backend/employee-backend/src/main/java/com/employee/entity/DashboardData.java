package com.employee.entity;

public class DashboardData {

    private int totalEmployees;
    private int totalTasks;
    private int completedTasks;
    private int pendingTasks;
    private double averagePerformance;

    public DashboardData(int totalEmployees, int totalTasks, int completedTasks,
                         int pendingTasks, double averagePerformance) {

        this.totalEmployees = totalEmployees;
        this.totalTasks = totalTasks;
        this.completedTasks = completedTasks;
        this.pendingTasks = pendingTasks;
        this.averagePerformance = averagePerformance;
    }

    public int getTotalEmployees() {
        return totalEmployees;
    }

    public int getTotalTasks() {
        return totalTasks;
    }

    public int getCompletedTasks() {
        return completedTasks;
    }

    public int getPendingTasks() {
        return pendingTasks;
    }

    public double getAveragePerformance() {
        return averagePerformance;
    }
}