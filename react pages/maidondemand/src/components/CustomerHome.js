import React  from 'react';
import {Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import mystore from './store';
import Profile from './profile';
import Bookmaid from './bookmaid';
import Feedback from './feedback';
import Login from './login';
import { propTypes } from 'react-bootstrap/esm/Image';
import BookingInfo from './bookinginfo';

export default class CustomerHome extends React.Component
 {

    constructor(props)
    {
       super(props);
       this.state={
           maids:[],
           category:[],

           c_name:''
       };
	
       this.handleChange=this.handleChange.bind(this);
    }

	logout=()=>{

        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedincustomer");
        this.props.history.push("/login");
    }

    
   
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("selected :"+ value);
        localStorage.setItem("selectedcategory",(value));
        this.setState({c_name:value})
        //alert(this.state.c_name);
        this.getAllMaids(value);
    }

    
    componentDidMount=()=>{
        
        fetch('http://localhost:8080/getAllCategory')
        .then(resp=>resp.json())
        .then(data=>{this.setState({category:data});console.log(this.state.category)
        // console.log(this.state.category[0].category_name)
        //  this.setState({c_name:this.state.category[0].category_name});
            this.getAllMaids(this.state.category[0].category_name);
            this.setState({charges:this.state.category[0].charges});

        });
        // 
        // 
        //alert(data.length);
        // console.log(data);
        
         
    }
    
    
   
     getAllMaids = (c) => 
     {     
         //alert("in");
         //alert(this.state.c_name);
         //console.log(this.state.c_name);
         console.log(c);
        
         fetch("http://localhost:8080/maidList?c_name="+(c))
       .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
       .then(data => {this.setState({maids:data});console.log(this.state.maids)})

     }
      
   submit= (maids)=>(ev)=>{
        console.log('We need to get the details for ',maids);
        localStorage.setItem("bookedmaid",JSON.stringify(maids));

        
        window.location="/bookmaid?maidinfo="+maids;       
       // localStorage.setItem("bookedmaid",true);
    }

     fetchmaids = (maids) =>(e)=> {
       
        //alert("hello");
        //const maids = e.target.getAttribute('data-item');
        console.log('We need to get the details for ',maids);

       // window.location="/bookmaid?maidinfo="+maids;
       
    
     }

    render(){
        return (
           <div>
              <h4>Welcome {JSON.parse(localStorage.getItem('loggedincustomer')).c_name} </h4> 
             
                <div className="container-fluid" >
                    {<style>{'body{background-color:#DFDFDE}'}</style>}

               </div>
               <div style={{height:"70px", backgroundColor:"lightgreen", borderStyle:"solid", borderWidth:"2px",  left:"116px",top:"0", width:"1125px"}}>
                   <center>
                       <span>
                           <table style={{borderCollapse:"collapse"}} cellPadding={"10"}>
                                  <thead>
                                       <tr>
                                           <td><Link className="btn btn-link" to="/profile" >Profile</Link></td>
                                           <td><Link className="btn btn-link" to="/bookinginfo" >Bookinginfo</Link></td>
                                           <td><Link className="btn btn-link" to="/feedback" >Feedback</Link></td>
                                           <td>< a href="/login" onClick={this.logout}> LOGOUT </a> </td>
                                           
                                       </tr> 
                                   </thead>
                           </table>
                       </span>	
                      
                       </center>
                   <Routes>
                       
                       <Route path="/login" element={<Login/>}/>
                       <Route path="/profile" element={<Profile/>}/>
                       <Route path="/bookinginfo" element={<BookingInfo/>}/>
                       <Route path="/feedback" element={<Feedback/>}/>
                       <Route path="/bookmaid" element={<Bookmaid/>}/>
                   </Routes>   
               </div> 
               <div>     
               Select Category:
              <select name="category" onChange={this.handleChange}>
                  {/*<option value="select">select</option>*/}
                    {
                        this.state.category.map(category =>{
                         return(<option value={category.category_name} >{category.category_name}</option>)
                               
                        })
                       
                    }
                 
               </select>
               {/*<select name="category"value={this.state.category.c_name} onChange={this.handleChange }  >
                       <option value="" placeholder="select category" disabled={true}>select Category</option>
                       <option value="washing" >Washing</option>
                       <option value="cooking">Cooking</option>
                       <option value="cleaning">Cleaning</option>
                </select>*/}
               <hr/>
               <h5>Maids</h5>
               <div className="maids"  >
                    <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Maid id</th>
             
                                    <th>Name</th>
                                    <th>Marital Status</th>
                                    <th>Address</th>
                                    <th>Contact No.</th>
                                    <th>charges</th>
                                    <th>Availability Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               { 
                                    this.state.maids.map((
                                    maids)=>{
                                    return(<tr data-item={maids} onClick={this.fetchmaids(maids)} >
                                    <td>{maids.maid_id}</td>
                                    <td>{maids.m_name}</td>
                                    <td>{maids.marital_status}</td>
                                    <td>{maids.address}</td>
                                    <td>{maids.contact_no}</td>
                                    <td>{this.state.charges}</td>
                                    <td>{maids.is_active}</td>
                                   {/* <td><Link to={{pathname:'/bookmaid',state:{maidlist:maids}}}>bookmaid</Link></td>*/}
                                    <td><button  onClick={this.submit(maids)}>Bookmaid</button></td>
                                 </tr>);
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
 
<BrowserRouter>
<CustomerHome/>
</BrowserRouter>


