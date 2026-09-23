package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.Event;

public interface EventRepository extends JpaRepository<Event, Long>{

}