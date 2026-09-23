package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.VolunteerUser;
import com.nccs.repository.VolunteerRepository;

@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins="http://localhost:5173")
public class VolunteerController {

 private final VolunteerRepository repo;

 public VolunteerController(VolunteerRepository repo){
  this.repo = repo;
 }

 // REGISTER VOLUNTEER
 @PostMapping("/register")
 public String register(@RequestBody VolunteerUser volunteer){

  repo.save(volunteer);

  return "success";
 }

 // LOGIN VOLUNTEER
 @PostMapping("/login")
 public String login(@RequestBody VolunteerUser volunteer){

  System.out.println("Email: " + volunteer.getEmail());
  System.out.println("Password: " + volunteer.getPassword());

  VolunteerUser found = repo.findByEmailAndPassword(
   volunteer.getEmail().trim(),
   volunteer.getPassword().trim()
  );

  if(found != null){
   return "success";
  }else{
   return "invalid";
  }

 }

}