package com.testhive.backend.controller;

import com.testhive.backend.model.Question;
import com.testhive.backend.model.Test;
import com.testhive.backend.repository.QuestionRepository;
import com.testhive.backend.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "http://localhost:5173")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepo;

    @Autowired
    private TestRepository testRepo;

    // Add a question to a test
    @PostMapping("/add/{testId}")
    public String addQuestion(@PathVariable Long testId, @RequestBody Question question) {
        Test test = testRepo.findById(testId).orElse(null);
        if (test == null)
            return "❌ Test not found!";
        question.setTest(test);
        questionRepo.save(question);
        return "✅ Question added!";
    }

    // Get all questions of a test
    @GetMapping("/by-test/{testId}")
    public List<Question> getQuestionsByTest(@PathVariable Long testId) {
        Test test = testRepo.findById(testId).orElse(null);
        if (test == null)
            return List.of();
        return questionRepo.findByTest(test);
    }

    // Delete a question
    @DeleteMapping("/delete/{id}")
    public String deleteQuestion(@PathVariable Long id) {
        questionRepo.deleteById(id);
        return "✅ Question deleted";
    }

    // Update a question
    @PutMapping("/update/{id}")
    public String updateQuestion(@PathVariable Long id, @RequestBody Question updated) {
        return questionRepo.findById(id).map(q -> {
            q.setQuestionText(updated.getQuestionText());
            q.setOptionA(updated.getOptionA());
            q.setOptionB(updated.getOptionB());
            q.setOptionC(updated.getOptionC());
            q.setOptionD(updated.getOptionD());
            q.setCorrectAnswer(updated.getCorrectAnswer());
            questionRepo.save(q);
            return "✅ Question updated";
        }).orElse("❌ Question not found!");
    }
}
