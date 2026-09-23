package com.nccs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nccs.model.VolunteerUser;

public interface VolunteerRepository extends JpaRepository<VolunteerUser,Long>{

	 VolunteerUser findByEmailAndPassword(String email,String password);

	}