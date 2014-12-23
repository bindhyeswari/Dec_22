function generatePrimes(numOfPrimes) {
    var primesArr = [];
    var counter = 2;
    while (primesArr.length < numOfPrimes) {
        if (isPrime(counter)) {
            primesArr.push(counter);
        }
        counter++;
    }
    return primesArr;
}

function isPrime(num) {
    for (var i = 2, len = Math.sqrt(num); i <= len; i++) {
        if ( num % i < 1 ) return false;
    }
    return true;
}

self.addEventListener('message', function (event) { // event.data = 'Hello'
    self.postMessage(generatePrimes(event.data));
});
