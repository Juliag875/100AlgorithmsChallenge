function add() {
    let sum = 0
    for(item in arguments){
        sum = arguments[item] + sum
    }
    return sum
}

//Sum 2 numbers
console.log(add(1, 2));
console.log(add(3, 2));
//Sum multiple arguments
console.log(add(1,2,3,4,5));
console.log(add(2,3));

