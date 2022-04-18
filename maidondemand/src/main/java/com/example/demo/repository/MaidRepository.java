package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Maid;
@Transactional
@Repository
public interface MaidRepository extends JpaRepository<Maid, Integer> {
	

	@Query(value="select * from tbl_maid where maid_id=?1",nativeQuery=true)
	public Maid getMaidById(int maid);
	
	@Query(value="select * from tbl_maid m join tbl_category c on m.maid_id=c.mid where c.category_name=?1 and m.is_active='Y'",nativeQuery=true)
	//@Query("select m from Maid m join Category c on m.maid_id=c.mid where c.category_name like %?1 ")
	public List<Maid> maidList(String  cat);
	
	@Modifying
	@Query(value="delete from tbl_maid where maid_id=?1",nativeQuery=true)
	public int DeleteRow(Maid m);
	
//	@Modifying
//	@Query(value=" from tbl_maid where maid_id=?1",nativeQuery=true)
//	public int UpdateStatus(Maid m);
//	
}
