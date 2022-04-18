import React, { useState } from 'react'
import mystore from './store';
import {Table} from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './login';
import AdminMaid from './adminMaid';
import AdminCustomer from './adminCustomer';
import ViewFeedback from './viewfeedback';
import E from './Images/E.jpg';


export default class AdminHome extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
        bookings:[]
        }
    }

    componentDidMount=()=>{

        fetch("http://localhost:8080/getAllBookings")
        .then(resp=>resp.json())
        .then(data=>{this.setState({bookings:data});console.log(this.state.bookings)

    })
}
    
    logout=()=>{

        mystore.dispatch({type:'LOGGEDOUT'});
       // localStorage.removeItem("loggidincustomer");
        this.props.history.push("/login");
    }


    render(){
    return(
        <div style={{ backgroundImage:`url(${E})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
             <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome Admin </i></b></h4>
                <hr />
            <div style = {{display: this.state.flag?'none':'block', backgroundColor:'white' }} className="nav nav-tabs" >
                 <ul className="nav nav-tabs" >
                                           <li className="nav-item"><Link className="nav-link" to="/adminMaid" >MaidList</Link></li>
                                           <li className="nav-item"><Link className="nav-link" to="/adminCustomer" >CustomerList</Link></li>
                                           <li className="nav-item"><Link className="nav-link" to="/viewfeedback" > ViewFeedback</Link></li>
                                           <li className="nav-item" style={{flex:1}} >                                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button>< a href="/login" onClick={this.logout} style={{flex:1}}> LOGOUT </a> </button></li>
                                           
                 </ul>                    
                      
                   <Routes>
                        <Route path="/adminMaid" element={<AdminMaid/>}/>
                        <Route path="/adminCustomer" element={<AdminCustomer/>}/>
                        <Route path="/viewfeedback" element={<ViewFeedback/>}/> 
                        <Route path="/login" element={<Login/>}/>
                       
                   </Routes> 


               </div> 
               <h5>List of Bookings</h5>
               <div className="maids"  >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Booking Id</th>
                                    <th>Customer Id</th>
                                    <th>Customer Name</th>
                                    <th>Maid Id</th>
                                    <th>Maid Name</th>
                                    <th>Payment</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Category Name</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                    this.state.bookings.map(
                                    bookings=>{
                                    return(<tr>
                                    <td>{bookings.booking_id}</td>
                                    <td>{bookings.customerbooking.cid}</td>
                                    <td>{bookings.customerbooking.c_name}</td>
                                    <td>{bookings.bookedmaid.maid_id}</td>
                                    <td>{bookings.bookedmaid.m_name}</td>
                                    <td>{bookings.payment}</td>
                                    <td>{bookings.start_date}</td>
                                    <td>{bookings.end_date}</td>
                                    <td>{bookings.category.category_name}</td>
                                 </tr>)
                                    })
                               }
                            </tbody>
                    </Table>        
                            
             </div>

                
        </div>
    );

}
}
