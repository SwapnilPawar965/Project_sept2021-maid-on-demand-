package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;

@Transactional
@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>  
{
	@Query(value="select * from tbl_booking where cid=?1", nativeQuery=true)
	public List<Booking> getBooking(int cid);
	//public List<Booking> getBookings(Booking b);
}
