import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import personal from './Images/personal.jpg';

const validContactRegex = RegExp(
    / \+91-[\d]{10}$/
  );

const ValidateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class UpdateMaid extends React.Component
{
    constructor(props)
    {
        super(props);
        const token = (localStorage.getItem("updatemaid"));
        let loggedIn = true;
        this.state={
            m_name:'',
            gender:'',
            marital_status:'',
            address: '',
            contact_no:'',
            is_active:'',
            aadhar_card:'',
            

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

        cancel=()=>{
            this.props.history.push('/');
    }


    update=(event)=>
    {
       event.preventDefault();

      

       const requestOption={
        method: 'post',
     
              headers: {
       
                'Accept': 'application/json',
                'Content-Type': 'application/json'
    
      },
      "body": JSON.stringify({
        maid_id:(JSON.parse(localStorage.getItem('updatemaid')).maid_id),
        m_name:(JSON.parse(localStorage.getItem('updatemaid')).m_name),
        gender:(JSON.parse(localStorage.getItem('updatemaid')).gender),
        marital_status:(JSON.parse(localStorage.getItem('updatemaid')).marital_status),
        address:this.state.address,
        is_active:(JSON.parse(localStorage.getItem('updatemaid')).is_active),
        contact_no: this.state.contact_no,
        aadhar_card:(JSON.parse(localStorage.getItem('updatemaid')).aadhar_card),
     })
    };
    
               
                 console.log(this.state.address);
                  fetch('http://localhost:8080/updatemaid',requestOption)
                  .then(res=>{
                    if(res.status===200)
                    {
                      alert("updated successfully");
                      //alert("Name : " + this.state.c_name  );
                      //alert("Password : "+this.state.password);
                      window.location="/AdminHome";
                      //this.props.history.push("/login");
                    }
                    else{
                        alert("OOPS! Failed !");
                        window.location="#";
                    }
                  })

 }

    render(){

        const {errors} = this.state;

        return(
            <div className="container-fluid"  style={{ backgroundImage:`url(${personal})`,height:'895px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover', color:'white'}} >
               {<style>{'body{background-color:#DFDFDE}'}</style>}
               <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome Admin </i></b></h4>
                <hr />
               <div id="form" class="row" className="mb-3 pageheading" >
                         <hr/>   
                            <h2>Maid Personal Info</h2>
                        </div>
                        <hr/>

              <center>
                      <Col md="9" lg="7" xl="6">

             
                        <Form noValidate>
      
                         
                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            
                          <InputGroup className="mb-2">
                              <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Name : </label>&nbsp; &nbsp;
                          <Input type="text" name="m_name" value={(JSON.parse(localStorage.getItem('updatemaid')).m_name)} disabled={true} noValidate required />
        
                           </InputGroup>
                          </div>
                          <br/>
                         <div>
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Gender : &nbsp; &nbsp; 
                          <Input type="text" className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} value={(JSON.parse(localStorage.getItem('updatemaid')).gender)} disabled={true}> 
                          
                          </Input>
                          </label>
                          </div>
                            <br/>
                          <div>
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Marital Status : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          <Input type="text" className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} value={(JSON.parse(localStorage.getItem('updatemaid')).marital_status)} disabled={true}> 
                        
                          </Input>
                          </label>
                          </div>
                            <br/>
                          <div>
                          <InputGroup className="mb-3">
                        <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Address : </label> &nbsp; &nbsp;
                          <Input type="text" name="address" placeholder={(JSON.parse(localStorage.getItem('updatemaid')).address)}  onChange={this.handleChange } noValidate/>
                          </InputGroup>
                          </div>
                            <br/>
                            <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Contact : </label> &nbsp; &nbsp;
                          <Input type="number" name="contact_no" placeholder={(JSON.parse(localStorage.getItem('updatemaid')).contact_no)} onChange={this.handleChange }  noValidate/>
                          {errors.contact_no.length > 0 && <span className='error'>{errors.contact_no}</span>}
                          </InputGroup>
                          </div>
                          <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Aadhar no : </label> &nbsp; &nbsp;
                          <Input type="text" name="aadhar_card" value={(JSON.parse(localStorage.getItem('updatemaid')).aadhar_card)} disabled={true}  />
                         
                          </InputGroup>
                          </div>
                          <br/>
                          
                        <Button  onClick={(event) => {this.update(event)}}  color="success" >Update</Button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                
                        </Form>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        </Col>
                        </center>
                        
            </div>
        );
    }
}

export default UpdateMaid;