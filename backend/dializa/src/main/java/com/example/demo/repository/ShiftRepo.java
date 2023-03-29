package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Shift;

public interface ShiftRepo extends JpaRepository<Shift,Integer>{

	List<Shift> findByLabId(int id);

	List<Shift> findByMacId(int id);

	List<Shift> findByPatId(int id);


}
