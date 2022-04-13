package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.Maid;
import com.example.demo.services.CategoryService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.MaidService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CategoryController {

	@Autowired
	CategoryService categservice;
	
	@PostMapping("/categoryregister")
	public Category save(@RequestBody Category m)
	{
		return categservice.savec(m);
	}
	
	@GetMapping("/getAllCategory")
	public List<Category> getAll()
	{
		return categservice.getAllCategory();
	}
	
	@GetMapping("/categorydetails")
	public List<String> getCategdetails()
	{
		return categservice.getCategList();
	}
	
	@GetMapping("/categoryId")
	public Category getCategory(@RequestParam int maidid,@RequestParam String categoryname)
	{
		return categservice.getCategoryDataList(maidid, categoryname);
	}

}
