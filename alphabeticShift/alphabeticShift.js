function alphabeticShift(str) {
     return str.toLowerCase().split('').map(char => char.charCodeAt()=== 'z'.charCodeAt()?'a':String.fromCharCode(char.charCodeAt()+1)).join('')
}

console.log(alphabeticShift('crazy'));