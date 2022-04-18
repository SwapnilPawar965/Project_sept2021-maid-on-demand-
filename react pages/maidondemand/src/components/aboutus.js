import React, { Component } from 'react';
import aboutus from './Images/aboutus.jpg';

class AboutUs extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    } 

    render() {
        return (
            <div style={{ backgroundImage:`url(${aboutus})`,height:'695px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}>
           
               
                    <h1 class=" text-white">About Us </h1>
                    <p class=" text-white">We are Pune Based Courier Service </p>
                
               
                
                <h2 >Our Team</h2>
                <div class="row">
                    <div class="column" class=" text-white">
                        <div >
                            <div >
                                <h2>Manish Kumar</h2>
                                <p class="title">CDAC Pune</p>
                                <p>Manish Kumar is CEO of Pune Maid on demand company</p>
                            </div>
                    </div>
                
                    <div class="column">
                        <div >
                            {/*<img src="/assets/35998.jpg" alt="Aniruddha" style="width:100%;height: 400px;"/>*/}
                            <div >
                            <h2>Shiksha Sharma</h2>
                            <p class="title"> CDAC Pune</p>
                            <p>Shiksha is Master's of Computer Application who is passed out  in  2015.</p>
                        </div>
                    </div>
                    </div>
                        <div class="column">
                            <div >
                               
                                <div >
                                    <h2>Roshni Verma</h2>
                                    <p class="title"> CDAC Pune</p>
                                    <p>Roshni Verma is Designer</p>
                                </div>
                            </div>
                        </div>
                
                        <div class="column">
                            <div >
                               
                                <div>
                                    <h2>Swapnil Pawar</h2>
                                    <p class="title">CDAC Pune</p>
                                    <p>Swapnil Pawar is working as Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default AboutUs;