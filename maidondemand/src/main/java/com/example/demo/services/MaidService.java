package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Maid;
import com.example.demo.repository.MaidRepository;

@Service
public class MaidService {

@Autowired
MaidRepository maidrepo;

public List<Maid> getAll() 
{ 
	return maidrepo.findAll(); 
}
public Maid getById(int maid)
{
	
	return (Maid) maidrepo.getMaidById(maid);
}
public Maid savec(Maid m)
{
	return maidrepo.save(m);
}


public List<Maid> getByName(String name)
{
	return (List<Maid>)maidrepo.maidList(name);
}

public int DeleteRow(Maid m)
{
	return maidrepo.DeleteRow(m);
}

//public int UpdateStatus(Maid m)
//{
//	return maidrepo.UpdateStatus(m);
//}
}
