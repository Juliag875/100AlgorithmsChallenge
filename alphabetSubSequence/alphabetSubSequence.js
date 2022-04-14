
function alphabetSubsequence(str) {
    const split = str.split('')
    let index = 0
    while(index < split.length-1){
        if(split[index].charCodeAt() >= split[index+1].charCodeAt()) return false
        index++
    }
    return true
}

console.log('return', alphabetSubsequence('zab'))
console.log('return', alphabetSubsequence('effg'))
console.log('return', alphabetSubsequence('cdce'))
console.log('return', alphabetSubsequence('ace'))
console.log('return', alphabetSubsequence('bxz'))
