package com.example.demo.controllers;

import java.util.List;

import javax.persistence.Column;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CheckLogin;
import com.example.demo.entities.Customer;

import com.example.demo.services.CustomerService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CustomerController {
	@Autowired
	CustomerService custservice;
	
	/*
	 * @GetMapping("/allcustomer") public List<Customer> getAll() { return
	 * custservice.getAll(); }
	 */
	
	@PostMapping("/customerlist")
	public Customer savecustomer(@RequestBody Customer cu)
	{
		return custservice.savec(cu);
	}
	@PostMapping("/customerRegistration")
	public Customer registerCustomer(@RequestBody Customer c)
	{
		Customer custdetails =new Customer(c.getCid(),c.getC_name(),c.getGender(),c.getFamily_status(),c.getAddress(),c.getEmail_id(),c.getAadhar_card(),c.getPassword(),c.getContact_no());
		return custservice.savec(custdetails);
	}
	
	/*
	 * @PostMapping("/customerupdate") public Customer UpdateList(@RequestBody
	 * UpdateCustomer c) {
	 * System.out.println(c.getCid()+"   /"+c.getAddress()+"  /"+c.getContact_no()
	 * +"  /"); List<Customer> c1=custservice.getAllCust(); for(Customer c2: c1 )
	 * if( c2.getCid()==c.getCid()) { return (Customer)
	 * custservice.getCustomList(c.getAddress(),c.getContact_no(),c.getCid() );
	 * 
	 * } return null; }
	 */
	
	@PostMapping("/customerU")
	public Customer UpdateCust(@RequestBody Customer c)
	{
		return custservice.savec(c);		//System.out.println(c.getCid()+"   /"+c.getAddress()+"  /"+c.getContact_no()+"  /");
		 
	}
	
	
  @GetMapping("/allcustomer") 
  public List<Customer> getAll() 
  {
	  return custservice.getAllCust(); 
  }
	 
	
	
	
	
	
	/*	@PostMapping("/savestu")
	public Student savestudent(@RequestBody Student st)
	{
		return sservice.savec(st);
	}*/
	/*@PostMapping("/checkLogin")
	public String checkLogin(@RequestBody CheckLogin info )
	{
		System.out.println(info.getEmail_id()+""+info.getPassword());
		//return custservice.checkLogin(info.getEmail_id(), info.getPassword());
		
		*/
		
	@PostMapping("/checkLogin")
	public Customer checkLogin(@RequestBody CheckLogin info )
	{
		System.out.println(info.getEmail_id()+""+info.getPassword());		
		//return custservice.checkLogin(info.getEmail_id(), info.getPassword());
		boolean flag=false;
		List<Customer> customers=custservice.getAllCust();		
		for(Customer c: customers)
		{
			if(c.getEmail_id().equals(info.getEmail_id())&& c.getPassword().equals(info.getPassword()))
			{
				flag =true;
				break;
			}
					
		}
		if(flag)
			return custservice.checkLogin(info.getEmail_id(), info.getPassword());
		
		return null;
			
	}
}
