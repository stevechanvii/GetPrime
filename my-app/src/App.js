import React from 'react';
import './App.css';

import PrimeInput from './component/PrimeInput/PrimeInput';
import AlgorithmPicker from './component/AlgorithmPicker/AlgorithmPicker';

function App() {
    return (
        <div className='App'>
            <h1>Prime Generator</h1>
            <PrimeInput />
            <AlgorithmPicker />
        </div>
    );
}

export default App;
