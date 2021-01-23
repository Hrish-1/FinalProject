package com.demo.elearn.service;


import com.demo.elearn.model.Course;
import com.demo.elearn.model.Problem;
import com.demo.elearn.model.Quiz;

import java.util.List;

public interface CourseService {

    void addQuiz(List<Quiz> quiz, String courseName);
    void addProblem(Problem problem, String courseName);
    void addQuizScore(String courseName,String score);
    void addCourse(Course course);
    List<Course> fetchAllCourses();
    void deleteCourse(String id);

}
