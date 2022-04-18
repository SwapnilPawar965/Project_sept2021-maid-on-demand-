import { data } from "jquery";
import React from "react";
import {Table} from 'react-bootstrap';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';
import E from './Images/E.jpg';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);

const ValidateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

 class AdminCustomer extends React.Component
 {
     
     constructor(props) {
        super(props);
        this.state = {
            c_name:'',
            gender:'',
            family_status:'',
            address: '',
            email_id:'',
            contact_no:'',
            customer:[],
           
            
            errors: {
              c_name: '',
              email_id: '',
              contact_no:'',
            }
                  }
                      this.c_name = this.c_name.bind(this);
                      this.gender = this.gender.bind(this);
                      this.family_status=this.family_status.bind(this);
                      this.address = this.address.bind(this);
                      this.email_id= this.email_id.bind(this);
                      this.contact_no = this.contact_no.bind(this);
  }

              c_name=(event)=> {
         
                this.setState({ c_name: event.target.value })
          
              }

              gender=(event)=> {
         
                this.setState({ gender: event.target.value })
        
              }
              
              family_status=(event)=> {
         
                this.setState({ family_status: event.target.value })
        
              }

              address=(event)=> {
       
                this.setState({ address: event.target.value })
          
              }
            
              email_id=(event)=> {
         
                this.setState({ email_id: event.target.value })
          
              }
              contact_no=(event)=> {
         
                this.setState({ contact_no: event.target.value })
          
              }

                  
    componentDidMount=()=>{
        fetch('http://localhost:8080/allcustomer')
        .then(resp=>resp.json())
        .then(data=>{this.setState({customer:data});console.log(this.state.customer)
        })    
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        {/*console.log(name);
        console.log(value);  
    console.log(event.target.type);*/}
        let errors = this.state.errors;

        switch (name) {
            

            case 'contact_no': 
            errors.contact_no = 
                value.length === 10
                ? ''
                : 'Contact No must be 10 digits long!';
                break;
        default:
            break;
        }
    }
       

     render() {
              

             const {errors} = this.state;


               
        return (
          <div className="Container-fluid" style={{ backgroundImage:`url(${E})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
            <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome Admin </i></b></h4>
                <hr />
         <div style = {{display: this.state.flag?'none':'block', backgroundColor:'white' }}>

                      
                             <hr/>
               <h5>Customer List</h5>
               <div className="maids"  >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>customer id</th>
                                    <th>Name</th>
                                    <th>Family Status</th>
                                    <th>Address</th>
                                    <th>Contact No.</th>
                                    <th>Email_id</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                    this.state.customer.map(
                                    customer=>{
                                    return(<tr>
                                    <td>{customer.cid}</td>
                                    <td>{customer.c_name}</td>
                                    <td>{customer.family_status}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.contact_no}</td>
                                    <td>{customer.email_id}</td>
                                   
                                 </tr>)
                                    })
                               }
                            </tbody>
                    </Table>        
                            
             </div>
                           
                        </div>
                        </div>
                      );
                    }
               
 }

 
 export default AdminCustomer;