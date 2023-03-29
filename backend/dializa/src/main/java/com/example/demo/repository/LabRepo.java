package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Lab;

public interface LabRepo extends JpaRepository<Lab,Integer>{

	List<Lab> findByLabLocation(String id);

}
