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

import com.example.demo.model.Shift;
import com.example.demo.service.ShiftService;

@RestController
public class ShiftController{
	@Autowired
	ShiftService repos;
	@CrossOrigin
	@GetMapping("/shift")
	public List<Shift> getLab(){
		return repos.getShiftss();
	}
//	@CrossOrigin
//	@GetMapping("/lab/location/{id}")
//	public List<Lab> get(@PathVariable String id){
//		return repos.getLabByLocation(id);
//	}
//	
//	
	
	@CrossOrigin
	@PostMapping("/shift")
	public String postShift(@RequestBody Shift d) {
		return repos.addShift(d);
	}
	@CrossOrigin
	@GetMapping("/shift/{id}")
	public Optional<Shift> getLabById(@PathVariable int id){
		return repos.getLabById(id);
	}
	@CrossOrigin
	@GetMapping("/shift/labid/{id}")
	public List<Shift> getyLabId(@PathVariable int id){
		return repos.getLabByLabId(id);
	}
	@CrossOrigin
	@GetMapping("/shift/patid/{id}")
	public List<Shift> getyPatId(@PathVariable int id){
		return repos.getLabByPatId(id);
	}
	@CrossOrigin
	@GetMapping("/shift/macid/{id}")
	public List<Shift> getyMacId(@PathVariable int id){
		return repos.getLabByMacId(id);
	}



	
	
}