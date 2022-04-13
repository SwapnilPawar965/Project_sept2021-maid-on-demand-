package com.example.demo.entities;

public class CheckLogin {
	
	String email_id;
	String password;
	
	public CheckLogin(String email_id, String password) {
		super();
		this.email_id = email_id;
		this.password = password;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
