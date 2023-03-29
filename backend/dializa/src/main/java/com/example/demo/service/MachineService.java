package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Machine;
import com.example.demo.model.Shift;
import com.example.demo.repository.MachineRepo;

@Service
public class MachineService{
	@Autowired
	MachineRepo service;
	public List<Machine> getMachines(){
		return service.findAll();
	}
	public String addMachine(Machine d) {
		service.save(d);
		return "Machine is added";
	}
	public List<Machine> getMachineById(int id){
		return service.findByLabId(id);
	}
//	public Optional<Lab> getLabById(int id){
//		return service.findById(id);
//	}
//	public String addLab(Lab d) {
//		service.save(d);
//		return "Lab is added";
//	}
//	public List<Lab> getLabByLocation(String id) {
//		return service.findByLabLocation(id);
//	}
	
}
