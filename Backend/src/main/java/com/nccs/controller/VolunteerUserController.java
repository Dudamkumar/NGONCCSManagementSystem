package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.VolunteerUser;
import com.nccs.repository.VolunteerUserRepository;

@RestController
@RequestMapping("/api/volunteer")
@CrossOrigin(origins="http://localhost:5173")

public class VolunteerUserController {

 private final VolunteerUserRepository repo;

 public VolunteerUserController(VolunteerUserRepository repo){
  this.repo = repo;
 }

 @PostMapping("/login")
 public String login(@RequestBody VolunteerUser user){

  VolunteerUser found =
   repo.findByEmailAndPassword(user.getEmail(),user.getPassword());

  if(found != null){
   return "success";
  }else{
   return "invalid";
  }

 }

}