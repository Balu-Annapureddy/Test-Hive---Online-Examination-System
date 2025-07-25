package com.testhive.backend.controller;

import com.testhive.backend.model.Result;
import com.testhive.backend.model.Test;
import com.testhive.backend.model.User;
import com.testhive.backend.repository.ResultRepository;
import com.testhive.backend.repository.TestRepository;
import com.testhive.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = "http://localhost:5173")
public class ResultController {

    @Autowired
    private ResultRepository resultRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private TestRepository testRepo;

    // Save result (user submits test)
    @PostMapping("/submit")
    public String submitResult(@RequestParam Long userId, @RequestParam Long testId, @RequestParam int score) {
        Optional<User> userOpt = userRepo.findById(userId);
        Optional<Test> testOpt = testRepo.findById(testId);

        if (userOpt.isEmpty() || testOpt.isEmpty())
            return "❌ User or Test not found";

        Result result = new Result();
        result.setUser(userOpt.get());
        result.setTest(testOpt.get());
        result.setScore(score);
        result.setSubmittedAt(LocalDateTime.now());

        resultRepo.save(result);
        return "✅ Result submitted!";
    }

    // View all results
    @GetMapping("/all")
    public List<Result> getAllResults() {
        return resultRepo.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<Result> getResultsByUser(@PathVariable Long userId) {
        return resultRepo.findAll()
                .stream()
                .filter(r -> r.getUser().getId().equals(userId))
                .toList();
    }

    @GetMapping("/api/tests/upcoming")
    public List<Test> getUpcomingTests() {
        return testRepo.findAll();// Filter based on date in real logic
    }

}
