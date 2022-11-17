import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import Chirp from './components/Chirp';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { TfiQuoteLeft } from 'react-icons/tfi'
import { TfiQuoteRight } from 'react-icons/tfi'
import { RiChatFollowUpFill  } from 'react-icons/ri'



const App = () => {


    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    
    
    const [chirps, setChirps] = useState([
        {
    id: 1,
    username: 'Bobby Hill',
    message: "I'm a little worried about being a slut..."
},
{
    id: 2,
    username: 'Morty Smith',
    message: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV."
},
{
    id: 3,
    username: "Musk l'Eon",
    message: "Elon is our times genius. He speak so intelligently and actually thinks before he speaks. Honestly he is only thinking of a way that normal rational Americans will understand him. He is actually that smart..I really hope to meet him one day!!!"
}
]);

   
    const handleChirpInput = e => {
        setMessage(e.target.value)
        
    }
    const handleUserInput = e => {
        setUsername(e.target.value)
    }
    const handleButtonClick = e => {
        let button = document.getElementById('chirpButton')
        if (message === "" || username === "") {
           alert('Missing some Input')
           e.preventDefault()
            
        } else{
        e.preventDefault()
        setChirps([...chirps, {id: uuidv4() , username, message: message}])
        setUsername(e.target.value)
        setMessage('')
        setUsername('')
    } }

    return (
        <main className= "row justify-content-center ">
            <div className="col-12 col-md-6 offset-1">
            <form className="rounded shadow-lg bg-primary ">
                <div className="d-flex justify-content-start">
                    <label className="btn btn-info m-3 disabled">Chirper Username $8.00</label>
                </div>
                <input className= "form-control p-4 mb-4" placeholder="Username Here" value={username} onChange={handleUserInput} />
                <textarea  className= "form-control bg-light p-3 text-muted" placeholder="Chirp Here" value={message} onChange={handleChirpInput} />
                <div className="d-flex justify-content-end">
                    <button onClick={handleButtonClick} className="btn btn-success m-3" id= 'chirpButton'>Chirp Chirp {"---->"}</button>
                </div>
           
            </form>
            </div>
           <div className="row justify-content-center">
            {chirps.map(chirp => (
                <div key={chirp.id} className="col-12 col-md-6 offset-1 mt-4">
                    <div  className="mb-2 card shadow-lg">
                        <span className=" d-flex justify-content-end text-muted card-text fst-italic fw-lighter mx-3 mt-1">{moment().toNow()}</span>
                        <div className="card-body col-12"></div>
                            <h3 className="card-title mx-5 ">{chirp.username} {"-> --> --->"}</h3>
                            
                            <p className=" m-5 card-text ">{chirp.message}</p>
                            <div className= 'd-flex justify-content-between mx-2'>
                            <h6 className=" text-muted d-flex card-text fst-italic">{moment().format('LLLL')} </h6>
                            <h6 className=" text-muted d-flex card-text fst-italic">{"---"}{chirp.username}{"---"}<RiChatFollowUpFill /></h6>
                            </div>
                    </div>
              </div>
             ) 
        )}
           </div>
        </main>
    );
};

export default App;