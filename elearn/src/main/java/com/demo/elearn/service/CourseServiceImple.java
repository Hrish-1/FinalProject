package com.demo.elearn.service;

import com.demo.elearn.model.Course;
import com.demo.elearn.model.Problem;
import com.demo.elearn.model.Quiz;
import com.demo.elearn.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImple implements CourseService {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public void addQuiz(List<Quiz> quiz, String courseName) {

        Course course = this.courseRepository.findByCourseName(courseName);

        course.getQuiz().addAll(quiz);

        this.courseRepository.save(course);
    }

    @Override
    public void addProblem(Problem problem, String courseName) {

        Course course = this.courseRepository.findByCourseName(courseName);

        course.getProblem().add(problem);

        this.courseRepository.save(course);
    }

    @Override
    public void addQuizScore(String courseName, String score) {
        Course course = this.courseRepository.findByCourseName(courseName);
        course.getScore().setQuizScore(score);
        this.courseRepository.save(course);
    }

    @Override
    public void addCourse(Course course) {

        this.courseRepository.insert(course);
    }

    @Override
    public List<Course> fetchAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }
}
