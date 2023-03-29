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

import com.example.demo.model.Machine;
import com.example.demo.service.MachineService;

@RestController
public class MachineController{
	@Autowired
	MachineService repos;
	@CrossOrigin
	@GetMapping("/machine")
	public List<Machine> getLab(){
		return repos.getMachines();
	}
//	@CrossOrigin
//	@GetMapping("/lab/location/{id}")
//	public List<Lab> get(@PathVariable String id){
//		return repos.getLabByLocation(id);
//	}
//	
//	
	@CrossOrigin
	@GetMapping("/machine/labid/{id}")
	public List<Machine> getLabById(@PathVariable int id){
		return repos.getMachineById(id);
	}
	@CrossOrigin
	@PostMapping("/machine")
	public String postLab(@RequestBody Machine d) {
		return repos.addMachine(d);
	}


	
	
}