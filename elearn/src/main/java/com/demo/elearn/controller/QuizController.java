package com.demo.elearn.controller;

import com.demo.elearn.model.Course;
import com.demo.elearn.model.Quiz;
import com.demo.elearn.repository.CourseRepository;
import com.demo.elearn.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
   CourseService courseService;

    @PostMapping("/add/{name}")
    public void addQuiz(@RequestBody List<Quiz> quiz, @PathVariable String name){

        courseService.addQuiz(quiz,name);
    }

    @PostMapping("/score/{name}")
    public void addQuizScore(@PathVariable String name,@RequestBody String score){

        courseService.addQuizScore(name,score);
    }

}
