function smallestSubstring(S) {
    let count = {'0': 0, '1': 0, '2': 0};
    let start = 0;
    let minLength = Infinity;

    for (let end = 0; end < S.length; end++){
        count [s[end]]++;
        
        while (count['0'] > 0 && count['1'] > 0 && count['2'] > 0) {
            minLength = Math.min(minLength, end - start + 1);
            count[S[start]]--;
            start++
        }
    }
    return minLength === Infinity ? - 1 : minLength;
}