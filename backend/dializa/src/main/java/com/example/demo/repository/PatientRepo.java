package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Patient;

public interface PatientRepo extends JpaRepository<Patient,Integer> {

//	Optional<Patient> findByUserName(String id);

}
