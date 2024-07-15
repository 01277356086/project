 

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'; 
function Scroll() {
  

    const scroll=()=>{
        window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"
            
        });
    }
    
    // const click = () => {
    //     if (window.confirm("Do you want return to the Top of Page ?")) {
    //         {scroll()}
    //     }
    // };


    return (
        <>
        <Button  data-aos="zoom-out-down"  data-aos-duration="3000" variant="outline-light" className="btnscroll" onClick={scroll}>   Top </Button>
       
        </>
    );
}

export default Scroll;
