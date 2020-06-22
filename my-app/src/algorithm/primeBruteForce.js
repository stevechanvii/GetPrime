export const primeBruteForce = (primeCount) => {
    if (primeCount == 0) {
        return '';
    }
    const primes = [];
    let n = primes.length;
    let flag = true;

    let i = 2;
    while (n < primeCount) {
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

    return primes;
};
