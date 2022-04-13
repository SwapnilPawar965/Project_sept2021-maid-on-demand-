package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Feedback;
import com.example.demo.services.FeedbackService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FeedbackController {

	@Autowired
	FeedbackService feedbackservice;
	
	@PostMapping("/savefeedback")
	public Feedback save(@RequestBody Feedback f)
	{
		return feedbackservice.savec(f);
	}
	
	@GetMapping("/allfeedback")
	public List<Feedback> getAll()
	{ 
		return feedbackservice.getAllFeedback(); 
	}
}
