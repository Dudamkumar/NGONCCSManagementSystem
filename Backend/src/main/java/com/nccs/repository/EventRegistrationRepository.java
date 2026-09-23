package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.EventRegistration;

public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {

}