package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
@Transactional
@Repository
public interface CategoryRepository extends JpaRepository <Category,Integer> {

	@Query( value="SELECT DISTINCT category_name FROM tbl_category ", nativeQuery=true)
	public List<String> getAllList();
	
	@Query(value="select * from tbl_category where mid=?1 and category_name=?2",nativeQuery=true)
	public Category getCategoryData(int maidid,String categoryname );
}
