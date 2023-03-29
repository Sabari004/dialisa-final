package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Machine {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int macId;
	private int labId;
	public int getMacId() {
		return macId;
	}
	public void setMacId(int macId) {
		this.macId = macId;
	}
	public int getLabId() {
		return labId;
	}
	public void setLabId(int labId) {
		this.labId = labId;
	}

}
