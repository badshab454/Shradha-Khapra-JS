function find_median(arr){
    arr.sort((a, b) => a - b)
    return arr;
}

const arr = [80, 75, 60, 25]
console.log(find_median(arr));