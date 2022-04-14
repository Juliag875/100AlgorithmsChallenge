function almostIncreasingSequence(sequence) {
    let count = 0
    let index = 0
    while(index < sequence.length && count <= 1){
        if(sequence[index] > sequence[index+1]) count++ 
        index++
    }
    return count <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 