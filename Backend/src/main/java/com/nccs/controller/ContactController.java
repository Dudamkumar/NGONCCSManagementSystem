package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.Contact;
import com.nccs.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")

public class ContactController {

    private final ContactRepository repo;

    public ContactController(ContactRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {
        return repo.save(contact);
    }
}