import React from 'react'
import mystore from './store';
import {Table} from 'react-bootstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import E from './Images/E.jpg';

export default class ViewFeedback extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
        feedbacks:[]
        }
    }

    componentDidMount=()=>{

        fetch("http://localhost:8080/allfeedback")
        .then(resp=>resp.json())
        .then(data=>{this.setState({feedbacks:data});console.log(this.state.feedbacks)

    })
}  

    render(){

        return(
            <div className="container-fluid" style={{ backgroundImage:`url(${E})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
            <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome Admin </i></b></h4>
                <hr />
         
            
                  <h5>Feedbacks</h5>
               <div className="maids"  style = {{display: this.state.flag?'none':'block', backgroundColor:'white'}} >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>feedback Id</th>
                                    <th>Customer id</th>
                                    <th>Customer Name</th>
                                    <th>Rating</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                    this.state.feedbacks.map(
                                    feedbacks=>{
                                    return(<tr>
                                    <td>{feedbacks.feedback_id}</td>
                                    <td>{feedbacks.custBook.cid}</td>
                                    <td>{feedbacks.custBook.c_name}</td>
                                    <td>{feedbacks.rating}</td>
                                    <td>{feedbacks.comment}</td>
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