let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sumArr = arr.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sumArr);
