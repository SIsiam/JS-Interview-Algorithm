function isPrime(prime) {
    let divison = 2;

    while (prime > divison) {
        if (prime % divison == 0) {
            return false;
        }
        else
            divison++;
    }
    return true;
}

//   let result = isPrime(137)
// true 
let result = isPrime(130)
//   false
console.log(result);
