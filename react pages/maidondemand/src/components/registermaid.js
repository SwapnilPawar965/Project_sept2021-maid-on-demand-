import { data } from "jquery";
import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';
import register from './Images/register.jpg';

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
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

 class MaidRegistration extends React.Component
 {
     
     constructor(props) {
      var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        this.state = {
                m_name:'',
                gender:'',
                marital_status:'',
                address: '',
                contact_no:'',
                aadhar_card:'', 
                is_active:'',  
                created_date:date,   
                category:[],


                errors: {
                  m_name: '',
                  contact_no:'',
                  aadhar_card:'',
                }
        }
                          this.m_name = this.m_name.bind(this);
                          this.gender = this.gender.bind(this);
                          this.marital_status=this.marital_status.bind(this);
                          this.address = this.address.bind(this);
                          this.contact_no = this.contact_no.bind(this);
                          this.aadhar_card=this.aadhar_card.bind(this);
                          {/*this.category=this.category.bind(this);*/}
                          this.category=this.category.bind(this);
                    
      }

                  m_name=(event)=> { this.setState({ c_name: event.target.value })  }

                  gender=(event)=> {this.setState({ gender: event.target.value }) }
                  
                  marital_status=(event)=> {this.setState({ marital_status: event.target.value })}

                  address=(event)=> {this.setState({ address: event.target.value })}
                  
                  contact_no=(event)=> {this.setState({ contact_no: event.target.value })}
                //  created_date=(event)=>{
                    
                //     this.setState({created_date:date})
                //   }

                  is_active=(event)=>{ this.setState({is_active: 'Y'})}

                  aadhar_card=(event)=> {this.setState({ aadhar_card: event.target.value }) }

                  category=(event)=> { this.setState({ category: event.target.value }) }
                  
                  
                           
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    {/*console.log(name);
    console.log(value);  
  console.log(event.target.type);*/}
    let errors = this.state.errors;

    switch (name) {
        case 'm_name': 
          errors.m_name = 
            value.length < 2
              ? ' Name must be at least 2 characters long!'
              : '';
            break;

        case 'contact_no': 
          errors.contact_no = 
            value.length === 10
              ? ''
              : 'Contact No must be 10 digits long!';
            break;

        case 'aadhar_card': 
            errors.aadhar_card = 
              value.length === 12
                ? ''
                : 'Aadhar Card No must be 12 digits long!';
              break;    
      
       default:
        break;
    }
    const myarray= this.state.category;

    if(event.target.type === "checkbox")
    {
      //console.log(event.target.checked);

      if(event.target.checked === true)
      {
        //console.log(event.target.value);
        myarray.push(event.target.value);
      }
    }
    this.setState({errors, [name]: value});
    this.setState({category:myarray});
    
  }

   cancel=()=>{window.location="/login";}

   reset=()=>{window.location="/registermaid";}

  register=(event)=> {
                event.preventDefault();

                if(ValidateForm(this.state.errors)) 
                {
                  console.info('Valid Form')
                }
                else
                {
                  console.error('Invalid Form')
                }

                console.log(this.state.category);
               
              const requestOption={
                  method: 'post',
              
                  headers: {
                
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'

                   },
                "body": JSON.stringify({
                      m_name:this.state.m_name,
                      gender:this.state.gender,
                      marital_status:this.state.marital_status,
                      address:this.state.address,
                      contact_no: this.state.contact_no,
                      is_active:'Y',
                      created_date:this.state.created_date,
                      aadhar_card:this.state.aadhar_card,
                      categorydetails:this.state.category,
                })
            };

            if(this.state.c_name!='' && this.state.gender!='' && this.state.family_status!='' && this.state.address!='' && this.state.email_id!='' && this.state.contact_no!='' && this.state.aadhar_card!='')
            {
              fetch('http://localhost:8080/maidRegistration',requestOption)
              .then(res=>{
                if(res.status==200)
                {
                  alert("Your Registration Successful !");
                  alert("Name : " + this.state.m_name  );
                  //alert("Password : "+this.state.password);
                  window.location="/login";
                  //this.props.history.push("/login");
                }
                else{
                    alert("OOPS! Registration Failed !");
                    window.location="#";
                }
               
              })
            }
            else{alert("all fields are mandatory");}
        }
       
     
        

  render() {
      const {errors} = this.state;
      return (
            <div className="container-fluid" style={{ backgroundImage:`url(${register})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
                {<style>{'body{background-color:#DFDFDE}'}</style>}
                <div id="form" class="row" className="mb-3 pageheading" >
                   <hr/>
                   <h2>Maid Registration Form</h2>
                </div>
                   <hr/>
                <center>
                   <Col md="9" lg="7" xl="6">    
                      {/*} <Card className="mx-3"> </Card> #FFF8D5*/}
                      
                       <Form onSubmit={this.register} noValidate>
                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                              <InputGroup className="mb-2">
                               <Input type="text" name="m_name" placeholder="Full Name" onChange={this.handleChange }  required={true} />
                                {errors.m_name.length > 0 && <span className='error'>{errors.m_name}</span>}
                              </InputGroup>
                          </div>
                          <br/>  

                                      <div>
                                        <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Gender : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                                        <InputGroup className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} onChange={(event) =>{this.gender(event)}}>  
                                        <input type="radio" value="Male" name="gender"/> &nbsp;Male  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <input type="radio" value="Female" name="gender" /> &nbsp;Female &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <input type="radio" value="Other" name="gender" />  &nbsp;Other<br/>
                                        </InputGroup>
                                        </label>
                                      </div>

                                      <div>
                                      <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}> Marital Status:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                      <InputGroup className="mb-3" onChange={(event) =>{this.marital_status(event)}}> 
                                      <input type="radio" value="Unmarried" name="family_status"/> &nbsp;Unmarried  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      <input type="radio" value="Married" name="family_status" /> &nbsp;Married  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      </InputGroup>
                                      </label>
                                      </div>
                                      
                                      <div >
                                      <InputGroup className="mb-3">
                                      <Input type="text" name="address" placeholder="Enter address here" onChange={this.handleChange } noValidate/>
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="number" name="contact_no" placeholder="Contact No" onChange={this.handleChange } noValidate/>
                                      {errors.contact_no.length > 0 && <span className='error'>{errors.contact_no}</span>}
                                      </InputGroup>
                                      </div>
                                      
                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="number" name="aadhar_card" placeholder="aadhar no" onChange={this.handleChange } noValidate/>
                                      {errors.aadhar_card.length > 0 && <span className='error'>{errors.aadhar_card}</span>}
                                      </InputGroup>
                                      </div>

                    <div>
                                          <InputGroup className="mb-3">
                                        Select Category: &nbsp; &nbsp;
                                        <div>
                                          <Input type="checkbox" id="washing" name="category" value="washing" onChange={this.handleChange} /> Washing &nbsp; <br/>
                                          <Input type="checkbox" id="cooking" name="category" value="cooking" onChange={this.handleChange} /> Cooking &nbsp; <br/>
                                          <Input type="checkbox" id="cleaning" name="category" value="cleaning" onChange={this.handleChange} /> Cleaning &nbsp; <br/>
                                        </div>
                                        </InputGroup>
                    </div>
                  
                                    <Button  onClick={(event) => {this.register(event)}}  color="success" >Register</Button>
                                    <Button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</Button>
                                    <Button className="btn btn-primary" onClick={this.reset} style={{marginLeft: "10px"}}>Reset</Button>
                                    </Form>

                              </Col>
           
                           
                              </center>
                          
               
                        </div>
               
                      );
              
                    }
               
 }
 
 export default MaidRegistration;