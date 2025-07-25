package com.testhive.backend.controller;

import com.testhive.backend.model.Test;
import com.testhive.backend.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @Autowired
    private TestRepository testRepo;

    // Add a new test
    @PostMapping("/add")
    public String addTest(@RequestBody Test test) {
        testRepo.save(test);
        return "✅ Test added successfully!";
    }

    // Get all tests
    @GetMapping("/all")
    public List<Test> getAllTests() {
        return testRepo.findAll();
    }

    // Edit/update test
    @PutMapping("/edit/{id}")
    public String editTest(@PathVariable Long id, @RequestBody Test updatedTest) {
        return testRepo.findById(id).map(test -> {
            test.setTitle(updatedTest.getTitle());
            test.setDescription(updatedTest.getDescription());
            test.setDuration(updatedTest.getDuration());
            testRepo.save(test);
            return "✅ Test updated successfully!";
        }).orElse("❌ Test not found!");
    }
}
