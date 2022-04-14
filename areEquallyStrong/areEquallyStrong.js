function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if((yourLeft+yourRight) === (friendsLeft+friendsRight)) return true
    if((yourLeft === friendsLeft) && (yourRight === friendsRight)) return true
    return false
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
