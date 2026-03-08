package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employee.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}