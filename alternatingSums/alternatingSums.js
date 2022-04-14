function alternatingSums(arr){  
    return [
        arr.filter((num, index) => index%2 === 0).reduce((prev, current) => prev+current, 0),
        arr.filter((num, index) => index%2 !== 0).reduce((prev, current) => prev+current, 0),
    ];
};

console.log(alternatingSums([50, 60, 60, 45, 70]))