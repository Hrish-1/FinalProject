package com.demo.elearn.controller;

import com.demo.elearn.model.User;
import com.demo.elearn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user){

        if(!user.equals(null)){
            this.userRepository.save(user);
            return "success";
        }

        return "failure";

    }
    @PostMapping("/login")
    public String login(@RequestBody User u){

        User user = this.userRepository.findByEmailIdAndPassword(u.getEmailId(),u.getPassword());
        if(!user.equals(null))
            return "successfully logged in";
        return "Invalid credentials";
    }
}
