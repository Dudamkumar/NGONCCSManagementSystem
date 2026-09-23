package com.nccs.controller;

import org.springframework.web.bind.annotation.*;

import com.nccs.model.Donation;
import com.nccs.repository.DonationRepository;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins="http://localhost:5173")

public class DonationController {

    private final DonationRepository repo;

    public DonationController(DonationRepository repo){
        this.repo = repo;
    }

    @PostMapping
    public Donation saveDonation(@RequestBody Donation donation){
        return repo.save(donation);
    }
}