package com.testhive.backend.repository;

import com.testhive.backend.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {
}
