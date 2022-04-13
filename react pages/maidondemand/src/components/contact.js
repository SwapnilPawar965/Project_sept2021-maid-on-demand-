import React, { Component } from 'react';
import contact from './Images/contact.jpg';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{ backgroundImage:`url(${contact})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
                <div >
                    <h1 style={{text:"white"}}>Contact </h1><br/>
                    <br/>
                    
                    <center>
                        <table border='1' className="table table-bordered table-hover" >
                        
                            <tr >
                            &nbsp;<th>Name </th>  &nbsp;
                                <th>Email</th>&nbsp;
                                <th>Phone Number</th>&nbsp;&nbsp;
                                

                            </tr>
                            <tr>
                            &nbsp; <td>Roshni Verma</td>&nbsp;
                                <td>roshniverma@gmail.com</td>&nbsp;
                                <td>9768452387</td>&nbsp;&nbsp;
                            </tr>
                            <tr>
                            &nbsp;  <td>Manish Kumar</td>&nbsp;
                                <td>manishkumar@gmail.com</td>&nbsp;
                                <td>9768452388</td>&nbsp;&nbsp;
                            </tr>
                            <tr>
                            &nbsp; <td>Shiksha Sharma</td>&nbsp;
                                <td>shiksha.sharma@gmail.com</td>&nbsp;
                                <td>9950677743</td>&nbsp;&nbsp;
                            </tr>
                            <tr>
                            &nbsp; <td>Swapnil Pawar</td>&nbsp;
                                <td>swapnilpawar@gmail.com</td>&nbsp;
                                <td>9768452390</td>&nbsp; &nbsp;;
                            </tr>

                        </table>
                    </center>
                 </div>
            </div>

           
        )
    }
}

export default Contact;