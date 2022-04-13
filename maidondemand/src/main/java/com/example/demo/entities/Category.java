package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_category")
public class Category {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int category_id;
	
	@Column
	private String category_name;
	
	@Column
	private String charges;

	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="mid")
	Maid midby;// this property used in mappedby

	//private Set<Category> cname;
	
	
	
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}



	/*
	 * public Category(Set<Category> str, String charges, Maid midby) { super();
	 * this.cname=str; this.charges = charges; this.midby=midby; // TODO
	 * Auto-generated constructor stub }
	 */



	public Category(String category_name, String charges,Maid midby) {
		super();
		//this.category_id = category_id;
		this.category_name = category_name;
		this.charges = charges;
		this.midby=midby;
	}



	


	public Category(String category_name, String charges) {
		super();
	
		this.category_name = category_name;
		this.charges = charges;
	}



	public Maid getMidby() {
		return midby;
	}



	public void setMidby(Maid midby) {
		this.midby = midby;
	}



	public int getCategory_id() {
		return category_id;
	}



	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}



	public String getCategory_name() {
		return category_name;
	}



	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}



	public String getCharges() {
		return charges;
	}



	public void setCharges(String charges) {
		this.charges = charges;
	}



	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", category_name=" + category_name + ", charges=" + charges
				+ "]";
	}
	
	

}
