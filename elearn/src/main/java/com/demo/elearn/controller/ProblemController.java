package com.demo.elearn.controller;

import com.demo.elearn.model.Problem;
import com.demo.elearn.repository.CourseRepository;
import com.demo.elearn.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/problem")
public class ProblemController {

    @Autowired
    CourseService courseService;

    @PostMapping("/add/{courseName}")
    public String addProblem(@RequestBody Problem problem, @PathVariable String courseName){

        this.courseService.addProblem(problem,courseName);
        
        return "Success";
    }
}
