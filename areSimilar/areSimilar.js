function areSimilar(arr1, arr2){

    if(arr1.join('') == arr2.join('')) return true
    for(let index = 0; index < arr1.length-1; index++){
        let tempArr = [...arr2]
        let temp = tempArr[index]
        tempArr[index] = tempArr[index+1]
        tempArr[index+1] = temp
        if(arr1.join('') == tempArr.join('')) return true
    }
   return false
}

console.log('return', areSimilar([1, 2, 3], [1, 2, 3]));
console.log('return', areSimilar([1, 2, 3], [2, 1, 3]));
console.log('return', areSimilar([1, 2, 2], [2, 1, 1]));
