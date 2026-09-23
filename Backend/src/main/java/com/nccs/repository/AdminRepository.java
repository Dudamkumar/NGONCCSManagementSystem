package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

 Admin findByUsername(String username);

}