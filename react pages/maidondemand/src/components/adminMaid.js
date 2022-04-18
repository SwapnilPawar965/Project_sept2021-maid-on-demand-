import { data } from "jquery";
import React from "react";
import {Table} from 'react-bootstrap';
import E from './Images/E.jpg';

 
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';

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

 class AdminMaid extends React.Component
 {
     
     constructor(props) {
        super(props);
        this.state = {
                m_name:'',
                gender:'',
                marital_status:'',
                address: '',
                contact_no:'',
                aadhar_card:'',      
                category:[],
                maids:[],


                errors: {
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

                  m_name=(event)=> {
             
                    this.setState({ c_name: event.target.value })
              
                  }

                  gender=(event)=> {
             
                    this.setState({ gender: event.target.value })
            
                  }
                  
                  marital_status=(event)=> {
             
                    this.setState({ marital_status: event.target.value })
            
                  }

                  address=(event)=> {
           
                    this.setState({ address: event.target.value })
              
                  }
                  
                  contact_no=(event)=> {
             
                    this.setState({ contact_no: event.target.value })
              
                  }

                  aadhar_card=(event)=> {
           
                    this.setState({ aadhar_card: event.target.value })
              
                  }

                  category=(event)=> {
           
                    this.setState({ category: event.target.value })
              
                  }

                  
    componentDidMount=()=>{
        fetch('http://localhost:8080/allmaid')
        .then(resp=>resp.json())
        .then(data=>{this.setState({maids:data});console.log(this.state.maids)
        })    
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    }
        
   fetchmaids = (maids) =>(e)=> {
       
       //alert("hello");
       //const maids = e.target.getAttribute('data-item');
       console.log('We need to get the details for ',maids);  
         // window.location="/bookmaid?maidinfo="+maids;
    }
  

  update= (maids)=>(ev)=>{
        console.log('We need to get the details for ',maids);
        localStorage.setItem("updatemaid",JSON.stringify(maids));

       
        window.location="/updatemaid?maidinfo="+maids;       
       // localStorage.setItem("bookedmaid",true);
    }

    delete=(maids)=>(event)=>{
      console.log('We need to get the details for ',maids);
      localStorage.setItem("deletemaid",JSON.stringify(maids));

      event.preventDefault();

      

       const requestOption={
        method: 'post',
     
              headers: {
       
                'Accept': 'application/json',
                'Content-Type': 'application/json'
    
      },
      "body": JSON.stringify({
        maid_id:(JSON.parse(localStorage.getItem('deletemaid')).maid_id),
       /* m_name:(JSON.parse(localStorage.getItem('deletemaid')).m_name),
        gender:(JSON.parse(localStorage.getItem('deletemaid')).gender),
        marital_status:(JSON.parse(localStorage.getItem('deletemaid')).marital_status),
        address:this.state.address,
        contact_no: this.state.contact_no,
        aadhar_card:(JSON.parse(localStorage.getItem('deletemaid')).aadhar_card),
        */
     })
    };
    
               
                  fetch('http://localhost:8080/deleteMaiddata?maid_id='+(JSON.parse(localStorage.getItem('deletemaid')).maid_id), requestOption)
                  .then(res=>{
                    if(res.status===200)
                    {
                      alert("deleted successfully");
                      //alert("Name : " + this.state.c_name  );
                      //alert("Password : "+this.state.password);
                      window.location="/AdminHome";
                      //this.props.history.push("/login");
                    }
                    else{
                        alert("OOPS! Failed !");
                    }
                  })

                  window.location="/adminMaid";

    }

    

     render() {
              

             const {errors} = this.state;


               
        return (
          <div className="Container-fluid" style={{ backgroundImage:`url(${E})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
            <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome Admin </i></b></h4>
                <hr />
         <div style = {{display: this.state.flag?'none':'block', backgroundColor:'white' }} className="nav nav-tabs" >

                       
                             <hr/>
               <h5>Maids </h5>
               <div className="maids"  >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Maid id</th>
                                    <th>Name</th>
                                    <th>Marital Status</th>
                                    <th>Address</th>
                                    <th>Contact No.</th>
                                    <th>Availibility Status</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                    this.state.maids.map(
                                    maids=>{
                                    return(<tr data-item={maids} onClick={this.fetchmaids(maids)}>
                                    <td>{maids.maid_id}</td>
                                    <td>{maids.m_name}</td>
                                    <td>{maids.marital_status}</td>
                                    <td>{maids.address}</td>
                                    <td>{maids.contact_no}</td>
                                    <td>{maids.is_active}</td>
                                    <td><button onClick={this.update(maids)}>Update</button></td>
                                    {/*<td><a href="/updatemaid">Update</a></td>*/}
                                    <td><button onClick={this.delete(maids)} >Delete</button></td>

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
 
 export default AdminMaid;