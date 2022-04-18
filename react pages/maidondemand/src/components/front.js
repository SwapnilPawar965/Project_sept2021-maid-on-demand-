import React from "react";

import M from "./Images/M.jpg";
import 'animate.css';



class Front extends React.Component
{
    render(){
            //mystore.subscribe(()={});
        return (
        <div style={{ backgroundImage:`url(${M})`,height:'595px' ,backgroundRepeat:"no-repeat",backgroundSize:'cover' }}>
                 {<style>{'body{background-color:#DFDFDE}'}</style>}
            <h1 class="display-5">
                   <hr/>
                   <main class="animate__animated animate__bounceInRight">
             <p style={{ color : 'black'}}>  Maid On Demand (MOD) </p>
             </main>


            
             </h1>
            {/* <div style={{opacity:'0.8'}}>
            
             
          
             <img style={{textalign:"left"}}src ={img1} height={150} width={150} alt= "" />   &nbsp; &nbsp; &nbsp;
             <img src ={img2} height={150} width={150} alt= "" />  &nbsp; &nbsp; &nbsp;
             <img src ={img3} height={150} width={150} alt= "" />
        </div>*/}
             <br/>
             <br/>
             <main class="animate__animated animate__fadeInUp">
                <h4 style={{ color : 'black',fontFamily:'serif'}}> Maid on Demand website is made to make your maid hiring experience 
                        much better and safer.<br/> Our website has certified maids which you 
                        can browse and select according to your requirements.<br/> We ensure 
                        the safety of our customers and maids and provide you quality work
                        on time according to your requirements.<br/>
                </h4>
                </main>
         <br/>
         <br/>
         <br/>    
        </div>
        )
}
}
export default Front;