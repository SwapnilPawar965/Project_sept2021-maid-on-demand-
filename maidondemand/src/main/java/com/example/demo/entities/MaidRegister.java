package com.example.demo.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class MaidRegister {

private String m_name;
	
	
	private String gender;
	
	
	private String marital_status;
	

	private String address;
	

	private String contact_no;
	
	
	private String aadhar_card;
	
	private String is_active; 
	
	//
	@Temporal(TemporalType.TIMESTAMP)
	//@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date nacimiento;

	
	List<String> categorydetails=new ArrayList<String>(); 
	
	public MaidRegister(String m_name, String gender, String marital_status, String address, String contact_no,
			String aadhar_card, String is_active, List<String> categorydetails) {
		super();
		this.m_name = m_name;
		this.gender = gender;
		this.marital_status = marital_status;
		this.address = address;
		this.contact_no = contact_no;
		this.aadhar_card = aadhar_card;
		this.is_active = is_active;
		this.categorydetails = categorydetails;
	}
	
	public String getM_name() {
		return m_name;
	}

	public void setM_name(String m_name) {
		this.m_name = m_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMarital_status() {
		return marital_status;
	}

	public void setMarital_status(String marital_status) {
		this.marital_status = marital_status;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getAadhar_card() {
		return aadhar_card;
	}

	public void setAadhar_card(String aadhar_card) {
		this.aadhar_card = aadhar_card;
	}

	public String getIs_active() {
		return is_active;
	}

	public void setIs_active(String is_active) {
		this.is_active = is_active;
	}


	public List<String> getCategorydetails() {
		return categorydetails;
	}

	public void setCategorydetails(List<String> categorydetails) {
		this.categorydetails = categorydetails;
	}

	

	@Override
	public String toString() {
		return "MaidRegister [m_name=" + m_name + ", gender=" + gender + ", marital_status=" + marital_status
				+ ", address=" + address + ", contact_no=" + contact_no + ", aadhar_card=" + aadhar_card
				+ ", is_active=" + is_active +  ", categorydetails=" + categorydetails
				+ "]";
	}

	
	
	
}
