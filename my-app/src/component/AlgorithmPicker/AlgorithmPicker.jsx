import React from 'react';

const AlgorithmPicker = () => {
    return (
        <div>
            <input type='radio' value='BruteForce' name='algorithm' /> Brute Force
            <input type='radio' value='Eratosthenes' name='algorithm' /> Sieve of Eratosthenes
        </div>
    );
};

export default AlgorithmPicker;
