package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}