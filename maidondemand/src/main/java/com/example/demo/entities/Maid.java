package com.example.demo.entities;
import java.util.Date;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="tbl_maid")
public class Maid {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int maid_id;
	
	@Column
	private String m_name;
	
	@Column
	private String gender;
	
	@Column
	private String marital_status;
	
	@Column
	private String address;
	
	@Column
	private String contact_no;
	
	@Column
	private String aadhar_card;
	
	@Column
	private String is_active; 
	
	 
	
	public Maid() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	

	public Maid(String m_name, String gender, String marital_status, String address, String contact_no,
			String aadhar_card, String is_active) {
		super();
		this.m_name = m_name;
		this.gender = gender;
		this.marital_status = marital_status;
		this.address = address;
		this.contact_no = contact_no;
		this.aadhar_card = aadhar_card;
		this.is_active = is_active;
		
	}

	public int getMaid_id() {
		return maid_id;
	}

	public void setMaid_id(int maid_id) {
		this.maid_id = maid_id;
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

	
	
	/*
	 * public List<String> getCat() { return cat; }
	 * 
	 * public void setCat(List<String> cat) { this.cat = cat; }
	 */

	

	/*
	 * public List<String> getCateg() { return cat; }
	 * 
	 * public void setCateg(List<String> cat) { this.cat = cat;
	 * 
	 * 
	 * 
	 * //for(Category i : cat)
	 * 
	 * //i.setMidby(this);
	 * 
	 * 
	 * }
	 */
	@Override
	public String toString() {
		return "Maid [maid_id=" + maid_id + ", m_name=" + m_name + ", gender=" + gender + ", marital_status="
				+ marital_status + ", address=" + address + ", contact_no=" + contact_no + ", aadhar_card="
				+ aadhar_card +  "]";
	}
	
	

}
