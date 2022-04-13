import React from 'react'
import mystore from './store';
import {Table} from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';


export default class BookingInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
        bookings:[]
        }
    }

    componentDidMount=()=>{

        fetch("http://localhost:8080/getCustomerBooking?cid="+JSON.parse(localStorage.getItem('loggedincustomer')).cid)
        .then(resp=>resp.json())
        .then(data=>{this.setState({bookings:data});console.log(this.state.bookings)

    })
}  

    render(){
        return(
            <div>
                 <h5>List of Bookings</h5>
               <div className="maids"  >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Booking Id</th>
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
        )
    }
}
