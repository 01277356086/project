 

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
    
    const click = () => {
        if (window.confirm("Do you want return to the Top of Page ?")) {
            {scroll()}
        }
    };


    return (
        <>
        <Button variant="outline-light" className="btnscroll" onClick={click}>   Top </Button>
      
       
        
       
        </>
    );
}

export default Scroll;
