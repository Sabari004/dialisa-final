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

import com.example.demo.model.Lab;
import com.example.demo.repository.LabRepo;
import com.example.demo.service.LabService;

@RestController
@CrossOrigin(origins =  "*")
public class LabController{
	@Autowired
	LabService repos;
	@Autowired
	LabRepo repo;
	// @CrossOrigin
	@GetMapping("/lab")
	public List<Lab> getLab(){
		return repos.getLabs();
	}
	// @CrossOrigin
	@GetMapping("/lab/location/{id}")
	public List<Lab> get(@PathVariable String id){
		return repos.getLabByLocation(id);
	}
	
	
	// @CrossOrigin
	@GetMapping("/lab/{id}")
	public Optional<Lab> getLabById(@PathVariable int id){
		return repos.getLabById(id);
	}
	// @CrossOrigin
	@PostMapping("/lab/addlab")
	public Lab postLab(@RequestBody Lab d) {
		return repo.save(d);
	}


	
	
}