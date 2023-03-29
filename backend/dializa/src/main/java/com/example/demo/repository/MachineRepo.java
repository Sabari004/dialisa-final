package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Machine;

public interface MachineRepo extends JpaRepository<Machine,Integer>{

	List<Machine> findByLabId(int id);


}
