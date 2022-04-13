package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingService 
{
	@Autowired
	BookingRepository bookingrepo;
	
	public List<Booking> getAllBooking()
	{
		return bookingrepo.findAll();
	}
	
	public Booking savec(Booking b)
	{
		//insert operation in the database
		return bookingrepo.save(b);
	}
	
	public List<Booking> getCustomerBooking(int cid)
	{
		return bookingrepo.getBooking(cid);
	}
}
