package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="tbl_feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int feedback_id;
	
	@Column
	private int rating;
	
	@Column
	private String comment;
    //@JsonBackReference

	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="cid")
	Customer custBook;

	
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback( int rating, String comment, Customer custBook) {
		super();
		//this.feedback_id = feedback_id;
		this.rating = rating;
		this.comment = comment;
		this.custBook = custBook;
	}
	public int getFeedback_id() {
		return feedback_id;
	}

	public void setFeedback_id(int feedback_id) {
		this.feedback_id = feedback_id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Customer getCustBook() {
		return custBook;
	}

	public void setCustBook(Customer custBook) {
		this.custBook = custBook;
	}

	
	@Override
	public String toString() {
		return "Feedback [feedback_id=" + feedback_id + ", rating=" + rating + ", comment=" + comment + ", custBook="
				+ custBook + "]";
	}
	
}
