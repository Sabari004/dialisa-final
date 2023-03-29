package com.example.demo.service;


import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepo;

@Service
public class PatientService{
	@Autowired
	PatientRepo service;
	public List<Patient> getPatients(){
		return service.findAll();
	}
	public Optional<Patient> getPatientById(int id){
		return service.findById(id);
	}
	public String addPatient(Patient p) {
		service.save(p);
		return "Patient is added";
	}
	
}