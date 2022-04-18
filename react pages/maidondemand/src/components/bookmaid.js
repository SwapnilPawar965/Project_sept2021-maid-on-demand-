import React from 'react';
//import { ReactComponent } from '*.svg';
import { Button, Col, Form, Input, InputGroup } from 'reactstrap';
//import CustomerHome from CustomerHome;
import E from './Images/E.jpg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Bookmaid extends React.Component
{
    constructor(props)
    {
      var today = new Date(),

      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        //console.log(maids);
        this.state={
        //  value:this.props.location.state,
            cid:'',
            maid_id:'',
            m_name:'',
            gender:'',
            address: '',
            contact_no:'',
            start_date:'',
            end_date:'',
            booking_date:date,
            category:{},

            maids:[]

        }
    }

    setStartDate = (start_date) => {
      this.setState({start_date});
      this.changeStatus();
    }

    setEndDate = (end_date) => {
      this.setState({end_date});
      this.changeStatus();
    }


   componentDidMount=(maidid, categoryname)=>{
     maidid=(JSON.parse(localStorage.getItem('bookedmaid')).maid_id);
      //console.log(JSON.parse(localStorage.getItem('bookedmaid')).maid_id);
    categoryname=((localStorage.getItem('selectedcategory')));
     //console.log((localStorage.getItem('selectedcategory')));
     
     fetch("http://localhost:8080/categoryId?maidid="+maidid+"&categoryname="+categoryname)
     .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
     .then(data => {this.setState({category:data});console.log(this.state.category)});

   }

      // handleChange = (event) => {
      //       this.setStartDate();
      //       this.setEndDate();
      //       //event.preventDefault();
      //       //const { name, value } = event.target;
            
      //      // this.setState({start_date: event.target.value});
      //      // this.setState({end_date: event.target.value});
      //     // this.setState({booking_date: event.target.value});
      //       //this.setState({status:'N'});
      //       //console.log(this.state.status);
      //       this.changeStatus(event);
           
      // }
        
        getMaids=(maid_id)=>{
          fetch("http://localhost:8080/getmaids?maid_id="+maid_id)
          .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
          .then(data => {this.setState({maids:data});console.log(this.state.maids)})
        }

        changeStatus=()=>{
          this.setState({status:'N'});
          console.log(this.state.status);
         

          //event.preventDefault();
          const requestOption=
          {
            method: 'post',
         
                  headers: {
           
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                  },
            "body": JSON.stringify({
              aadhar_card:(JSON.parse(localStorage.getItem('bookedmaid')).aadhar_card),
              address: (JSON.parse(localStorage.getItem('bookedmaid')).address),
              contact_no:(JSON.parse(localStorage.getItem('bookedmaid')).contact_no),
              created_date:(JSON.parse(localStorage.getItem('bookedmaid')).created_date),
              gender: (JSON.parse(localStorage.getItem('bookedmaid')).gender),
              is_active: 'N',
              m_name: (JSON.parse(localStorage.getItem('bookedmaid')).m_name),
              maid_id: (JSON.parse(localStorage.getItem('bookedmaid')).maid_id),
              marital_status:(JSON.parse(localStorage.getItem('bookedmaid')).marital_status)
          
            })
          }
          fetch("http://localhost:8080/updatemaid",requestOption)
          .then(res=>{
            if(res.status==200)
            {}
          })
       // this.book(event);
        }

        book=(event)=>{
          const current = new Date();
          const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
          this.setState({booking_date:date});
          event.preventDefault();
         
          const requestOption=
          {
            method: 'post',
         
                  headers: {
           
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                  },
            "body": JSON.stringify({
        
            customerbooking:{cid:(JSON.parse(localStorage.getItem('loggedincustomer')).cid),
                            c_name:(JSON.parse(localStorage.getItem('loggedincustomer')).c_name),
                            gender:(JSON.parse(localStorage.getItem('loggedincustomer')).gender),
                            family_status:(JSON.parse(localStorage.getItem('loggedincustomer')).family_status),
                            address: (JSON.parse(localStorage.getItem('loggedincustomer')).address),
                            email_id:(JSON.parse(localStorage.getItem('loggedincustomer')).email_id),
                            aadhar_card:(JSON.parse(localStorage.getItem('loggedincustomer')).aadhar_card),
                            password:(JSON.parse(localStorage.getItem('loggedincustomer')).password),
                            contact_no:(JSON.parse(localStorage.getItem('loggedincustomer')).contact_no),
            },
            bookedmaid:{ aadhar_card:(JSON.parse(localStorage.getItem('bookedmaid')).aadhar_card),
                        address: (JSON.parse(localStorage.getItem('bookedmaid')).address),
                        contact_no:(JSON.parse(localStorage.getItem('bookedmaid')).contact_no),
                        created_date:(JSON.parse(localStorage.getItem('bookedmaid')).created_date),
                        gender: (JSON.parse(localStorage.getItem('bookedmaid')).gender),
                        is_active: (JSON.parse(localStorage.getItem('bookedmaid')).is_active),
                        m_name: (JSON.parse(localStorage.getItem('bookedmaid')).m_name),
                        maid_id: (JSON.parse(localStorage.getItem('bookedmaid')).maid_id),
                        marital_status:(JSON.parse(localStorage.getItem('bookedmaid')).marital_status) 
            },
            start_date:this.state.start_date,
            end_date:this.state.end_date,
            booking_date:this.state.booking_date,
            payment:4000, 
            category:this.state.category
        })
        
      };

          fetch('http://localhost:8080/savebooking',requestOption)
          .then(res=>{
            if(res.status==200)
            {
              if(this.state.start_date !=='' && this.state.end_date!=='')
              {
                  alert("booking confirmed");
                  window.location="/CustomerHome";
              }
            
              else
              {
                alert("failed");
                window.location="/CustomerHome";
              }
            }
          })
        
      }

      cancel=()=>{
        window.location="/CustomerHome";
      }
        

    render(){
     
      const {start_date} = this.state;
      const {end_date} = this.state;

        return(

          <div className="container-fluid"  style={{ backgroundImage:`url(${E})`,height:'895px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
                
               {<style>{'body{background-color:#DFDFDE}'}</style>}
               <h4 style={{fontFamily:'arial', fontSize:36}}><b><i>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).c_name}</i></b></h4>

               <div id="form" class="row" className="mb-3 pageheading" >
                         <hr/>   
                            <h2>Booking form</h2>
                        </div>
                        <hr/>
                <center>
                      <Col md="9" lg="7" xl="6">

             
                        <Form noValidate>
      
                         
                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            
                          <InputGroup className="mb-2">
                              <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Name : </label>&nbsp; &nbsp;
                          <Input type="text" name="m_name" value={(JSON.parse(localStorage.getItem('bookedmaid')).m_name)} disabled={true} />
        
                           </InputGroup>
                          </div>
                          <br/>
                         <div>
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Gender : &nbsp; &nbsp; 
                          <Input type="text" className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} value={(JSON.parse(localStorage.getItem('bookedmaid')).gender)} disabled={true}> 
                          
                          </Input>
                          </label>
                          </div>
                           
                      <br/>
                          <div>
                          <InputGroup className="mb-3">
                        <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Address : </label> &nbsp; &nbsp;
                          <Input type="text" name="address" value={(JSON.parse(localStorage.getItem('bookedmaid')).address)} disabled={true} noValidate/>
                          </InputGroup>
                          </div>
                            <br/>
                         
                        
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Contact No: </label> &nbsp; &nbsp;
                          <Input type="number" name="contact_no"  value={(JSON.parse(localStorage.getItem('bookedmaid')).contact_no)}   disabled={true}  noValidate/>
                         
                          </InputGroup>
                          </div>
                          <br/>
                          <div>
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Start Date : &nbsp; &nbsp; &nbsp; &nbsp;
                         <DatePicker 
                                className="custom-select"    
                                dateFormat="dd/MM/yyyy" 
                                selected={start_date}
                               minDate={new Date(new Date().setDate(17))}
                                onChange={this.setStartDate}
                          />
                           </label>

                        { /* <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Start Date :
                           </label> &nbsp; &nbsp;
                          <Input type="date" name="start_date"  placeholder="enter start date"  onChange={this.handleChange}    noValidate/>*/}
                         
                          </InputGroup>
                          </div>

                          <div>
                            
                          <InputGroup className="mb-3">
                          <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}>Start Date : &nbsp; &nbsp; &nbsp; &nbsp;
                          <DatePicker 
                                className="custom-select"    
                                dateFormat="dd/MM/yyyy" 
                                selected={end_date}
                                minDate={start_date}
                              onChange={this.setEndDate}
                          />
                           </label>
                           { /* <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}> End Date : </label> &nbsp; &nbsp;
                          <Input type="date" name="end_date"  placeholder="enter end date" onChange={this.handleChange}  noValidate/>*/}
                         
                          </InputGroup>
                          </div>

                          <div>
                          

                          {/*<a href="/confirm"  onClick={this.book}>BOOK</a>*/}
                          <Button  color="success" onClick={ this.book}>BOOK</Button>&nbsp; &nbsp;&nbsp;&nbsp;
                          <Button onClick={this.cancel}>CANCEL</Button>
                          </div>
                         
                        {/*<Button  onClick={(event) => {this.update(event)}}  color="success" >Update</Button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
        */}
                        </Form>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        </Col>
                        </center>
            </div>
        );
    }
} 
