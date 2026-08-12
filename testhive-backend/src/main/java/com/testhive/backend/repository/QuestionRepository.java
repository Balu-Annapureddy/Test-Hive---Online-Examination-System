package com.testhive.backend.repository;

import com.testhive.backend.model.Question;
import com.testhive.backend.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByTest(Test test);
}
