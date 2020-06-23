import React from 'react';
import './styles/main.scss';

import PrimeGenerator from './component/PrimeGenerater/PrimeGenerator';

function App() {
    return (
        <div className='container'>
            <h1 className='app-name'>Prime Generator</h1>
            {/* <PrimeInput /> */}
            <PrimeGenerator />
        </div>
    );
}

export default App;
