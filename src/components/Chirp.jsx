import React, { useState } from 'react';
import { ReactDOM } from 'react';


const Chirp = props => {

    
    return(
      
      <div>
        <p className="card">{props.chirpText}</p>
      </div>
    );
}

export default Chirp;