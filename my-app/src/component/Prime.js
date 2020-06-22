import React from 'react';

const Prime = () => {
    const primes = [];
    let n = primes.length;
    let flag = true;

    // for (let i = 2; i <= n; i++) {

    let i = 2;
    while (n < 3000) {
        flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
            }
        }

        if (flag) {
            primes.push(i);
            n++;
        }
        i++;
    }

    console.log(primes);

    return (
        <div>
            {primes.map((key, index) => (
                <span key={index}>{key} </span>
            ))}
        </div>
    );
};

export default Prime;
