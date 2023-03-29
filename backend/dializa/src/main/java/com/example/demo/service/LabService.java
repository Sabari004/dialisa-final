package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Lab;
import com.example.demo.repository.LabRepo;

@Service
public class LabService{
	@Autowired
	LabRepo service;
	public List<Lab> getLabs(){
		return service.findAll();
	}
	public Optional<Lab> getLabById(int id){
		return service.findById(id);
	}
	public String addLab(Lab d) {
		service.save(d);
		return "Lab is added";
	}
	public List<Lab> getLabByLocation(String id) {
		return service.findByLabLocation(id);
	}
	
}
