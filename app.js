function hashPlusCount(str) {
   let arr = str.split("");
   let hash = 0;
   let plus = 0;
   for (let i = 0; i < arr.length; i++){
	if(arr[i] === "#"){
		hash++;
	} else {
		plus++
	}
   }
   return [hash, plus];
}

console.log(hashPlusCount("###+"));