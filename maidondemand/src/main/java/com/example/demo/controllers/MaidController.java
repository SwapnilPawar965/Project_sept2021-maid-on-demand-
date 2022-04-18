package com.example.demo.controllers;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Maid;
import com.example.demo.entities.MaidRegister;
import com.example.demo.services.CategoryService;
import com.example.demo.services.MaidService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MaidController {

	@Autowired
	MaidService maidservice;
	
	@Autowired 
	CategoryService categservice;
	//
	@GetMapping("/allmaid")
	public List<Maid> getAll()
	{ 
		return maidservice.getAll(); 
	}
		
	@GetMapping("/getmaid")
	public Maid getMaidById(@RequestParam("maid")int maid)
	{
		return maidservice.getById(maid);
	}
		
		@GetMapping("/maidList")
		public List<Maid> maidList(@RequestParam("c_name")String name)
		{
			return (List<Maid>) maidservice.getByName(name);
		}
		
		@PostMapping("/savemaid")
		public Maid save(@RequestBody Maid m)
		{
			return maidservice.savec(m);
		}
		
		@PostMapping("/maidRegistration")
		public Maid registerMaid(@RequestBody MaidRegister m)
		{
			//System.out.println(m);
			Maid maiddetails =new Maid(m.getM_name(),m.getGender(),m.getMarital_status(),m.getAddress(),m.getContact_no(),m.getAadhar_card(),m.getIs_active());
			Maid savedmaid=maidservice.savec(maiddetails);
			
			
			List<String> cname=m.getCategorydetails(); 
			for(String str:cname) 
			{ 
			Category c=new Category(str,"1000",savedmaid); 
			categservice.savec(c);
			}
			 
				return savedmaid;	
		}
		
		@PostMapping("/updatemaid")
		public Maid UpdateCust(@RequestBody Maid m)
		{
			return maidservice.savec(m);		//System.out.println(c.getCid()+"   /"+c.getAddress()+"  /"+c.getContact_no()+"  /");
			 
		}
		
		@PostMapping("/deleteMaiddata") 
		 public int DeleteRow(@RequestBody Maid m)
		 {
			  return maidservice.DeleteRow(m); 
		 }
		
//		@PostMapping("/updatestatus") 
//		 public int UpdateStatus(@RequestBody Maid m)
//		 {
//			  return maidservice.UpdateStatus(m); 
//		 }
		
}

