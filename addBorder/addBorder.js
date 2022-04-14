function addBorder(picture){
    //Find the length of the picture, add 2 to account for the start and end of the frame.
    const length = picture.length+2;
    //Build the top and bottom
    const topAndBottom = '*'.repeat(length)
    const sideFrames = picture.map(item => `*${item}*`)
    //Builds adds the top, sides and bottom 
    return [topAndBottom, ...sideFrames, topAndBottom]
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcd", "efgh", "ijkl"]));