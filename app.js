function solution(a){
    const people = a.filter(element => element!== -1);
    return people;
}


const result = solution([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(result); 