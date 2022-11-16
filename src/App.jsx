import React from 'react';

const App = () => {
    return (
        <div>
            <form action="submit">
            <div className="form-group">
                <button type="submit">Chirp</button>
                <input type="text" />
            </div>
            </form>
        </div>
    );
};

export default App;