function longest(names, n) {
    let longestIndex = 0;

    for (let i = 1; i < n; i++) {
        if (names[i].length > names[longestIndex].length) {
            longestIndex = i;
        }
    }

    return names[longestIndex];
}

const namesList = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"];
const result = longest(namesList,5)
console.log(result);