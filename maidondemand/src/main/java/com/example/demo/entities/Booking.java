package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="tbl_booking")
public class Booking 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int booking_id ;
	
	@Column
	private float payment;
	
//	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date start_date;
	
//	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date end_date;
    //@JsonBackReference

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date booking_date;
	
	//@Column 
	//private String cancel;
	
	
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="mid")
	Maid bookedmaid;
	
	
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="cid")
	Customer customerbooking;
	
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="category_id")
	Category category;

	
	
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(int booking_id, float payment, Date start_date, Date end_date, Date booking_date,
			Maid bookedmaid, Customer customerbooking, Category category) {
		super();
		this.booking_id = booking_id;
		this.payment = payment;
		this.start_date = start_date;
		this.end_date = end_date;
		this.booking_date = booking_date;
		this.bookedmaid = bookedmaid;
		this.customerbooking = customerbooking;
		this.category = category;
	}

	public Booking(float payment, Date start_date, Date end_date, Date booking_date, Maid bookedmaid,
			Customer customerbooking, Category category) {
		super();
		this.payment = payment;
		this.start_date = start_date;
		this.end_date = end_date;
		this.booking_date = booking_date;
		this.bookedmaid = bookedmaid;
		this.customerbooking = customerbooking;
		this.category = category;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public float getPayment() {
		return payment;
	}

	public void setPayment(float payment) {
		this.payment = payment;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Date getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(Date booking_date) {
		this.booking_date = booking_date;
	}

	public Maid getBookedmaid() {
		return bookedmaid;
	}

	public void setBookedmaid(Maid bookedmaid) {
		this.bookedmaid = bookedmaid;
	}

	public Customer getCustomerbooking() {
		return customerbooking;
	}

	public void setCustomerbooking(Customer customerbooking) {
		this.customerbooking = customerbooking;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", payment=" + payment + ", start_date=" + start_date
				+ ", end_date=" + end_date + ", booking_date=" + booking_date + ", bookedmaid=" + bookedmaid
				+ ", customerbooking=" + customerbooking + ", category=" + category + "]";
	}
	
	
}
