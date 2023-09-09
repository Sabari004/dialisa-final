package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepo;
import com.example.demo.service.PatientService;

@RestController
@CrossOrigin
public class PatientController{
	@Autowired
	PatientService repos;
	@Autowired
	PatientRepo  repo;
	@GetMapping("/patient")
	public List<Patient> getPat(){
		return repos.getPatients();
	}
	@GetMapping("/patient/{id}")
	public Optional<Patient> getPatById(@PathVariable int id){
		return repos.getPatientById(id);
	}
	@PostMapping("/patient")
	public Patient postPat(@RequestBody Patient p) {
		return repo.save(p);
	}
	
	
	
}