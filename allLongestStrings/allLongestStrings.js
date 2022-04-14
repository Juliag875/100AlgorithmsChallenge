function allLongestStrings(inputArray) {
    const maxLength = Math.max(...inputArray.map(str => str.length))
    return inputArray.filter(str => str.length === maxLength)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aaba"]));
