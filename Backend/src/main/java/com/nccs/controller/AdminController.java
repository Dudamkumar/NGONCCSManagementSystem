//package com.nccs.controller;
//
//import org.springframework.web.bind.annotation.*;
//
//import com.nccs.model.Admin;
//import com.nccs.repository.AdminRepository;
//
//@RestController
//@RequestMapping("/api/admin")
//@CrossOrigin(origins="http://localhost:5173")
//public class AdminController {
//
// private final AdminRepository repo;
//
// public AdminController(AdminRepository repo){
//  this.repo = repo;
// }
//
// @PostMapping("/login")
// public String login(@RequestBody Admin admin){
//
//  Admin found = repo.findByUsernameAndPassword(
//     admin.getUsername(),
//     admin.getPassword()
//  );
//
//  if(found != null){
//   return "success";
//  }else{
//   return "invalid";
//  }
//
// }
//
//}
package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.Admin;
import com.nccs.repository.AdminRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins="http://localhost:5173")
public class AdminController {

 private final AdminRepository repo;

 public AdminController(AdminRepository repo){
  this.repo = repo;
 }

 @PostMapping("/login")
 public String login(@RequestBody Admin admin){

  Admin found = repo.findByUsername(admin.getUsername());

  if(found != null && found.getPassword().equals(admin.getPassword())){
   return "success";
  }

  return "invalid";
 }
}