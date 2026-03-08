package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.entity.User;
import com.employee.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return authService.register(user);

    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        return authService.login(user.getEmail(), user.getPassword());

    }

}