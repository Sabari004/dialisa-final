package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Lab {
	@Id
	
	private int labId;
	private int price;
    private String password;
	private String labName;
	private String labLocation;
	private float rating;
	private int labPhNo;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public int getLabId() {
		return labId;
	}
	public void setLabId(int labId) {
		this.labId = labId;
	}
	public String getLabName() {
		return labName;
	}
	public void setLabName(String labName) {
		this.labName = labName;
	}
	public String getLabLocation() {
		return labLocation;
	}
	public void setLabLocation(String labLocation) {
		this.labLocation = labLocation;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public int getLabPhNo() {
		return labPhNo;
	}
	public void setLabPhNo(int labPhNo) {
		this.labPhNo = labPhNo;
	}
	
	

}
