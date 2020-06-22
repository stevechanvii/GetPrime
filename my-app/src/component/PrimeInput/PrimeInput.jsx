import React, { useState } from 'react';

const PrimeInput = () => {
    const [primeCount, setPrimeCount] = useState(1000);

    const onChangePrime = (e) => {
        setPrimeCount(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div>
            <form>
                <span>
                    Get The First{' '}
                    <input
                        type='text'
                        name='prime'
                        value={primeCount}
                        onChange={onChangePrime}
                    ></input>{' '}
                    Prime Numbers
                </span>
            </form>
        </div>
    );
};

export default PrimeInput;
