package com.example.demo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.services.BookingService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BookingController 
{
	@Autowired
	BookingService bookingservice;
	
	@GetMapping("/getAllBookings")
	public List<Booking> getAll()
	{
		return bookingservice.getAllBooking();
	}
	
	@PostMapping("/savebooking")
	public Booking savecustomer(@RequestBody Booking b)
	{
		return bookingservice.savec(b);
	}
	
	@GetMapping("/getCustomerBooking")
	public List<Booking> getCustomerBooking(@RequestParam("cid") int cid )
	{
		return bookingservice.getCustomerBooking(cid);
	}
	
	
}
