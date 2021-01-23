package com.demo.elearn.controller;

import com.demo.elearn.model.Course;
import com.demo.elearn.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {

    @Autowired
    CourseService courseService;

    @PostMapping("/add")
    public String addCourse(@RequestBody Course course){

        courseService.addCourse(course);
        return "Success";

    }

    @GetMapping("/get")
    public List<Course> fetchAllCourses(){

        return courseService.fetchAllCourses();
    }
    @DeleteMapping("/delete/{id}")
    public void deleteCourse(@PathVariable String id){
        this.courseService.deleteCourse(id);
    }
}
