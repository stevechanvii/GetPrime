import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Timer from '../Timer/Timer';
import { primeBruteForce } from '../../algorithm/primeBruteForce';

import './PrimeGenerator.css';

const PrimeGenerator = () => {
    const [primeCount, setPrimeCount] = useState(1000);
    const [algorithm, setAlgorithm] = useState('bruteForce');
    const [primes, setPrimes] = useState([]);
    const [loading, setLoading] = useState(false);

    const onCheckerClick = (e) => {
        e.preventDefault();
        console.log('Check');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(1, loading);
        setLoading(true);
        console.log(2, loading);
        const primes = primeBruteForce(primeCount);
        console.log(3, loading);
        setPrimes(primes);
        console.log(4, loading);
        setLoading(false);
        console.log(5, loading);
    };

    return (
        <div className='generator'>
            <form onSubmit={handleSubmit}>
                <div>
                    Get The First{' '}
                    <input
                        type='text'
                        name='prime'
                        value={primeCount}
                        onChange={(e) => setPrimeCount(e.target.value)}
                    ></input>{' '}
                    Prime Numbers
                </div>

                <FormControl component='fieldset'>
                    <RadioGroup
                        row
                        aria-label='algorithm'
                        name='algorithm'
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                    >
                        <FormControlLabel
                            value='bruteForce'
                            control={<Radio />}
                            label='Brute Force'
                        />
                        <FormControlLabel
                            value='eratosthenes'
                            control={<Radio />}
                            label='Sieve of Eratosthenes'
                        />
                    </RadioGroup>
                </FormControl>
                <div>
                    <button onClick={onCheckerClick}>Check Algorithm</button>
                    <input type='submit' value='Generate Prime' />
                </div>
            </form>
            <div>
                {loading ? (
                    <Timer />
                ) : (
                    primes.map((prime, index) => (
                        <span
                            key={index}
                            className='scale'
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {prime}{' '}
                        </span>
                    ))
                )}
            </div>
        </div>
    );
};

export default PrimeGenerator;
