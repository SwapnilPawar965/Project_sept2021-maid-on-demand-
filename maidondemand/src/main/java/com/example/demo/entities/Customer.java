package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity

@Table(name="tbl_customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cid;
	
	@Column
	private String c_name;
	
	@Column
	private String gender;
	
	@Column
	private String family_status;
	
	@Column
	private String address;
	
	@Column
	private String email_id;
	
	@Column
	private String aadhar_card;
	
	@Column
	private String password;
	
	@Column
	private String contact_no;
    //@JsonBackReference

	//@OneToOne(cascade = CascadeType.ALL, mappedBy = "custBook")
    //private Feedback feedback;
	
	
	
	



	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	 //public Feedback getFeedback() { return feedback; }
	  
	 
	  //public void setFeedback(Feedback feedback) { this.feedback = feedback; }
	 


		/*
		 * public Customer(int cid, String c_name, String gender, String family_status,
		 * String address, String email_id, String aadhar_card, String password, String
		 * contact_no) { super(); this.cid = cid; this.c_name = c_name; this.gender =
		 * gender; this.family_status = family_status; this.address = address;
		 * this.email_id = email_id; this.aadhar_card = aadhar_card; this.password =
		 * password; this.contact_no = contact_no; //this.feedback= feedback; }
		 */
	
	public Customer(int cid, String c_name, String gender, String family_status, String address, String email_id,
			String aadhar_card, String password, String contact_no)
	{
		super();
		this.cid = cid;
		this.c_name = c_name;
		this.gender = gender;
		this.family_status = family_status;
		this.address = address;
		this.email_id = email_id;
		this.aadhar_card = aadhar_card;
		this.password = password;
		this.contact_no = contact_no;
	}



	/*
	 * public Customer(int cid,String Address,String contatc_no) { super(); this.cid
	 * = cid; this.address = address; this.contact_no = contact_no;
	 * 
	 * 
	 * }
	 */
	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFamily_status() {
		return family_status;
	}

	public void setFamily_status(String family_status) {
		this.family_status = family_status;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getAadhar_card() {
		return aadhar_card;
	}

	public void setAadhar_card(String aadhar_card) {
		this.aadhar_card = aadhar_card;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	/*
	 * public Feedback getFeedback() { return feedback; }
	 * 
	 * public void setFeedback(Feedback feedback) { this.feedback = feedback; }
	 */


	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", c_name=" + c_name + ", gender=" + gender + ", family_status=" + family_status
				+ ", address=" + address + ", email_id=" + email_id + ", aadhar_card=" + aadhar_card + ", password="
				+ password + ", contact_no=" + contact_no +  "]";
	}
	
	
	

}

/*
 * {
    
   "booking_id":1,

    "customerBooking":{"cid":"1", "c_name":"aditi","gender":"female","family_status":"unmarried","address":"pune","email_id":"aditi@gmail.com","aadhar_card":"123456123456","password":"aditi@123","contact_no":"1234512345"},
    "bookedmaid":{"aadhar_card": "987654321122",
"address": "mumbai",
"contact_no": "9876543211",
"created_date": "2022-04-10"
,"gender": "Female",
"is_active": null,
"m_name": "gangubai",
"maid_id": 1,
"marital_status": "Unmarried" },
"start_date":"2022-04-12",
"end_date":"2022-04-15",
"booking_date":"2022-04-11",
"payment":4000,
"cancel":"y",
"category":{"category_id":2, "category_name":"cookiing", "charges":1000, "mid":1}


}*/
