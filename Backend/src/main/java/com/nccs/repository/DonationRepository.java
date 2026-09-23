package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long>{

}