function addDigits(any) {
    const str = any.toString();
    const arr = str.split('');
    return arr.map(num => parseInt(num)).reduce((prev, current) => prev+current,0)
  
};
//Sums 2 digests 
console.log(addDigits(29));
//Sums any number of digest
console.log(addDigits(87658));

