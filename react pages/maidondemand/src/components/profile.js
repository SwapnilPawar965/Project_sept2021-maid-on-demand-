import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import CustomerHome from "./CustomerHome";
import personal from './Images/personal.jpg';

const validContactRegex = RegExp(
    / \+91-[\d]{10}$/
  );

  const ValidateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class Profile extends React.Component
{
    
    
    constructor(props)
    {
        super(props);
        const token = (localStorage.getItem("loggedincustomer"));
        let loggedIn = true;
        this.state={

        
            c_name:'',
            gender:'',
            family_status:'',
            address: '',
            email_id:'',
            aadhar_card:'',
            password:'',
            contact_no:'',


            errors: {
                contact_no:''
                
            }
        }
    }

    address=(event)=> {
       
        this.setState({ address: event.target.value })
  
      }

    contact_no=(event)=> {
         
        this.setState({ contact_no: event.target.value })
  
      }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
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
        
       
       
        this.setState({errors, [name]: value});
        }

        cancel=(event)=>{
         // window.location="/CustomerHome";
            
    }


        update=(event)=>
        {
           event.preventDefault();

           if(ValidateForm(this.state.errors)) 
           {
             console.info('Valid Form')
           }
           else
           {
             console.error('Invalid Form')
           }

           const requestOption={
            method: 'post',
         
                  headers: {
           
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
        
          },
          "body": JSON.stringify({
            cid:(JSON.parse(localStorage.getItem('loggedincustomer')).cid),
            c_name:(JSON.parse(localStorage.getItem('loggedincustomer')).c_name),
            gender:(JSON.parse(localStorage.getItem('loggedincustomer')).gender),
            family_status:(JSON.parse(localStorage.getItem('loggedincustomer')).family_status),
            address:this.state.address,
            email_id: (JSON.parse(localStorage.getItem('loggedincustomer')).email_id),
            aadhar_card:(JSON.parse(localStorage.getItem('loggedincustomer')).aadhar_card),
            password:(JSON.parse(localStorage.getItem('loggedincustomer')).password),
            contact_no: this.state.contact_no,
         })
        };
        
                   
                     console.log(this.state.address);
                      fetch('http://localhost:8080/customerU',requestOption)
                      .then(res=>{
                        if(res.status===200)
                        {
                          alert("updated successfully");
                          //alert("Name : " + this.state.c_name  );
                          //alert("Password : "+this.state.password);
                          window.location="/CustomerHome";
                          //this.props.history.push("/login");
                        }
                        else{
                            alert("OOPS! Registration Failed !");
                        }
                      })

     }
      
     render() {
          

        const {errors} = this.state;


   
        return (
 
            <div className="container-fluid"  style={{ backgroundImage:`url(${personal})`,height:'895px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover', color:'white'}} >
               {<style>{'body{background-color:#DFDFDE}'}</style>}
               <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).c_name}</i></b></h4>
               <hr />
               <div id="form" class="row" className="mb-3 pageheading" >
                         <hr/>   
                            <h2>Personal Info</h2>
                        </div>
                        <hr/>

              <center>
                      <Col md="9" lg="7" xl="6">

             
                        <Form noValidate>
      
                         
                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            
                          <InputGroup className="mb-2">
                              <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Name : </label>&nbsp; &nbsp;
                          <Input type="text" name="c_name" value={(JSON.parse(localStorage.getItem('loggedincustomer')).c_name)} disabled={true} noValidate required />
        
                           </InputGroup>
                          </div>
                          <br/>
                         <div>
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Gender : &nbsp; &nbsp; 
                          <Input type="text" className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} value={(JSON.parse(localStorage.getItem('loggedincustomer')).gender)} disabled={true}> 
                          
                          </Input>
                          </label>
                          </div>
                            <br/>
                          <div>
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Family Status : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          <Input type="text" className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} value={(JSON.parse(localStorage.getItem('loggedincustomer')).family_status)} disabled={true}> 
                        
                          </Input>
                          </label>
                          </div>
                      <br/>
                          <div>
                          <InputGroup className="mb-3">
                        <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Address : </label> &nbsp; &nbsp;
                          <Input type="text" name="address" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).address)} onChange={this.handleChange } noValidate/>
                          
                          </InputGroup>
                          </div>
                            <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Email ID : </label> &nbsp; &nbsp;
                          <Input type="text" name="email_id" value={(JSON.parse(localStorage.getItem('loggedincustomer')).email_id)} disabled={true} />
                        
                          </InputGroup>
                          </div>
                        <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Aadhar no : </label> &nbsp; &nbsp;
                          <Input type="text" name="aadhar_card" placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).aadhar_card)} disabled={true}  />
                         
                          </InputGroup>
                          </div>
                            <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Password : </label> &nbsp; &nbsp;
                         <Input type="text" name="password"  value={(JSON.parse(localStorage.getItem('loggedincustomer')).password)} disabled={true}/>
                       
                          </InputGroup>
                          </div>
                            <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Contact : </label> &nbsp; &nbsp;
                          <Input type="number" name="contact_no"  placeholder={(JSON.parse(localStorage.getItem('loggedincustomer')).contact_no)} onChange={this.handleChange }  noValidate/>
                          {errors.contact_no.length > 0 && <span className='error'>{errors.contact_no}</span>}
                          </InputGroup>
                          </div>
                         
                        <Button  onClick={(event) => {this.update(event)}}  color="success" >Update</Button>
                        
              
                        </Form>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        </Col>
                     </center>
                   <Routes>
                       <Route path="/CustomerHome" element={<CustomerHome/>}/>
                   </Routes>  
                        
            </div>
          );
  
        }

}

export default Profile;