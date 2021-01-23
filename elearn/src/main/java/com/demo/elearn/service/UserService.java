package com.demo.elearn.service;

import com.demo.elearn.model.Course;
import com.demo.elearn.model.Quiz;
import com.demo.elearn.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService{

    User fetchUserByEmailId(String id);
    List<User> fetchAllUsers();
    List<Course> enrolledCourses(String id);
    List<Quiz> fetchQuiz(String name);
}
