package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;

@Transactional
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	
	@Query(value= "select c from tbl_customer c where c.email_id=:?1 ",nativeQuery=true )
	public Customer getByEmail(String email_id);

	//@Query(value="select c from tbl_customer c where c.email_id=:?1 and c.password=:?2",nativeQuery=true )
	//public List<Object[]> checkLogin(String email_id, String password);
	
	@Query("select c from Customer c where c.email_id like %?1 and c.password like %?2")
	 public Customer checkLogin(String emailId,String password);
	
	
	@Modifying
	@Query(value="update Customer c set c.address=?1 , c.contact_no=?2 where c.cid=?3")
	public int UpdateCust( String address,String contact_no,int cid);
	
	
}

	
	
//@Modifying(clearAutomatically = true)
	//@Query(value="update tbl_customer c set c.address =:address where c.cid =:cid",nativeQuery=true)
	//public List<Customer> UpdateCust(@Param("address") String address, @Param("cid") int cid);


