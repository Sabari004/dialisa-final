package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Shift;
import com.example.demo.repository.ShiftRepo;

@Service
public class ShiftService{
	@Autowired
	ShiftRepo service;
	public List<Shift> getShiftss(){
		return service.findAll();
	}
	public Optional<Shift> getLabById(int id){
		return service.findById(id);
	}
	public String addShift(Shift d) {
		service.save(d);
		return "Shift is added";
	}
	public List<Shift> getLabByLabId(int id) {
		return service.findByLabId(id);
	}
	public List<Shift> getLabByMacId(int id) {
		return service.findByMacId(id);
	}
	public List<Shift> getLabByPatId(int id) {
		return service.findByPatId(id);
	}
}
