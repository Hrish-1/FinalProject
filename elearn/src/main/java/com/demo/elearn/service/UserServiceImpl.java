package com.demo.elearn.service;

import com.demo.elearn.model.Course;
import com.demo.elearn.model.Quiz;
import com.demo.elearn.model.User;
import com.demo.elearn.repository.CourseRepository;
import com.demo.elearn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CourseRepository courseRepository;

    @Override
    public User fetchUserByEmailId(String id) {
        return this.userRepository.findById(id).get();
    }

    @Override
    public List<User> fetchAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public List<Course> enrolledCourses(String id) {

        User user = this.userRepository.findById(id).get();
        return user.getCourse();
    }

    @Override
    public List<Quiz> fetchQuiz(String name) {

       Course course = this.courseRepository.findByCourseName(name);
        return course.getQuiz();
    }

}
