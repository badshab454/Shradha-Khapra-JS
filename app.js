let arr = [1,2,3,4,4,5]

let output = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(output);