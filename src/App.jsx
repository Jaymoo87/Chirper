import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import Chirp from './components/Chirp';


const App = () => {


    const [chirpText, setChirp] = useState('')
    const [timeline, setTimeline] = useState("")
   
let chirps = [{
    name: 'Bobby Hill',
    message: "I'm a little worried about being a slut..."
},
{
    name: 'Morty Smith',
    message: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV."
},
{
    name: "Musk l'Eon",
    message: "Elon is our times genius. He speak so intelligently and actually thinks before he speaks. Honestly he is only thinking of a way that normal rational Americans will understand him. He is actually that smart..I really hope to meet him one day!!!"
}
]

    useEffect(() => {
        console.log('Test')
    }, [])
    const handleChirpInput = e => {
        setChirp(e.target.value)

    }
    const handleButtonClick = e => {
        setTimeline(<Chirp />)
    }

    return (
        <div>
            <form className="row form-control">
            <div className="form-group">
                <button  onClick={handleButtonClick} className="btn btn-primary">Chirp</button>
                <input value={chirpText} onChange={handleChirpInput} />
            </div>
            </form>
        </div>
    );
};

export default App;