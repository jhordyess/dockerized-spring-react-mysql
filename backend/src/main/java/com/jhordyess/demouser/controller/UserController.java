package com.jhordyess.demouser.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jhordyess.demouser.domain.User;
import com.jhordyess.demouser.domain.UserRepository;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = {"http://localhost", "http://localhost:5173"}, methods = {RequestMethod.GET, RequestMethod.POST})
public class UserController {

  private UserRepository userRepository;

  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @GetMapping
  public Iterable<User> findAllUsers() {
    return userRepository.findAll();
  }

  @PostMapping
  public ResponseEntity<String> saveUser(@Validated @RequestBody User user) {
    userRepository.save(user);

    return new ResponseEntity<>("User created successfully", HttpStatus.CREATED);
  }
}