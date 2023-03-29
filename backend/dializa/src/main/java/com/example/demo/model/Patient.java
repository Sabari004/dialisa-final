package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Patient {
	@Id
	private int patId;
	private String password;
	private int PatientAge;
	private String sex;
	private int patPhNo;
	private String PatientName;
	
	public int getPatId() {
		return patId;
	}

	public void setPatId(int patId) {
		this.patId = patId;
	}

	public String getPatientName() {
		return PatientName;
	}

	public void setPatientName(String patientName) {
		PatientName = patientName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPatientAge() {
		return PatientAge;
	}

	public void setPatientAge(int patientAge) {
		PatientAge = patientAge;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getPatPhNo() {
		return patPhNo;
	}

	public void setPatPhNo(int patPhNo) {
		this.patPhNo = patPhNo;
	}

	
	

	
	

}
