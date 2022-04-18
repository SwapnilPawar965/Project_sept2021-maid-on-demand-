import { data, event } from "jquery";
import React from "react";
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
import E from './Images/E.jpg';



class Feedback extends React.Component
{
    constructor(props){
        super(props);
        
        this.state={
            cid:'',
            rating:'',
            comment:'',
            custBook:{}
        }

        this.rating = this.rating.bind(this);
        this.comment = this.comment.bind(this);


    }

    rating=(event)=> {
         
        this.setState({ rating: event.target.value })
  
    }

    comment=(event)=> {
 
        this.setState({ comment: event.target.value })

    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;


        switch (name) {

            case 'comment': 
               errors.comment = 
                 value.length === 200
                   ? ''
                   : 'Only 200 words allowed';
                 break;
                           
            default:
             break;
         }

                 
        this.setState({rating: event.target.value});
        this.setState({comment: event.target.value});
        this.setState({errors, [name]: value});
    }

    cancel=()=>{
      window.location="/CustomerHome";
    }

    submit=(event)=>
         {
            event.preventDefault();

           

          const requestOption=
          {
            method: 'post',
         
                  headers: {
           
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

          },
          "body": JSON.stringify({
            comment:this.state.comment,
            custBook:{ cid:(JSON.parse(localStorage.getItem('loggedincustomer')).cid),
              c_name:(JSON.parse(localStorage.getItem('loggedincustomer')).c_name),
            gender:(JSON.parse(localStorage.getItem('loggedincustomer')).gender),
            family_status:(JSON.parse(localStorage.getItem('loggedincustomer')).family_status),
            address: (JSON.parse(localStorage.getItem('loggedincustomer')).address),
            email_id:(JSON.parse(localStorage.getItem('loggedincustomer')).email_id),
            aadhar_card:(JSON.parse(localStorage.getItem('loggedincustomer')).aadhar_card),
            password:(JSON.parse(localStorage.getItem('loggedincustomer')).password),
            contact_no:(JSON.parse(localStorage.getItem('loggedincustomer')).contact_no),},
            rating:this.state.rating 
         })
        };


        
          fetch('http://localhost:8080/savefeedback', requestOption)
          .then(res=>{
            if(res.status==200)
            {
              alert("Feedback Submitted Successfully !");
              window.location="/CustomerHome";
            }
            else
            {
                alert("OOPS! Failed !");
            }
          })

      }

   

    render(){
        const {errors} = this.state;

        return(
          <div className="container-fluid" style={{ backgroundImage:`url(${E})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
          <h4 ><b><i>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).c_name}</i></b></h4>
             <hr />
         <div style = {{display: this.state.flag?'none':'block' }} className="nav nav-tabs" >
           
            {<style>{'body{background-color:#DFDFDE}'}</style>}
            <div id="form" className="mb-3 pageheading" >
                      <hr/>   
                         <h2>Feedback</h2>
                     </div>
                     <hr/>
            <br/><br/>
            <center>
            <Col md="9" lg="7" xl="6">
                <Form onSubmit={this.submit} noValidate>
                     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    
                    <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Rating :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     <InputGroup className="mb-3" onChange={(event) =>{this.rating(event)}}>
                            <input type="radio" value="1" name="rate" />&nbsp; 1 &nbsp; &nbsp;
                            <input type="radio" value="2" name="rate" />&nbsp; 2 &nbsp; &nbsp;
                            <input type="radio" value="3" name="rate" />&nbsp; 3 &nbsp; &nbsp;
                            <input type="radio" value="4" name="rate" />&nbsp; 4 &nbsp; &nbsp;
                            <input type="radio" value="5" name="rate" />&nbsp; 5 <br/><br/>
                            
                     </InputGroup>
                     </label>
                     </div>
                    
                     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                     <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Comment : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         <InputGroup className="mb-3" onChange={(event) =>{this.comment(event)}}>
                            <textarea aria-multiline="true" rows="4" cols="50" placeholder="Write here..." name="cmnt" ></textarea>
                         </InputGroup>
                     </label>
                     </div>
                     <br/>

                     <Button onClick={this.submit}  color="success" >SUBMIT</Button>
                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>CANCEL</button>
                     </Form>
                </Col>
                </center>
            </div>
            </div>
        );
    }
}

export default Feedback;