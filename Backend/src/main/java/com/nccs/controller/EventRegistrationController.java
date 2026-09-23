package com.nccs.controller;

import org.springframework.web.bind.annotation.*;
import com.nccs.model.EventRegistration;
import com.nccs.repository.EventRegistrationRepository;

@RestController
@RequestMapping("/api/event-registration")
@CrossOrigin(origins = "http://localhost:5173")
public class EventRegistrationController {

 private final EventRegistrationRepository repo;

 public EventRegistrationController(EventRegistrationRepository repo){
  this.repo = repo;
 }

 @PostMapping
 public String register(@RequestBody EventRegistration reg){

  System.out.println("EVENT REGISTER API CALLED");

  repo.save(reg);

  return "success";
 }
}