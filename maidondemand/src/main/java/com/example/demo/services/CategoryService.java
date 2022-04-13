package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.CustomerRepository;
@Service
public class CategoryService {
	@Autowired
	CategoryRepository categrepo;
	
	public List<Category> getAllCategory()
	{
		return categrepo.findAll();
	}
	
	public Category savec(Category c)
	{
		//insert operation in the database
		return categrepo.save(c);
	}
	
	public List<String> getCategList()
	{
		return categrepo.getAllList();
	}

	public Category getCategoryDataList(int maidid,String categoryname)
	{
		return categrepo.getCategoryData(maidid, categoryname);
	}
}
