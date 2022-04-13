package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custrepo;
	
	/*
	 * public List<Customer> getAll() { return custrepo.findAll(); }
	 */
	public List<Customer> getAllCust()
	{
		return custrepo.findAll();
	}
	
	public Customer savec(Customer c)
	{
		//insert operation in the database
		return custrepo.save(c);
	}

	public List<Customer> getByEmailid(String email_id, String password)
	{
		return (List<Customer>) custrepo.getByEmail(email_id);
	}
	
	
	public Customer update(Customer c) {
		return custrepo.save(c);
	}
	
	public int getCustomList(String address, String contact_no,int cid)
	{
		return custrepo.UpdateCust(address, contact_no,cid  );
	}
	
	
	public Customer checkLogin(String email_id, String password)
	{
		Customer c=custrepo.checkLogin(email_id, password);
		return  c;
		/*List<Object[]> l=custrepo.checkLogin(email_id, password); 
		Customer c=null;
		if(l.size()==1)
		{
			if(l.get(0)[6].equals(email_id))
			{
				List<Customer> cu=(List<Customer>) custrepo.getByEmail(email_id);
				try 
				{
					c=cu.get(6);
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
		}
		}
	
			*/
	}
	

}
