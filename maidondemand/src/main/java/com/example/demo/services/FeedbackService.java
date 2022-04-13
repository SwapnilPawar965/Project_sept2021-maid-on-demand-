package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Feedback;
import com.example.demo.repository.FeedbackRepository;
@Service
public class FeedbackService {
	
	@Autowired
	FeedbackRepository feedbackrepo;
	
	public Feedback savec(Feedback f)
	{
		//insert operation in the database
		return feedbackrepo.save(f);
	}
	
	public List<Feedback> getAllFeedback()
	{
		return feedbackrepo.findAll();
	}
}
