function adjacentElementsProduct(inputArray) {
    let largestSum = {num1:inputArray[0], num2:inputArray[1], sum:inputArray[0]+inputArray[1]}
    inputArray.forEach((element, index) => {
        let sum =  element + inputArray[index+1]
        if(sum > largestSum.sum){
            largestSum.sum = sum 
            largestSum.num1 = element
            largestSum.num2 = inputArray[index+1]
        }
    });
    return `${largestSum.num1} and ${largestSum.num2} produce the largest product.`
}


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

console.log(adjacentElementsProduct([1, 100, -10, -500, 7, 20]));

console.log(adjacentElementsProduct([-3, -6, -2, -5, -7, -3]));
