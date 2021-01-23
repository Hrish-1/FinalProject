package com.demo.elearn.controller;

import com.demo.elearn.model.User;
import com.demo.elearn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return this.userService.fetchAllUsers();
    }

}
