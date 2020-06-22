import React, { useState } from 'react';
// import './App.css';
import './styles/main.scss';

// import PrimeInput from './component/PrimeGenerater/PrimeGenerater';
import PrimeGenerator from './component/PrimeGenerater/PrimeGenerator';

function App() {
    return (
        <div className='container'>
            <h1>Prime Generator</h1>
            {/* <PrimeInput /> */}
            <PrimeGenerator />
        </div>
    );
}

export default App;
